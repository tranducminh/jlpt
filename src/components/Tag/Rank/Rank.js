import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rank.scss';

const rank = props => {
    let result;
    switch (props.rank) {
        case "1":
            result = <div className={styles.rank} style={{ backgroundColor: "#ce2f44" }}>{props.rank}</div>
            break;

        case "2":
            result = <div className={styles.rank} style={{ backgroundColor: "#0f36a5" }}>{props.rank}</div>
            break;

        case "3":
            result = <div className={styles.rank} style={{backgroundColor: "#26ae61"}}>{props.rank}</div>
            break;

        case "4":
            result = <div className={styles.rank} style={{ backgroundColor: "#e7c33f" }}>{props.rank}</div>
            break;

        case "5":
            result = <div className={styles.rank} style={{ backgroundColor: "#3fe1e7" }}>{props.rank}</div>
            break;

        default:
            result = <div className={styles.rank} style={{ backgroundColor: "#3fe1e7" }}>{props.rank}</div>
            break;

    }
    return result;
}

rank.propTypes = {
    rank: PropTypes.string.isRequired
}

export default rank;