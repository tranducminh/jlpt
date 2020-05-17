import React from 'react';
import styles from './Profile.scss';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import Input from '../../../components/UI/Input/Input/Input';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayProfile: true,
            displayExam: false,
            userInfo: ''
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.userInfo && this.props.userInfo != prevProps.userInfo) {
            this.setState({
                userInfo: this.props.userInfo
            })
        }
    }

    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }

    onHandleUpdateProfile = () => {
        if(!this.state.fullname) {
            this.props.updateProfile({
                fullname: this.state.userInfo.fullname,
                contactNumber: this.state.contactNumber
            })
        }
        else {
            this.props.updateProfile({
                fullname: this.state.fullname,
                contactNumber: this.state.contactNumber
            })
        }
    }

    onHandleUpdatePassword = () => {
        if(this.state.newPassword != this.state.re_newPassword){
            alert("Mật khẩu nhập lại không trùng khớp");
            return;
        }
        this.props.updatePassword({
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
        })
    }

    render() {
        return (
            !this.props.isAuth ? <Redirect to={process.env.REACT_APP_PATH_SIGNIN} /> :
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.nav}>
                            <div className={styles.navItem}>
                                <i className={`${styles.icon} far fa-address-card`}></i>
                                Thông tin cá nhân
                            </div>
                            <div className={styles.navItem}>
                                <i className={`${styles.icon} fas fa-history`}></i>
                                Lịch sử thi
                            </div>
                        </div>
                        {this.state.displayProfile
                            ? <div className={styles.profile}>
                                <div className={styles.avt}>
                                    <div className={styles.img}>
                                        <img src={this.state.userInfo.avatar}></img>
                                    </div>
                                    <div className={styles.username}>{this.state.userInfo.fullname}</div>
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.part}>
                                        <Input name="email" type="email" title="Email" placeholder="Email" disabled={true} value={this.state.userInfo.email}/>
                                        <Input name="fullname" changed={this.onHandleChange} type="text" title="Họ tên" placeholder={this.state.userInfo.fullname} disabled={true} value={this.state.userInfo.fullname}/>
                                        <Input name="contactNumber" changed={this.onHandleChange} type="number" title="Số điện thoại" placeholder="Số điện thoại"/>
                                        <div className="btn_" onClick={this.onHandleUpdateProfile}>Cập nhật thông tin</div>
                                    </div>
                                    <div className={styles.part}>
                                        <Input name="oldPassword" changed={this.onHandleChange} type="password" title="Mật khẩu cũ" placeholder="Mật khẩu cũ"/>
                                        <Input name="newPassword" changed={this.onHandleChange} type="password" title="Mật khẩu mới" placeholder="Mật khẩu mới"/>
                                        <Input name="re_newPassword" changed={this.onHandleChange} type="password" title="Nhập lại mật khẩu mới" placeholder="Nhập lại mật khẩu mới"/>
                                        <div className="btn_" onClick={this.onHandleUpdatePassword}>Đổi mật khẩu</div>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
                <Footer />
            </React.Fragment> 
            // : <Redirect to={process.env.REACT_APP_PATH_SIGNIN} />
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userInfo: state.auth.userInfo
})

const mapDispatchToProps = dispatch => ({
    updatePassword: (passwordData) => dispatch(actions.updatePassword(passwordData)),
    updateProfile: (profileData) => dispatch(actions.updateProfile(profileData))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);