import React from 'react';
import ExamItem from '../ExamItem/ExamItem';
import styles from './ExamListDemo.scss';

const examListDemo = props => {
    return(
        <div className={styles.container}>
            {props.examList.map((item, index) => (
                <div className={styles.item} key={index}>
                    <ExamItem  {...item} />
                </div>
            ))}
        </div>
    )
}

export default examListDemo;