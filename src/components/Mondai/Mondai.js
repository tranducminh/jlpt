import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mondai.scss';
import Sentence from './Sentence/Sentence'

const mondai = (props) => {
    let preSentenceSize = 1;
    return (
        <div className={styles.container}>
            <div className={styles.mondai}>{`問題${props.index + 1}: ${props.mondai.description}`}</div>
            {props.sentences.map((sentence, index) => {
                let sentenceSize = sentence.questions.length
                sentence = (
                <Sentence 
                    key={index} 
                    index={index + preSentenceSize} 
                    {...sentence} 
                    onChange = {props.onChange}
                    isResultDetail={props.isResultDetail}
                />)
                preSentenceSize = sentenceSize;
                return sentence;
                })}
        </div>
    )
}

mondai.propTypes = {
    mondai: PropTypes.shape({
        description: PropTypes.string.isRequired
    }),
    sentences: PropTypes.array.isRequired
}

export default mondai;
