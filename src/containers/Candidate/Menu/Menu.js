import React from 'react';
import styles from './Menu.scss';
import Logo from '../../../components/Logo/Logo';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    componentDidMount() {
        this.props.getUserInfo();
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <NavLink to='/'>
                            <Logo height="3.5em" type="dark" />
                        </NavLink>
                        <div className={styles.navIcon} data-toggle="collapse" data-target="#menu">
                            <i className="fas fa-stream"></i>
                        </div>
                    </div>
                    <div className={`collapse ${styles.menu}`} id="menu">
                        <ul className={styles.optionList}>
                            <li className={styles.optionItem} id="practiceExam">
                                <div className="button-pink">
                                    <i className="fas fa-angle-double-right menu-icon"></i>
                                    Luyện đề
                                </div>
                            </li>
                            {this.props.isAuth
                                ? <React.Fragment>
                                    <li className={styles.optionItem}>
                                        <NavLink to={process.env.REACT_APP_PATH_PROFILE}>
                                            <div className={styles.profile}>
                                                <div className={styles.avt}>
                                                    {/* <img src={this.props.userInfo.avatar} alt="logo"></img> */}
                                                </div>

                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className={styles.optionItem} onClick={this.props.signOut}>
                                        <NavLink to='/'>
                                            <i className="fas fa-sign-out-alt menu-icon"></i>
                                            Đăng xuất
                                        </NavLink>
                                    </li>
                                </React.Fragment>
                                : <React.Fragment>
                                    <li className={styles.optionItem}>
                                        <NavLink to={process.env.REACT_APP_PATH_SIGNIN}>
                                            <i className="fas fa-sign-in-alt menu-icon"></i>
                                            Đăng nhập
                                        </NavLink>
                                    </li>
                                    <li className={styles.optionItem}>
                                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>
                                            <i className="fas fa-key menu-icon"></i>
                                            Đăng ký
                                        </NavLink>
                                    </li>
                                </React.Fragment>
                            }
                        </ul>
                        <ul className={styles.optionList}>
                            <li className={styles.optionItem} >
                                <NavLink to='/'>
                                    <i className="fas fa-home menu-icon"></i>
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className={styles.optionItem}>
                                <i className="fas fa-chart-line menu-icon"></i>
                                Xếp hạng
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userInfo: state.auth.userInfo
})
const mapDispatchToProps = dispatch => ({
    getUserInfo: () => dispatch(actions.getUserInfo()),
    signOut: () => dispatch(actions.signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);