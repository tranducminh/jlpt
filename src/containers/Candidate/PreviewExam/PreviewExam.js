import React from 'react';
import styles from './PreviewExam.scss';
import TimeLine from '../Exam/TimeLine/TimeLine';
import Level from '../../../components/Tag/Level/Level';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';

class Preview extends React.Component {
    constructor() {
        super();
        this.state = {
            examInfo: null,
            isError: false
        }
    }
    componentDidMount() {
        this.props.getExamInfo(this.props.match.params.examId)
    }
    componentDidUpdate(prevProps) {
        if (this.props.examInfo && this.props.examInfo != prevProps.examInfo) {
            this.setState({
                examInfo: this.props.examInfo
            })
        }
        if (this.props.isError && this.props.isError != prevProps.isError) {
            this.setState({
                isError: this.props.isError
            })
        }
    }

    render() {
        return (
            this.state.isError == true 
            ? <NotFoundPage />  :
            this.state.examInfo == null ? null :
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.name}>
                            {this.state.examInfo.examTitle}
                        </div>
                        <div className={styles.part}>
                            <div className={styles.title}>Cấp độ: </div>
                            <Level level={this.state.examInfo.examLevel} />
                        </div>
                        <div className={styles.part}>
                            <div className={styles.title}>Thời gian: {this.state.examInfo.examDurationPart1 + this.state.examInfo.examDurationPart2} phút</div>
                        </div>
                        <div className={styles.part}>
                            {this.props.isAuth
                                ? <NavLink to={{ pathname: process.env.REACT_APP_PATH_EXAM_DETAIL.replace(':examId', this.state.examInfo.examNumber) }}>
                                    <div className={styles.btn}>Vào thi ngay</div>
                                </NavLink>
                                : <NavLink to={process.env.REACT_APP_PATH_SIGNIN}>
                                    <div className={styles.btn}>Đăng nhập để bắt đầu làm bài</div>
                                </NavLink>
                            }

                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <TimeLine examInfo = {this.state.examInfo} />
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    examInfo: state.exam.info,
    isError: state.exam.info.isError
})

const mapDispatchToProps = dispatch => ({
    getKanjiSkillMondai: (examNumber) => dispatch(actions.getKanjiSkillMondai(examNumber)),
    getVocabularySkillMondai: (examNumber) => dispatch(actions.getVocabularySkillMondai(examNumber)),
    getGrammarSkillMondai: (examNumber) => dispatch(actions.getGrammarSkillMondai(examNumber)),
    getReadingSkillMondai: (examNumber) => dispatch(actions.getReadingSkillMondai(examNumber)),
    getListeningSkillMondai: (examNumber) => dispatch(actions.getListeningSkillMondai(examNumber)),
    getExamInfo: (examNumber) => dispatch(actions.getExamInfo(examNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Preview);