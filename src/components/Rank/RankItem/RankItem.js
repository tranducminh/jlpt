import React from 'react';
import PropStyles from 'prop-types';
import styles from './RankItem.scss';
import RankTag from '../../Tag/Rank/Rank';

const rankItem = props => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.avt}>
                    <img src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className={styles.img} />
                </div>
                <div className={styles.infor}>
                    <div className={styles.name}>
                        Nguyễn Văn A
                    </div>
                    <div className={styles.point}>
                        1000 điểm
                    </div>
                </div>
            </div>
            <div className={styles.rank}>
                <RankTag rank='1' />
            </div>
        </div>
    )
}

rankItem.propStyles = PropStyles.arrayOf({
    avt: PropStyles.string,
    name: PropStyles.string.isRequired,
    point: PropStyles.string.isRequired
})

export default rankItem;

