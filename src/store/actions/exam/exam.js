import * as actions from '../actionTypes';


export const refreshExam = () => ({
    type: actions.REFRESH_EXAM,
})

export const getExamNumber = (examNumber) => ({
    type: actions.GET_EXAM_NUMBER,
    examNumber
})

export const getExamInfo = (examNumber) => ({
    type: actions.GET_EXAM_INFO,
    examNumber
})

export const getExamInfoSuccess = (examInfo) => ({
    type: actions.GET_EXAM_INFO_SUCCESS,
    examInfo
})

export const getExamInfoFail = () => ({
    type: actions.GET_EXAM_INFO_FAIL
})

export const getKanjiSkillMondai = (examNumber) => ({
    type: actions.GET_KANJI_SKILL_MONDAI,
    examNumber
})

export const getKanjiSkillMondaiSuccess = (kanjiSkillMondai) => ({
    type: actions.GET_KANJI_SKILL_MONDAI_SUCCESS,
    kanjiSkillMondai
})

export const getVocabularySkillMondai = (examNumber) => ({
    type: actions.GET_VOCABULARY_SKILL_MONDAI,
    examNumber
})

export const getVocabularySkillMondaiSuccess = (vocabularySkillMondai) => ({
    type: actions.GET_VOCABULARY_SKILL_MONDAI_SUCCESS,
    vocabularySkillMondai
})

export const getGrammarSkillMondai = (examNumber) => ({
    type: actions.GET_GRAMMAR_SKILL_MONDAI,
    examNumber
})

export const getGrammarSkillMondaiSuccess = (grammarSkillMondai) => ({
    type: actions.GET_GRAMMAR_SKILL_MONDAI_SUCCESS,
    grammarSkillMondai
})

export const getReadingSkillMondai = (examNumber) => ({
    type: actions.GET_READING_SKILL_MONDAI,
    examNumber
})

export const getReadingSkillMondaiSuccess = (readingSkillMondai) => ({
    type: actions.GET_READING_SKILL_MONDAI_SUCCESS,
    readingSkillMondai
})

export const getListeningSkillMondai = (examNumber, level) => ({
    type: actions.GET_LISTENING_SKILL_MONDAI,
    examNumber,
    level
})

export const getListeningSkillMondaiSuccess = (listeningSkillMondai, choukaiMondai, choukaiSentence) => ({
    type: actions.GET_LISTENING_SKILL_MONDAI_SUCCESS,
    listeningSkillMondai,
    choukaiMondai,
    choukaiSentence
})

export const getAnswerList = (examNumber) => ({
    type: actions.GET_ANSWER_LIST,
    examNumber
})

export const getAnswerListSuccess = (answerList) => ({
    type: actions.GET_ANSWER_LIST_SUCCESS,
    answerList
})

export const sendAnswerListPart1 = (answerList) => ({
    type: actions.SEND_ANSWER_LIST_PART1,
    answerList
})

export const sendAnswerListPart2 = (answerList) => ({
    type: actions.SEND_ANSWER_LIST_PART2,
    answerList
})


export const sendAnswerListPart3 = (answerList) => ({
    type: actions.SEND_ANSWER_LIST_PART3,
    answerList
})

export const sendAnswerListAllPart = (answerList) => ({
    type: actions.SEND_ANSWER_LIST_ALL_PART,
    answerList
})

export const getResult = () => ({
    type: actions.GET_RESULT
})

export const getMarkPart1 = (answerList) => ({
    type: actions.GET_MARK_PART_1,
    answerList
})

export const getMarkPart2 = (answerList) => ({
    type: actions.GET_MARK_PART_2,
    answerList
})

export const getMarkPart3 = (answerList) => ({
    type: actions.GET_MARK_PART_3,
    answerList
})

export const completePart1 = () => ({
    type: actions.COMPLETE_PART1
})

export const completePart2 = () => ({
    type: actions.COMPLETE_PART2
})

export const completePart3 = () => ({
    type: actions.COMPLETE_PART3
})

export const watchResultDetail = () => ({
    type: actions.WATCH_RESULT_DETAIL
})