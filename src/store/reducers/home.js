import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    examList: []
}

const getExamListDemoSuccess = (state, action) => {
    return updateObject(state, {
        examList: action.examList
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EXAM_LIST_DEMO_SUCCESS: return getExamListDemoSuccess(state, action);
        default: return state;
    }
}

export default reducer;