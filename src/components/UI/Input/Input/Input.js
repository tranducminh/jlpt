import React from 'react';
import styles from './Input.scss';

const input = props => {
    return (
        <div className={styles.container}>
            {props.title !== ''
            ? <div className={styles.title}>{props.title}</div>
            : ''
            }
            <input name={props.name} 
                type={props.type} 
                placeholder={props.placeholder} 
                className={styles.input} 
                onChange={props.changed}
                disabled={props.disabled}
                value={props.value}/>
        </div>
    )
}

export default input;