import React from 'react';
import Countdown from 'react-countdown-now';
import Proptypes from 'prop-types';
import styles from './CountdownTimer.scss';

const countdownTimer = props => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            props.timeOut()
            return <div>Hết giờ</div>;
        }
        else {
            return (
            <span className={styles.time}>
                {hours}:{minutes}:{seconds}
            </span>)
        }
    }
    return (
        <Countdown date={Date.now() + props.time} renderer={renderer} />
    )
}


countdownTimer.propTypes = {
    time: Proptypes.number.isRequired // ms
}

export default React.memo(countdownTimer);