import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../../actions';

export function* getChoukaiDataSaga(action) {
    try {
        let choukaiMondai = yield axios.get(`${process.env.REACT_APP_URL_GET_CHOUKAI}/mondais/${action.level}`, { headers: { 'x-auth-token': localStorage.getItem('token') } })
        let choukaiSentence = yield axios.get(`${process.env.REACT_APP_URL_GET_CHOUKAI}/sentences`, { headers: { 'x-auth-token': localStorage.getItem('token') } })
        if (choukaiMondai.data && choukaiSentence.data) {
            // yield put(actions.getChoukaiDataSuccess(choukaiMondai.data, choukaiSentence.data));
        }
    } catch (error) {

    }
}