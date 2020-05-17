import * as actions from './actionTypes';

export const signInLocal = (signinData) => ({
    type: actions.SIGN_IN_LOCAL,
    signinData
})

export const signInLocalSuccess = (userData) => ({
    type: actions.SIGN_IN_LOCAL_SUCCESS,
    userData
})

export const signUpLocal = (signupData) => ({
    type: actions.SIGN_UP_LOCAL,
    signupData
})

export const signUpLocalSuccess = (userData) => ({
    type: actions.SIGN_UP_LOCAL_SUCCESS,
    userData
})

export const getUserInfo = () => ({
    type: actions.GET_USER_INFO
})

export const getUserInfoSuccess = (userData) => ({
    type: actions.GET_USER_INFO_SUCCESS,
    userData
})

export const signOut = () => ({
    type: actions.SIGN_OUT
})

export const updatePassword = (passwordData) => ({
    type: actions.UPDATE_PASSWORD,
    passwordData
})

export const updateProfile = (profileData) => ({
    type: actions.UPDATE_PROFILE,
    profileData
})