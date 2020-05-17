import React from 'react';
import HomePage from '../HomePage/HomePage';
import Login from '../Auth/Login/Login';
import GoogleCallback from '../Auth/GoogleLogin/GoogleCallBack'
import Signup from '../Auth/Signup/Signup';
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword';
import Exam from '../Exam/Exam';
import PreviewExam from '../PreviewExam/PreviewExam';
import Profile from '../Profile/Profile';
import ResultDetail from '../Exam/ResultDetail/ResultDetail';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import { Route, Switch } from 'react-router-dom';
import styles from './CandidateMain.scss';

class CandidateMain extends React.Component {
	constructor() {
		super();
		this.state = {
			displayMenu: true
		}
	}

	render() {
		return (
			<div className={styles.container}>
				<Switch>
					<Route path={process.env.REACT_APP_PATH_SIGNIN} component={Login} />
					<GoogleCallback
                        path="/auth"
                        component={GoogleCallback}
                    />
					<Route path={process.env.REACT_APP_PATH_SIGNUP} component={Signup} />
					<Route path={process.env.REACT_APP_PATH_FORGOTPASSWORD} component={ForgotPassword} />
					<Route path='/' exact component={HomePage} />
					<Route path={process.env.REACT_APP_PATH_EXAM_DETAIL} component={Exam} />
					<Route path={process.env.REACT_APP_PATH_EXAM_PREVIEW} component={PreviewExam} />
					<Route path={process.env.REACT_APP_PATH_PROFILE} component={Profile} />
					<Route path={process.env.REACT_APP_PATH_EXAM_RESULT_DETAIL} component={ResultDetail} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}
}

export default CandidateMain;