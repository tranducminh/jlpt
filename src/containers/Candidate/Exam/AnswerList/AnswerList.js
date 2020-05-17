import React from 'react';
import styles from './AnswerList.scss';
import _ from 'lodash';

class AnswerList extends React.Component {
    render() {
        _.sortBy(this.props.answerList, ['index'])
        return (
            <div className={styles.container}>
                {this.props.answerList == null
                    ? null
                    : this.props.answerList.map((item, index) => {
                        return(<div key={index} className={styles.item}>
                            <div className={styles.index}></div>
                            <a href={`#${item.index}`}>
                                <div className={styles.answer}>{item.answer == 0 ? null : item.answer}</div>
                            </a>
                        </div>)
                })}
            </div>
        )
    }
}

export default AnswerList;