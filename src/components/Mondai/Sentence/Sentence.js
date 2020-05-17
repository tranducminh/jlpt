import React from 'react';
import styles from './Sentence.scss';
import { convertToHtml } from '../../../shared/utility';
import Radio from '../../UI/Input/Radio/Radio';
import AnswerDetail from '../../AnswerDetail/AnswerDetail';
import Index from '../../Tag/Index/Index';

const sentence = props => {
    return (
        <div className={styles.container}>
            <div className={styles.sentenceDetail}>{convertToHtml(props.sentencesData.sentenceDetail)}</div>
            <div className={styles.content}>
                {props.questions.map((question, index) => {

                    return (
                        !props.isResultDetail ?
                            <div key={index} className={styles.sentence} id={question.questionData.questionOrder}>
                                <div className={styles.question}>
                                    <span><Index index={props.index + index} /></span>
                                    <span>{convertToHtml(question.questionData.questionDetail)}</span>
                                </div>
                                <div className={styles.answer}>
                                    <Radio answers={question.answers} onChange={props.onChange} />
                                </div>
                            </div>
                            : <div key={index} className={question.isTrue ? styles.trueSentence : styles.falseSentence} id={question.questionData.questionOrder}>
                                <div className={styles.question}>
                                    <span><Index index={props.index + index} /></span>
                                    <span>{convertToHtml(question.questionData.questionDetail)}</span>
                                </div>
                                <div className={styles.answer}>
                                    <AnswerDetail answers={question.answers} />
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default sentence;