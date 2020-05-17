import React from 'react';
import styles from './Index.scss';

const index = props => (
    <span className={styles.index}>{props.index}</span>
)

export default index;