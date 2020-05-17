import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

export function* signInLocalSaga(action) {
  try {
    let result = yield axios.post(
      `${process.env.REACT_APP_URL_AUTH}/login`,
      action.signinData
    );
    localStorage.setItem("token", result.headers["x-auth-token"]);
    if (result.data) {
      yield put(actions.signInLocalSuccess(result.data));
    }
  } catch (error) {
    alert(error.response.data);
  }
}

export function* getInfoUserSaga(action) {
  try {
    let token = localStorage.getItem("token");
    if (token == null) {
    } else {
      let result = yield axios.get(`${process.env.REACT_APP_URL_AUTH}/me`, {
        headers: { "x-auth-token": token }
      });

      if (result.data) {
        yield put(actions.getUserInfoSuccess(result.data));
      }
      console.log(token);
    }
  } catch (error) {}
}

export function* signUpLocalSaga(action) {
  try {
    let result = yield axios.post(
      `${process.env.REACT_APP_URL_AUTH}/register`,
      action.signupData
    );
    localStorage.setItem("token", result.headers["x-auth-token"]);
    if (result.data) {
      yield put(actions.signUpLocalSuccess(result.data));
    }
  } catch (error) {
    alert(error.response.data);
  }
}

export function* updatePasswordSaga(action) {
  try {
    let token = localStorage.getItem("token");
    let result = yield axios.put(
      `${process.env.REACT_APP_URL_AUTH}/updatepassword`,
      action.passwordData,
      { headers: { "x-auth-token": token } }
    );
    if (result.data) {
      alert(result.data);
    }
  } catch (error) {
    alert(error.response.data);
  }
}

export function* updateProfileSaga(action) {
  try {
    let token = localStorage.getItem("token");
    let result = yield axios.put(
      `${process.env.REACT_APP_URL_AUTH}/updatedetails`,
      action.profileData,
      { headers: { "x-auth-token": token } }
    );
    if (result.data) {
      alert(result.data.msg);
    }
  } catch (error) {
    alert(error.response.data);
  }
}
