import React from 'react';
import styles from './Radio.scss'
import {convertToHtml} from '../../../../shared/utility'

const radio = props => {
    return (
        <div className={styles.cntr}>
            {props.answers.map((answer, index) => (
                <label key={index} htmlFor={`${answer.question}.${index+1}`} className={styles.radio}>
                    <input type="radio" name={answer.question} id={`${answer.question}.${index+1}`} value={answer.answerOrder} className={styles.hidden} onChange={props.onChange}/>
                    <span className={styles.label}></span>
                    <span className={styles.content}>{convertToHtml(answer.answerDetail)}</span>
                </label>
            ))}
        </div>
    )
}

export default radio;