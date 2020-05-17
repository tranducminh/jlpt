import React from 'react';
import Menu from '../../Menu/Menu';
import styles from './Result.scss';
import * as actions from '../../../../store/actions';
import { connect } from 'react-redux';

class Result extends React.Component {
    watchResultDetail = () => {
        this.props.watchResultDetail();
    }
    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.title}>KẾT QUẢ BÀI THI</div>
                    <div className={styles.exam}>{this.props.examInfo.examTitle}</div>
                    {this.props.mark
                        ?
                        <div>
                            <div className={styles.detail}>
                                <div className={styles.part}>
                                    <div className={styles.namePart}>Từ vựng</div>
                                    <div className={styles.mark}>{this.props.mark.part1}/60</div>
                                </div>
                                <div className={styles.part}>
                                    <div className={styles.namePart}>Đọc hiểu </div>
                                    <div className={styles.mark}>{this.props.mark.part2}/60</div>
                                </div>
                                <div className={styles.part}>
                                    <div className={styles.namePart}>Nghe hiểu</div>
                                    <div className={styles.mark}>{this.props.mark.part3}/60</div>
                                </div>
                                <div className={styles.part}>
                                    <div className={styles.namePart}>Tổng điểm</div>
                                    <div className={styles.mark}>{this.props.mark.total}/180</div>
                                </div>
                            </div>
                            <div className={styles.review} onClick={this.watchResultDetail}>Xem đáp án</div>
                        </div>
                        : null
                    }

                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    watchResultDetail: () => dispatch(actions.watchResultDetail())
})
export default connect(mapStateToProps, mapDispatchToProps)(Result);