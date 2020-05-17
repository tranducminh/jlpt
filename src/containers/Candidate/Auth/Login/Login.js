import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions";
import styles from "../LoginSignup.scss";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import Input from "../../../../components/UI/Input/Input/Input";
import Checkbox from "../../../../components/UI/Input/Checkbox/Checkbox";
import { NavLink, Redirect } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: this.props.isAuth,
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    this.setState({
      isAuth: this.props.isAuth
    });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.isAuth);
    if (this.props.isAuth && this.props.isAuth !== prevProps.isAuth) {
      this.setState({
        isAuth: this.props.isAuth
      });
    }
  }
  onHandleChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };
  onHandleLogin = () => {
    this.props.signInLocal({
      email: this.state.email,
      password: this.state.password
    });
  };
  render() {
    return this.state.isAuth ? (
      <Redirect to="/" />
    ) : (
      <React.Fragment>
        <Menu />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>Đăng nhập</div>
            <div className={styles.block}>
              <Input
                name="email"
                changed={this.onHandleChange}
                type="text"
                placeholder="Email"
                title="Email"
              />
              <Input
                name="password"
                changed={this.onHandleChange}
                type="password"
                placeholder="Mật khẩu"
                title="Mật khẩu"
              />
            </div>
            <div className={styles.block}>
              <Checkbox title="Ghi nhớ tài khoản của tôi" />
            </div>
            <div className={styles.block}>
              <div className="button-search" onClick={this.onHandleLogin}>
                Đăng nhập
              </div>
              <GoogleLogin></GoogleLogin>
            </div>
            <div className={styles.block}>
              <NavLink to={process.env.REACT_APP_PATH_FORGOTPASSWORD}>
                Quên mật khẩu?
              </NavLink>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = dispatch => ({
  signInLocal: signinData => dispatch(actions.signInLocal(signinData))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default LoginSignup;
