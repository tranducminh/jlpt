import React from 'react';
import styles from './Relax.scss';
import CountdownTimer from '../../../../components/CountdownTimer/CountdownTimer';
import Timeline from '../TimeLine/TimeLine';
import Menu from '../../Menu/Menu';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';

class Relax extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 5 * 60 * 1000
        }
    }

    complete = () => {
        switch (this.props.part) {
            case 1:
                this.props.completePart1();
                break;
            case 2:
                this.props.completePart2();
                break;
            case 3:
                this.props.completePart3();
                break;
            default:
                break; 
        }
    }
    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.timeline}>
                        <Timeline examInfo={this.props.examInfo}/>
                    </div>
                    <div className={styles.timer}>

                        <div className={styles.content}>
                            <div className={styles.exam}>2017年07月 日本語能力試験N1</div>
                            <div className={styles.title}>Nghỉ ngơi rồi hãy chiến tiếp!!!</div>
                            <div className={styles.time}>
                                <CountdownTimer time={this.state.time} timeOut = {this.complete}/>
                            </div>
                            <div className={styles.option}>
                                <div className="btn_" onClick={this.complete}>Tiếp tục làm bài thi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    completePart1: () => dispatch(actions.completePart1()),
    completePart2: () => dispatch(actions.completePart2()),
    completePart3: () => dispatch(actions.completePart3()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Relax);