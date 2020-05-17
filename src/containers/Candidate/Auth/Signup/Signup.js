import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import {Redirect} from 'react-router-dom';
import styles from '../LoginSignup.scss';
import Menu from '../../Menu/Menu';
import Footer from '../../Footer/Footer';
import Input from '../../../../components/UI/Input/Input/Input';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '',
            username: '',
            password: '',
            re_password: ''
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

    onHandleSignUp = () => {
        this.props.signUpLocal(this.state);
    }

    render() {
        return (
            this.props.isAuth ? <Redirect to="/" /> :
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            Đăng ký
                        </div>
                        <div className={styles.block}>
                            <Input name="email" changed={this.onHandleChange} type="text" placeholder="Email" title="Email" />
                            <Input name="fullname" changed={this.onHandleChange} type="text" placeholder="Họ tên" title="Họ tên" />
                            <Input name="username" changed={this.onHandleChange} type="text" placeholder="Username" title="Username" />
                            <Input name="password" changed={this.onHandleChange} type="password" placeholder="Mật khẩu" title="Mật khẩu" />
                            <Input name="re_password" changed={this.onHandleChange} type="password" placeholder="Nhập lại mật khẩu" title="Nhập lại mật khẩu" />
                        </div>
                        <div className={styles.block}>
                            <div className="button-search" onClick={this.onHandleSignUp}>Đăng ký</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }

}
const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = dispatch => ({
    signUpLocal: (signUpData) => dispatch(actions.signUpLocal(signUpData))
})
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
// export default LoginSignup;