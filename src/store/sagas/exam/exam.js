import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../../actions';

export function* getExamInfoSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_EXAM}/${action.examNumber}/info`)
        if(result.data){
            yield put(actions.getExamInfoSuccess(result.data));
        }
    } catch (error) {
        yield put(actions.getExamInfoFail());
    }
}

export function* getKanjiSkillMondaiSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_EXAM}/${action.examNumber}/1`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        if(result.data){
            yield put(actions.getKanjiSkillMondaiSuccess(result.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getVocabularySkillMondaiSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_EXAM}/${action.examNumber}/2`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        if(result.data){
            yield put(actions.getVocabularySkillMondaiSuccess(result.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getGrammarSkillMondaiSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_EXAM}/${action.examNumber}/3`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        if(result.data){
            yield put(actions.getGrammarSkillMondaiSuccess(result.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getReadingSkillMondaiSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_EXAM}/${action.examNumber}/4`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        if(result.data){
            yield put(actions.getReadingSkillMondaiSuccess(result.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getListeningSkillMondaiSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_EXAM}/${action.examNumber}/5`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        let choukaiMondai = yield axios.get(`${process.env.REACT_APP_URL_GET_CHOUKAI}/mondais/3`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        let choukaiSentence = yield axios.get(`${process.env.REACT_APP_URL_GET_CHOUKAI}/sentences`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        if(result.data){
            yield put(actions.getListeningSkillMondaiSuccess(result.data, choukaiMondai.data, choukaiSentence.data));
            yield put(actions.getChoukaiDataSuccess(result.data, choukaiMondai.data, choukaiSentence.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getAnswerListSaga(action) {
    try {
        let result = yield axios.get(`${process.env.REACT_APP_URL_GET_ANSWER}/all/${action.examNumber}`, {headers: {'x-auth-token': localStorage.getItem('token')}})
        if(result.data){
            yield put(actions.getAnswerListSuccess(result.data));
        }
    } catch (error) {
        console.log(error);
    }
}