import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skill.scss';

const skill = props => {
    let result;
    switch (props.skill) {
        case 'Listening':
            result = <div className={styles.skill}>Nghe hiểu</div>
            break;

        case 'Reading':
            result = <div className={styles.skill}>Đọc hiểu</div>
            break;

        case 'Grammar':
            result = <div className={styles.skill}>Ngữ pháp</div>
            break;

        case 'Vocabulary':
            result = <div className={styles.skill}>Từ vựng</div>
            break;

        case 'Kanji':
            result = <div className={styles.skill}>Kanji</div>
            break;
        default:
            result=''
            break;
    }
    return result;
}

skill.propTypes = {
    skill: PropTypes.oneOf(['Listening', 'Reading', 'Grammar', 'Vocabulary', 'Kanji', ''])
}

export default skill;