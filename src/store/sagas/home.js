import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function* getExamListDemoSaga(action) {
    try {
        let result = yield axios.get(process.env.REACT_APP_URL_GET_EXAM);
        if(result.data) {
            yield put(actions.getExamListDemoSuccess(result.data));
        }
    } catch (error) {
        
    }
}