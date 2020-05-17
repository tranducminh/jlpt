import React, { Component } from 'react';
import styles from '../LoginSignup.scss';
import Menu from '../../Menu/Menu';
import Footer from '../../Footer/Footer';
import Input from '../../../../components/UI/Input/Input/Input';
class ForgotPassword extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            Lấy lại mật khẩu
                        </div>
                        <div className={styles.block}>
                            <Input name="email" changed={this.onHandleChange} type="text" placeholder="Email" title="Email" />
                        </div>
                        <div className={styles.block}>
                            <div className="button-search" onClick={this.onHandleLogin}>Lấy lại mật khẩu</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}


ForgotPassword.propTypes = {
    
};


export default ForgotPassword;
