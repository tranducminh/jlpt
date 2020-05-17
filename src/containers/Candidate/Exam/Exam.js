import React from 'react';
import styles from './Exam.scss';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import Part1 from './Part/Part1';
import Part2 from './Part/Part2';
import Part3 from './Part/Part3';
import Result from './Result/Result';
import ResultDetail from './ResultDetail/ResultDetail';
import Menu from '../Menu/Menu';

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            examNumber: null,
            examInfo: {},
            displayPart1: this.props.displayPart.part1,
            displayPart2: this.props.displayPart.part2,
            displayPart3: this.props.displayPart.part3,
            displayResult: this.props.displayPart.result,
            displayResultDetail: this.props.displayPart.resultDetail,
            mark: {},
            resultDetail: {},
            userAnswerList: [],
            isComplete: false
        }
    }
    onComplete = () => {
        this.props.sendAnswerList(this.state.userAnswerList);
        this.props.getAnswerList(this.state.examNumber);
    }
    componentWillMount() {
        this.setState({
            examNumber: this.props.match.params.examId
        })
    }
    componentDidMount() {
        this.props.getExamInfo(this.state.examNumber);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.mark && this.props.mark !== prevProps.mark) {
            this.setState({
                mark: this.props.mark
            })
        }
        if (this.props.displayPart && this.props.displayPart !== prevProps.displayPart) {
            this.setState({
                displayPart1: this.props.displayPart.part1,
                displayPart2: this.props.displayPart.part2,
                displayPart3: this.props.displayPart.part3,
                displayResult: this.props.displayPart.result,
                displayResultDetail: this.props.displayPart.resultDetail,
            })
        }
        if (this.props.resultDetail && this.props.resultDetail !== prevProps.resultDetail) {
            this.setState({
                resultDetail: this.props.resultDetail
            })
        }
        if (this.state.isComplete === true && this.state.isComplete !== prevState.isComplete){
            this.onComplete();
        }
        if(this.props.examInfo && this.props.examInfo !== prevProps.examInfo) {
            this.setState({
                examInfo: this.props.examInfo
            })
        }
    }

    componentWillUnmount() {
        this.props.refreshExam();
    }

    getUserAnswerList = (userAnswerList, isComplete) => {
        this.setState({
            userAnswerList: [...this.state.userAnswerList, ...userAnswerList],
            isComplete: isComplete
        })
    }

    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.exam}>
                        {this.state.displayPart1 ?
                            <Part1 examNumber={this.state.examNumber} getUserAnswerList={this.getUserAnswerList} time={50} examInfo={this.state.examInfo}/>
                            : null
                        }
                        {this.state.displayPart2 ?
                            <Part2 examNumber={this.state.examNumber} getUserAnswerList={this.getUserAnswerList} time={this.state.examInfo.examDurationPart1 - 50} examInfo={this.state.examInfo}/>
                            : null
                        }
                        {this.state.displayPart3 ?
                            <Part3 examNumber={this.state.examNumber} getUserAnswerList={this.getUserAnswerList} time={this.state.examInfo.examDurationPart2} examInfo={this.state.examInfo}/>
                            : null
                        }
                        {this.state.displayResult ?
                            <Result mark={this.state.mark} examInfo={this.state.examInfo}/>
                            : null
                        }
                        {this.state.displayResultDetail ?
                            <ResultDetail resultDetail = {this.state.resultDetail} examInfo={this.state.examInfo}/>
                            : null
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    mark: state.exam.mark,
    displayPart: state.exam.displayPart,
    resultDetail: state.exam.resultDetail,
    isAuth: state.auth.isAuth,
    examInfo: state.exam.info
})
const mapDispatchToProps = dispatch => ({
    getAnswerList: (examNumber) => dispatch(actions.getAnswerList(examNumber)),
    refreshExam: () => dispatch(actions.refreshExam()),
    sendAnswerList: (answerList) => dispatch(actions.sendAnswerListAllPart(answerList)),
    getExamInfo: (examNumber) => dispatch(actions.getExamInfo(examNumber))
})
export default connect(mapStateToProps, mapDispatchToProps)(Exam);
