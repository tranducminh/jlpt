import React, { Component } from 'react';
import styles from './NotFoundPage.scss';
import Menu from '../Candidate/Menu/Menu';
import Footer from '../Candidate/Footer/Footer';

class NotFoundPage extends Component {
	render() {
		return (
			<React.Fragment>
				<Menu />
				<div className={styles.container}>
					<div className={styles.content}>
						<div>
							<div className={styles.code}>404</div>
							<div className={styles.mess}>Không tìm thấy trang bạn yêu cầu</div>
						</div>

						<i className={`far fa-frown ${styles.icon}`}></i>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default NotFoundPage;


