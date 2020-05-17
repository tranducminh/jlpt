import React from 'react';
import styles from './AnswerDetail.scss'
import { convertToHtml } from '../../shared/utility'

const radio = props => {
    return (
        <div className={styles.cntr}>
            {props.answers.map((answer, index) => (
                <div key={index} className={
                    answer.isTrue
                        ? styles.trueAnswer
                        : answer.isUserAnswer
                            ? styles.falseAnswer
                            : styles.content}>
                    <span>{index+1}.</span>
                    <span className={styles.text}>{convertToHtml(answer.answerDetail)}</span>
                </div>
            ))}
        </div>
    )
}

export default radio;