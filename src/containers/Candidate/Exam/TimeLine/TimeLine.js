import React from 'react';
import styles from './TimeLine.scss';
import Skill from '../../../../components/Tag/Skill/Skill'

class TimeLine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            examInfo: this.props.examInfo
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.examInfo && this.props.examInfo != prevProps.examInfo){
            this.setState({
                examInfo: this.props.examInfo
            })
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span className={styles.part}></span>
                        <span className={styles.time}>Phần 1</span>
                        <span className={styles.time}>50 phút</span>
                    </div>
                    <div className={styles.item}>
                        <Skill skill='Kanji' />
                    </div>
                    <div className={styles.item}>
                        <Skill skill='Vocabulary' />
                    </div>
                    <div className={styles.item}>
                        <Skill skill='Grammar' />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span className={styles.part}></span>
                        <span className={styles.time}>Nghỉ giữa giờ</span>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span className={styles.part}></span>
                        <span className={styles.time}>Phần 2</span>
                        <span className={styles.time}>{this.state.examInfo.examDurationPart1 -50} phút</span>
                    </div>
                    <div className={styles.item}>
                        <Skill skill='Reading' />
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span className={styles.part}></span>
                        <span className={styles.time}>Nghỉ giữa giờ</span>
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.header}>
                        <span className={styles.part}></span>
                        <span className={styles.time}>Phần 3</span>
                        <span className={styles.time}>{this.state.examInfo.examDurationPart2} phút</span>
                    </div>
                    <div className={styles.item}>
                        <Skill skill='Listening' />
                    </div>
                </div>
            </div>
        )
    }
}

export default TimeLine;