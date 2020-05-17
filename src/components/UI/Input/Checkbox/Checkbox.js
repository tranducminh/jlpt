import React from 'react';
import styles from './Checkbox.scss';

const checkbox = props => {
    return (
        <div className={styles.container}>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className={`custom-control-label ${styles.checkbox}`} htmlFor="customCheck1">{props.title}</label>
            </div>
        </div>
    )
}

export default checkbox;

