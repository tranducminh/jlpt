import React from 'react';
import styles from './AnswerList.scss';
import Countdown from '../../../../components/CountdownTimer/CountdownTimer';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';

class AnswerList extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 10000
        }
    }

    onComplete = () => {
        this.props.onComplete();
    }


    render() {
        return (
            <React.Fragment>
                <div className={styles.container}>
                    {this.props.timeStart ?
                        <div className={styles.time}>
                            <Countdown time={this.props.time} timeOut={this.onComplete} />
                        </div> : null}
                    <div className={`${styles.content} overflow-auto`}>
                        {this.props.answerList.map((item, index) => (
                            <div key={index} className={styles.mondai}>
                                <div className={styles.title}>
                                    問題{item.mondai}
                                </div>
                                <div className={styles.answerList}>
                                    {this.props.isResultDetail
                                        ? item.answerList.map((answer, index) => (
                                            <div key={index} className={styles.answer}>
                                                {answer.answer
                                                    ? <a key={answer.index} href={`#${answer.index}`} className={`${styles.answerItem} ${styles.trueAnswer}`}></a>
                                                    : <a key={answer.index} href={`#${answer.index}`} className={`${styles.answerItem} ${styles.falseAnswer}`}></a>}
                                                <div className={styles.index}>{index + 1}</div>
                                            </div>
                                        ))
                                        : item.answerList.map((answer, index) => (
                                            <div key={index} className={styles.answer}>
                                                {answer.answer === 0
                                                    ? <a key={answer.index} href={`#${answer.index}`} className={styles.answerItem}></a>
                                                    : <a key={answer.index} href={`#${answer.index}`} className={styles.answerItemChecked}></a>}
                                                    <div className={styles.index}>{index + 1}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    examInfo: state.exam.info
})

const mapDispatchToProps = dispatch => ({
    getExamInfo: (examNumber) => dispatch(actions.getExamInfo(examNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);