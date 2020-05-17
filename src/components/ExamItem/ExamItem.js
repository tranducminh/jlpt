import React from 'react';
import LevelTag from '../Tag/Level/Level';
import SkillTag from '../Tag/Skill/Skill';
import styles from './ExamItem.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { NavLink } from 'react-router-dom';

class ExamItem extends React.Component {
    getExamInfo = () => {
        this.props.getExamInfo(this.props.examNumber);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.level}>
                    <LevelTag level={this.props.examLevel} />
                </div>
                <div className={styles.skill}>
                    <SkillTag skill={this.props.skill} />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {this.props.examTitle}
                    </div>
                    <div className={styles.time}>
                        Thời gian: {this.props.examDurationPart1 + this.props.examDurationPart2} phút
                    </div>
                    <div className={styles.quantity}>
                        +1000 lượt làm bài
                    </div>
                    <div className={styles.join}>
                        {/* <JoinedExamTag joined={this.props.joined} /> */}
                        <NavLink to={{ pathname: process.env.REACT_APP_PATH_EXAM_PREVIEW.replace(':examId', this.props.examNumber) }}>
                            <div className={styles.test} onClick={this.getExamInfo}>
                                <i className="fas fa-angle-double-right" style={{ marginRight: "0.4em" }}></i>
                                Vào thi ngay
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

// ExamItem.propTypes = {
//     evel: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
//     skill: PropTypes.oneOf(['Listening', 'Reading', 'Grammar', 'Vocabulary', 'Kanji', '']),
//     nameExam: PropTypes.string.isRequired,
//     time: PropTypes.number.isRequired,
//     joined: PropTypes.oneOf(['true', 'false', ''])
// }

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    getExamInfo: (examNumber) => dispatch(actions.getExamInfo(examNumber))
})
export default connect(mapStateToProps, mapDispatchToProps)(ExamItem);