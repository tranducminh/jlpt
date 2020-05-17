import React from 'react';
import { connect } from 'react-redux';
import styles from './Part.scss';
import Mondai from '../../../../../components/Mondai/Mondai';
import AnswerList from '../../ResultAnswerList/AnswerList';
import ProccessBar from '../ProcessBar/ProcessBar';

class Part extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerListSummaryTemp: [],
            answerListSummary: [], //phiếu điền đáp án
            mondaiIndex: 0
        }
    }

    componentDidMount() {
        let answerListSummaryTemp = []
        for (let i = 0; i < this.props.part.length; i++) {
            const fieldname = this.props.part[i];
            answerListSummaryTemp.push(...this.props.resultDetail[fieldname].resultSummary)
        }
        this.setState({
            resultDetail: this.props.resultDetail,
            answerListSummary: this.updateAnswerListSummary(...answerListSummaryTemp)
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.resultDetail && this.props.resultDetail !== prevProps.resultDetail) {
            let answerListSummaryTemp = []
            for (let i = 0; i < this.props.part.length; i++) {
                const fieldname = this.props.part[i];
                answerListSummaryTemp.push(...this.props.resultDetail[fieldname].resultSummary)
            }
            this.setState({
                answerListSummary: this.updateAnswerListSummary(...answerListSummaryTemp)
            })
        }
    }

    updateAnswerListSummary = (...mondai) => {
        let answerListSummary = [];
        for (let i = 0; i < mondai.length; i++) {
            answerListSummary.push({
                mondai: i + 1,
                answerList: mondai[i].answerList
            })
        }
        return answerListSummary;
    }

    createContent() {
        let momdaiIndex = 0;
        return (
            this.props.part.map((fieldname, index) => {
                let content = (
                    this.state.resultDetail[fieldname].mondai.map((mondai, index) => (
                        <Mondai
                            key={index}
                            index={index + momdaiIndex}
                            {...mondai}
                            onChange={this.onHandleChange}
                            isResultDetail={true}
                        />
                    ))
                )
                momdaiIndex += this.state.resultDetail[fieldname].length;
                return content;
            }
            )
        )
    }

    render() {
        return (
            <div className={styles.container}>
                <ProccessBar displayPart={this.props.displayPart} />
                <div className={styles.title}>{this.props.examInfo.examTitle}</div>
                <div className={styles.answerList}>
                    <AnswerList answerList={this.state.answerListSummary} isResultDetail={true} />
                </div>
                <div className={styles.part}>
                    <div className={styles.title}>
                        {`言語知識（${this.props.titlePart}）`}
                        </div>
                    {this.state.resultDetail
                        ? <div className={styles.content}>
                            {this.createContent()}
                        </div> : null
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resultDetail: state.exam.resultDetail
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Part);
