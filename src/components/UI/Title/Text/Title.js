import React from 'react';
import styles from './Title.scss';

const title = props => (
    <div className={styles.container}>
        <div className={styles.content}>
            {props.title}
            <div className={styles.about}>
                {props.about}
            </div>
        </div>
    </div>
)

export default title;