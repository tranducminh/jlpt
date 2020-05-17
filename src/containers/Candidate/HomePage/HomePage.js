import React from 'react';
import styles from './HomePage.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Title from '../../../components/UI/Title/Text/Title';
import Search from '../../../components/Search/Search';
import ExamListDemo from '../../../components/ExamListDemo/ExamListDemo';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            examListDemo: []
        }
    }
    examListDemo = [
        {
            level: "N1",
            skill: '',
            nameExam: "2017年07月 日本語能力試験N1",
            time: 140,
            joined: 'false'
        },
        {
            level: "N3",
            skill: '',
            nameExam: "2017年07月 日本語能力試験N1",
            time: 140,
            joined: 'true'
        },
        {
            level: "N2",
            skill: '',
            nameExam: "2017年07月 日本語能力試験N1",
            time: 140,
            joined: 'false'
        },
        {
            level: "N4",
            skill: '',
            nameExam: "2017年07月 日本語能力試験N1",
            time: 140,
            joined: 'true'
        }, {
            level: "N2",
            skill: '',
            nameExam: "2017年07月 日本語能力試験N1",
            time: 140,
            joined: 'true'
        },
        {
            level: "N4",
            skill: '',
            nameExam: "2017年07月 日本語能力試験N1",
            time: 140,
            joined: 'true'
        }
    ]
    componentDidMount() {
        this.props.getExamListDemo();
    }
    componentDidUpdate(prevProps) {
        if(this.props.examListDemo && this.props.examListDemo !== prevProps.examListDemo){
            this.setState({
                examListDemo: this.props.examListDemo
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <div className={styles.bgCover}>
                                <div className={styles.content}>
                                    <div className={styles.title}>
                                        Kho đề thi tiếng Nhật hoàn toàn miễn phí
                                </div>
                                    <Search />
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.part}>
                                <Title title="Đề thi JLPT các năm" about="Cập nhật liên tục và chính xác đề thi các năm" />
                                <div className={styles.block}>
                                    <div className={styles.examList}>
                                        <ExamListDemo examList={this.state.examListDemo} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.part}>
                                <Title title="Đề thi chuẩn" about="Mẫu đề thi chuẩn được cập nhật liên tục" />
                                {/* <div className={styles.block}>
                                    <div className={styles.examList}>
                                        <ExamListDemo examList={this.examListDemo} />
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    examListDemo: state.home.examList
})
const mapDispatchToProps = dispatch => ({
    getExamListDemo: () => dispatch(actions.getExamListDemo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);