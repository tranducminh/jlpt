import * as actions from './actionTypes';

export const getExamListDemo = () => ({
    type: actions.GET_EXAM_LIST_DEMO,
})

export const getExamListDemoSuccess = (examList) => ({
    type: actions.GET_EXAM_LIST_DEMO_SUCCESS,
    examList
})

