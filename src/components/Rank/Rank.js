import React from 'react';
import styles from './Rank.scss';
import RankItem from './RankItem/RankItem';

const rank = props => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Bảng xếp hạng
                </div>
                <div className={styles.about}>
                    Trung bình các bài thi trong tuần
                </div>
            </div>
            <div className={styles.content}>
                <RankItem />
            </div>
        </div>
    )
}

export default rank;