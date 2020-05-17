import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../../shared/utility';
import { customizeMondai, customizeAnswerList, getMark, customizeResultDetail, customizeAudio } from '../../../shared/CustomizeExam'

const initialState = {
    examNumber: null,
    info: {
        isError: false
    },
    mondaiData: {},
    choukaiData:{},
    kanjiSkillMondai: [],
    vocabularySkillMondai: [],
    grammarSkillMondai: [],
    readingSkillMondai: [],
    listeningSkillMondai: [],
    answerList: [],
    userAnswerList: {},
    mark:{},
    displayPart: {
        part1: true,
        part2: false,
        part3: false,
        result: false,
        resultDetail: false
    },
    completeExam: false,
    resultDetail: {}
}
/**
 * refresh
 */
const refreshExam = (state, action) => {
    return updateObject(state, initialState);
}
/**
 * get exam infomation
 */
const getExamInfoSuccess = (state, action) => {
    return updateObject(state, {
        info: action.examInfo
    })
}
const getExamInfoFail = (state, action) => {
    return updateObject(state, {
        info: {
            isError: true
        }
    })
}

/**
 * Get data each of mondai
 * @param {*} state 
 * @param {*} action 
 * @param {*} mondaiName 
 */
const updateMondai = (state, action, mondaiName) => {
    return updateObject(state, {
        [mondaiName]: customizeMondai(action[mondaiName]),
        mondaiData: {
            ...state.mondaiData,
            [mondaiName]: action[mondaiName]
        }
    })
}
const getKanjiSkillMondaiSuccess = (state, action) => {
    return updateMondai(state, action, "kanjiSkillMondai")
};
const getVocabularySkillMondaiSuccess = (state, action) => {
    return updateMondai(state, action, "vocabularySkillMondai")
};
const getGrammarSkillMondaiSuccess = (state, action) => {
    return updateMondai(state, action, "grammarSkillMondai")
};
const getReadingSkillMondaiSuccess = (state, action) => {
    return updateMondai(state, action, "readingSkillMondai")
};
const getListeningSkillMondaiSuccess = (state, action) => {
    return updateObject(state, {
        listeningSkillMondai: customizeMondai(action.listeningSkillMondai),
        mondaiData: {
            ...state.mondaiData,
            listeningSkillMondai: action.listeningSkillMondai
        },
        choukaiData: {
            mondai: action.choukaiMondai,
            sentence: action.choukaiSentence,
            result: customizeAudio(customizeMondai(action.listeningSkillMondai), action.choukaiMondai, action.choukaiSentence)
        }
    })
};


/**
 * 
 * 
 */
const receiveAnswerList = (state, action, partName) => {
    return updateObject(state, {
        userAnswerList: {
            ...state.userAnswerList,
            [partName]: action.answerList
        }
    })
}
const receiveAnswerListPart1 = (state, action) => {
    return receiveAnswerList(state, action, "part1");
}
const receiveAnswerListPart2 = (state, action) => {
    return receiveAnswerList(state, action, "part2");
}
const receiveAnswerListPart3 = (state, action) => {
    return receiveAnswerList(state, action, "part3");
}
const receiveAnswerListAllPart = (state, action) => {
    return receiveAnswerList(state, action, "all");
}


/**
 * 
 * Get answer list when complete exam
 */
const getAnswerListSuccess = (state, action) => {
    let answerList = action.answerList;
    let markListPart1 = [...state.kanjiSkillMondai.markList, ...state.vocabularySkillMondai.markList, ...state.grammarSkillMondai.markList];
    let markListPart2 = [...state.readingSkillMondai.markList];
    let markListPart3 = [...state.listeningSkillMondai.markList];   
    let answerListCustomize = customizeAnswerList(answerList);
    let markPart1 = getMark(answerListCustomize, state.userAnswerList.part1, markListPart1);
    let markPart2 = getMark(answerListCustomize, state.userAnswerList.part2, markListPart2);
    let markPart3 = getMark(answerListCustomize, state.userAnswerList.part3, markListPart3);
    return updateObject(state, {
        answerList: answerList,
        resultDetail: {
            kanjiSkillMondai: getResultDetail(state, answerList, "kanjiSkillMondai"),
            vocabularySkillMondai: getResultDetail(state, answerList, "vocabularySkillMondai"),
            grammarSkillMondai: getResultDetail(state, answerList, "grammarSkillMondai"),
            readingSkillMondai: getResultDetail(state, answerList, "readingSkillMondai"),
            listeningSkillMondai: getResultDetail(state, answerList, "listeningSkillMondai")
        },
        mark: {
            part1: markPart1,
            part2: markPart2,
            part3: markPart3,
            total: markPart1 + markPart2 + markPart3
        }
    })
}

/**
 * 
 */
const completePart1 = (state, action) => {
    return updateObject(state, {
        displayPart: {
            part1: false,
            part2: true,
            part3: false,
            result: false,
            resultDetail: false
        }
    })
}
const completePart2 = (state, action) => {
    return updateObject(state, {
        displayPart: {
            part1: false,
            part2: false,
            part3: true,
            result: false,
            resultDetail: false
        }
    })
}
const completePart3 = (state, action) => {
    return updateObject(state, {
        displayPart: {
            part1: false,
            part2: false,
            part3: false,
            result: true,
            resultDetail: false
        }
    })
}
const watchResultDetail = (state, action) => {
    return updateObject(state, {
        displayPart: {
            part1: false,
            part2: false,
            part3: false,
            result: false,
            resultDetail: true
        }
    })
}

/**
 * get result detail
 */
const getResultDetail = (state, answerList, fieldname) => {
    return customizeResultDetail(state.mondaiData[fieldname], answerList, state.userAnswerList.all)
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REFRESH_EXAM: return refreshExam(state, action);


        case actionTypes.GET_EXAM_INFO_SUCCESS: return getExamInfoSuccess(state, action);
        case actionTypes.GET_EXAM_INFO_FAIL: return getExamInfoFail(state, action);
        case actionTypes.GET_KANJI_SKILL_MONDAI_SUCCESS: return getKanjiSkillMondaiSuccess(state, action);
        case actionTypes.GET_VOCABULARY_SKILL_MONDAI_SUCCESS: return getVocabularySkillMondaiSuccess(state, action);
        case actionTypes.GET_GRAMMAR_SKILL_MONDAI_SUCCESS: return getGrammarSkillMondaiSuccess(state, action);
        case actionTypes.GET_READING_SKILL_MONDAI_SUCCESS: return getReadingSkillMondaiSuccess(state, action);
        case actionTypes.GET_LISTENING_SKILL_MONDAI_SUCCESS: return getListeningSkillMondaiSuccess(state, action);

        case actionTypes.GET_ANSWER_LIST_SUCCESS: return getAnswerListSuccess(state, action);
        case actionTypes.SEND_ANSWER_LIST_PART1: return receiveAnswerListPart1(state, action);
        case actionTypes.SEND_ANSWER_LIST_PART2: return receiveAnswerListPart2(state, action);
        case actionTypes.SEND_ANSWER_LIST_PART3: return receiveAnswerListPart3(state, action);
        case actionTypes.SEND_ANSWER_LIST_ALL_PART: return receiveAnswerListAllPart(state, action);

        case actionTypes.COMPLETE_PART1: return completePart1(state, action);
        case actionTypes.COMPLETE_PART2: return completePart2(state, action);
        case actionTypes.COMPLETE_PART3: return completePart3(state, action);
        case actionTypes.WATCH_RESULT_DETAIL: return watchResultDetail(state, action);
        default:
            return state;
    }
}

export default reducer;