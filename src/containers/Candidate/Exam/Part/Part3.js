import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import $ from 'jquery';
import { Redirect } from "react-router-dom";
import * as actions from '../../../../store/actions';
import styles from './Part.scss';
import Mondai from '../../../../components/Mondai/Mondai';
import AnswerList from '../ResultAnswerList/AnswerList';
import Modal from '../../../../components/UI/Modal/ConfirmComplete/ConfirmComplete';
import Countdown from '../../../../components/CountdownTimer/CountdownTimer';

class Part3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listeningSkillMondai: [],
            answerIndexList: [], //danh sách đáp án của user
            answerListSummary: [], //phiếu điền đáp án
            mondaiIndex: [this.props.userAnswerList.slice(-1)[0].index],
            displayExam: false,
            timeStart: false,
            timeOut: false,
            hasError: false,
            time: this.props.time * 60 * 1000
        }
    }

    componentDidMount() {
        this.props.getListeningSkillMondai(this.props.examNumber, 3);
    }

    componentDidUpdate(prevProps, prevState) {
        this.updateState(prevProps, "listeningSkillMondai");
        if (this.props.time && this.props.time !== prevProps.time) {
            this.setState({
                time: this.props.time * 60 * 1000
            })
        }
        if (this.props.isChoukaiReady === true && this.props.isChoukaiReady !== prevProps.isChoukaiReady) {
            this.props.startChoukaiAudio();
            this.setState({
                displayExam: true
            })
        }
        if (this.props.playingChoukaiAudio != null && this.props.playingChoukaiAudio !== prevProps.playingChoukaiAudio) {
            this.playAudio(`${process.env.REACT_APP_RESOURCE_DOMAIN}/${this.props.playingChoukaiAudio}`)
        }
    }

    playAudio = async (choukaiAudioLink) => {
        const delay = (timeout) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.props.getNextChoukaiAudio();
                    resolve()
                }, timeout * 1000);
            })
        }
        const getAudioDuration = (audio) => {
            return new Promise((resolve, reject) => {
                audio.onloadedmetadata = () => {
                    resolve(audio.duration);
                }
                setTimeout(() => {
                    reject('time out');
                }, 5000);
            })
        }
        let duration = 0;
        try {
            this.audio = new Audio(choukaiAudioLink)
            duration = await getAudioDuration(this.audio)
        } catch (error) {
            alert('Có chút trục trặc với bài thi này. Hãy thử với bài thi khác nhé!!')
            this.setState({
                hasError: true
            })
        }
        this.audio.load()
        this.audio.play();
        await delay(duration)
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
        this.props.getUserAnswerList(this.state.answerIndexList, true);
        this.props.completePart3();
        this.audio.pause();
        this.audio.currentTime = 0;
        this.setState({
            isPlayingIndex: null
        })

    }

    componentWillUnmount() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.props.stopChoukaiAudio();
    }

    render() {
        return (
            this.state.hasError === true ? <Redirect to="/" /> :
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
                                言語知識（聴解）
                    </div>
                            <div className={styles.content}>
                                {this.state.listeningSkillMondai.map((mondai, index) => (
                                    <Mondai key={index} index={index} {...mondai} onChange={this.onHandleChange} />
                                ))}
                            </div>
                            <div className={styles.btn} data-toggle="modal" data-target="#completeModal">Hoàn thành</div>
                        </div>
                    </div>
                    : null
        )
    }
}

const mapStateToProps = state => ({
    listeningSkillMondai: state.exam.listeningSkillMondai,
    userAnswerList: state.exam.userAnswerList.part2,
    isChoukaiReady: state.choukai.isReady,
    playingChoukaiAudio: state.choukai.playingChoukaiAudio
})
const mapDispatchToProps = dispatch => ({
    getListeningSkillMondai: (examNumber) => dispatch(actions.getListeningSkillMondai(examNumber)),
    startChoukaiAudio: () => dispatch(actions.startChoukaiAudio()),
    stopChoukaiAudio: () => dispatch(actions.stopChoukaiAudio()),
    getNextChoukaiAudio: () => dispatch(actions.getNextChoukaiAudio()),
    sendAnswerList: (answerList) => dispatch(actions.sendAnswerListPart3(answerList)),
    completePart3: () => dispatch(actions.completePart3()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Part3);