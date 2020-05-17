import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';

const initialState = {
    info: {},
    answerList: [],
    userAnswerList: {},
    mark:{},
    resultDetail: {}
}

const refresh = (state, action) => {
    return updateObject(state, initialState);
}

const getExamInfoSuccess = (state, action) => {
    return updateObject(state, {
        info: action.examInfo
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REFRESH_RESULT_EXAM: return refresh(state, action);
        case actionTypes.GET_EXAM_INFO_SUCCESS: return getExamInfoSuccess(state, action);
        default: return state;
    }
}

export default reducer;