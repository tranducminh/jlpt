import React from 'react';
import PropTypes from 'prop-types';
import styles from './Level.scss';

const tag = props => {
    let result;
    switch (props.level) {
        case 1:
            result = <div className={styles.level} style={{ backgroundColor: "#ce2f44" }}>{`N${props.level}`}</div>
            break;

        case 2:
            result = <div className={styles.level} style={{ backgroundColor: "#0f36a5" }}>{`N${props.level}`}</div>
            break;

        case 3:
            result = <div className={styles.level} style={{backgroundColor: "#26ae61"}}>{`N${props.level}`}</div>
            break;

        case 4:
            result = <div className={styles.level} style={{ backgroundColor: "#e7c33f" }}>{`N${props.level}`}</div>
            break;

        case 5:
            result = <div className={styles.level} style={{ backgroundColor: "#3fe1e7" }}>{`N${props.level}`}</div>
            break;

        default:
            result = ''
            break;
    }
    return result;
}

// tag.propTypes = {
//     level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired
// }

export default tag;