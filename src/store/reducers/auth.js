import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isAuth: false,
    userInfo: {
        email: '',
        username: '',
        fullname: ''
    }
}

const signInLocalSuccess = (state, action) => {
    return updateObject(state, {
        isAuth: true,
        userInfo: action.userData
    })
}

const signUpLocalSuccess = (state, action) => {
    return updateObject(state, {
        isAuth: true,
        userInfo: action.userData
    })
}

const getUserInfoSuccess = (state, action) => {
    return updateObject(state, {
        isAuth: true,
        userInfo: action.userData
    })
}

const signOut = (state, acton) => {
    localStorage.removeItem('token');
    return updateObject(state, initialState)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_LOCAL_SUCCESS: return signInLocalSuccess(state, action);
        case actionTypes.SIGN_UP_LOCAL_SUCCESS: return signUpLocalSuccess(state, action);
        case actionTypes.GET_USER_INFO_SUCCESS: return getUserInfoSuccess(state, action);
        case actionTypes.SIGN_OUT: return signOut(state, action);
        default: return state;
    }
}

export default reducer;