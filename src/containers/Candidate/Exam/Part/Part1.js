import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import $ from 'jquery';
import styles from './Part.scss';
import * as actions from '../../../../store/actions';
import Mondai from '../../../../components/Mondai/Mondai';
import AnswerList from '../ResultAnswerList/AnswerList';
import Modal from '../../../../components/UI/Modal/ConfirmComplete/ConfirmComplete';
import Relax from '../Relax/Relax';
import Countdown from '../../../../components/CountdownTimer/CountdownTimer';

class Part1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kanjiSkillMondai: [],
            vocabularySkillMondai: [],
            grammarSkillMondai: [],
            answerIndexList: [], //danh sách đáp án của user
            answerListSummary: [], //phiếu điền đáp án
            mondaiIndex: [],
            displayExam: true,
            timeStart: false,
            timeOut: false,
            time: this.props.time* 60 * 1000
        }
    }

    componentDidMount() {
        this.props.getKanjiSkillMondai(this.props.examNumber);
        this.props.getVocabularySkillMondai(this.props.examNumber);
        this.props.getGrammarSkillMondai(this.props.examNumber);
    }

    componentDidUpdate(prevProps) {
        this.updateState(prevProps, "kanjiSkillMondai");
        this.updateState(prevProps, "vocabularySkillMondai");
        this.updateState(prevProps, "grammarSkillMondai");
        if(this.props.time && this.props.time !== prevProps.time) {
            this.setState({
                time: this.props.time * 60 * 1000
            })
        }
    }

    timeOut = () => {
        this.onComplete()
    }

    updateState(prevProps, fieldName) {
        if (this.props[fieldName] && this.props[fieldName] !== prevProps[fieldName]) {
            let answerIndexList = _.sortBy([...this.state.answerIndexList, ...this.props[fieldName].answerIndexList], ['index'])
            this.setState({
                [fieldName]: this.props[fieldName].mondai,
                markList: {
                    ...this.state.markList,
                    ...this.props[fieldName].markList
                },
                answerIndexList: [
                    ...answerIndexList
                ],
            })
            if (!this.state.timeStart) {
                this.setState({
                    timeStart: true
                })
            }

            //Lấy các index của câu cuối cùng mỗi mondai
            if (this.props[fieldName].mondai) {
                let temp = []
                this.props[fieldName].mondai.forEach(mondai => {
                    temp.push(_.last(mondai.answerIndexList).index)
                })
                temp.push(...this.state.mondaiIndex);
                temp.sort((a, b) => a - b);
                if([fieldName] === "kanjiSkillMondai") {
                    let first = this.props[fieldName].mondai[0].answerIndexList[0].index;
                    if (first - 1 !== temp[0]){
                        temp = [first - 1, ...temp]
                    }
                }           
                this.setState({
                    mondaiIndex: temp
                })
                this.updateAnswerListSummary(answerIndexList, temp);
            }

        }
    }

    updateAnswerListSummary = (answerIndexList, mondaiIndex) => {
        let answerListSummary = [];
        for (let index = 0; index < mondaiIndex.length - 1; index++) {
            const start = mondaiIndex[index] - mondaiIndex[0];
            const end = mondaiIndex[index + 1] - mondaiIndex[0];

            answerListSummary.push({
                mondai: index + 1,
                answerList: _.slice(answerIndexList, start, end)
            })
        }
        this.setState({
            answerListSummary: [...answerListSummary]
        })
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let answerIndexList = this.state.answerIndexList;
        _.remove(answerIndexList, answerItem => {
            return answerItem.index === parseInt(name)
        })
        let temp = _.sortBy([...answerIndexList,
        {
            index: parseInt(name),
            answer: parseInt(value)
        }], ['index'])

        this.updateAnswerListSummary(temp, this.state.mondaiIndex);
        this.setState({
            answerIndexList: [...temp],
        })
    }

    onComplete = () => {
        $('#completeModal').modal('hide');
        if (this.state.displayExam) {
            this.setState({
                displayExam: false
            })
        }
        this.props.sendAnswerList(this.state.answerIndexList);
        this.props.getUserAnswerList(this.state.answerIndexList, false);
    }

    render() {
        return (
            this.state.displayExam === true
                ?
                <div className={styles.container}>
                    <Modal onComplete={this.onComplete} />
                    {this.state.timeStart ?
                        <div className={styles.countdown}>
                            <Countdown time={this.state.time} timeOut={this.onComplete} />
                        </div> : null
                    }
                    <div className={styles.title}>{this.props.examInfo.examTitle}</div>
                    <div className={styles.answerList}>
                        <AnswerList answerList={this.state.answerListSummary} timeStart={this.state.timeStart} onComplete={this.onComplete} time={this.state.time} />
                    </div>
                    <div className={styles.part}>
                        <div className={styles.title}>
                            言語知識（文字 。漢字 。 文法）
                        </div>
                        <div className={styles.content}>
                            {this.state.kanjiSkillMondai.map((mondai, index) => (
                                <Mondai
                                    key={index}
                                    index={index}
                                    {...mondai}
                                    onChange={this.onHandleChange}
                                    isResultDetail={false}
                                />
                            ))}
                            {this.state.vocabularySkillMondai.map((mondai, index) => (
                                <Mondai
                                    key={index}
                                    index={index + this.state.kanjiSkillMondai.length}
                                    {...mondai}
                                    onChange={this.onHandleChange}
                                    isResultDetail={false}
                                />
                            ))}
                            {this.state.grammarSkillMondai.map((mondai, index) => (
                                <Mondai
                                    key={index}
                                    index={index + this.state.vocabularySkillMondai.length + this.state.kanjiSkillMondai.length}
                                    {...mondai}
                                    onChange={this.onHandleChange}
                                    isResultDetail={false}
                                />
                            ))}
                        </div>
                        <div className={styles.btn} data-toggle="modal" data-target="#completeModal">Hoàn thành</div>
                    </div>
                </div>
                : <Relax part={1} examInfo={this.props.examInfo}/>
        )
    }
}

const mapStateToProps = state => ({
    kanjiSkillMondai: state.exam.kanjiSkillMondai,
    vocabularySkillMondai: state.exam.vocabularySkillMondai,
    grammarSkillMondai: state.exam.grammarSkillMondai,
    mondaiData: state.exam.mondaiData,
    examInfo: state.exam.info
})
const mapDispatchToProps = dispatch => ({
    getKanjiSkillMondai: (examNumber) => dispatch(actions.getKanjiSkillMondai(examNumber)),
    getVocabularySkillMondai: (examNumber) => dispatch(actions.getVocabularySkillMondai(examNumber)),
    getGrammarSkillMondai: (examNumber) => dispatch(actions.getGrammarSkillMondai(examNumber)),
    sendAnswerList: (answerList) => dispatch(actions.sendAnswerListPart1(answerList)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Part1);
