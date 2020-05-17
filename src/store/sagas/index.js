import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

import { getExamInfoSaga, getKanjiSkillMondaiSaga, getVocabularySkillMondaiSaga, getGrammarSkillMondaiSaga, getReadingSkillMondaiSaga, getListeningSkillMondaiSaga, getAnswerListSaga } from './exam/exam';
import { getChoukaiDataSaga } from './exam/choukai';
import { signInLocalSaga, getInfoUserSaga, signUpLocalSaga, updatePasswordSaga, updateProfileSaga  } from './auth';
import { getExamListDemoSaga } from './home';
export function* watchExam() {
    yield takeEvery(actionTypes.GET_EXAM_INFO, getExamInfoSaga);
    yield takeEvery(actionTypes.GET_KANJI_SKILL_MONDAI, getKanjiSkillMondaiSaga);
    yield takeEvery(actionTypes.GET_VOCABULARY_SKILL_MONDAI, getVocabularySkillMondaiSaga);
    yield takeEvery(actionTypes.GET_GRAMMAR_SKILL_MONDAI, getGrammarSkillMondaiSaga);
    yield takeEvery(actionTypes.GET_READING_SKILL_MONDAI, getReadingSkillMondaiSaga);
    yield takeEvery(actionTypes.GET_LISTENING_SKILL_MONDAI, getListeningSkillMondaiSaga);
    yield takeEvery(actionTypes.GET_ANSWER_LIST, getAnswerListSaga);
}

export function* watchAuth() {
    yield takeEvery(actionTypes.SIGN_IN_LOCAL, signInLocalSaga);
    yield takeEvery(actionTypes.SIGN_UP_LOCAL, signUpLocalSaga);
    yield takeEvery(actionTypes.GET_USER_INFO, getInfoUserSaga);
    yield takeEvery(actionTypes.UPDATE_PASSWORD, updatePasswordSaga);
    yield takeEvery(actionTypes.UPDATE_PROFILE, updateProfileSaga);
}

export function* watchHome() {
    yield takeEvery(actionTypes.GET_EXAM_LIST_DEMO, getExamListDemoSaga);
}

export function* watchChoukai() {
    yield takeEvery(actionTypes.GET_CHOUKAI_DATA, getChoukaiDataSaga);
}