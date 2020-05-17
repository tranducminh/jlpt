import React from 'react';
import PropTypes from 'prop-types';
import styles from './JoinedExam.scss';

const joinedExam = props => {
    let result;
    switch (props.joined) {
        case 'true':
            result = <div className={styles.joined}>Đã hoàn thành</div>
            break;

        case 'false':
            result = <div className={styles.notJoined}>Chưa hoàn thành</div>
            break;

        default:
            result = ''
            break;
    }
    return result;
}

joinedExam.propTypes = {
    joined: PropTypes.oneOf(['true', 'false', ''])
}

export default joinedExam;