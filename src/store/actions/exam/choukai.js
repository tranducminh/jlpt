import * as actions from '../actionTypes';

export const refreshChoukai = () => ({
    type: actions.REFRESH_CHOUKAI
})

export const getNextChoukaiAudio = () => ({
    type: actions.GET_NEXT_CHOUKAI_AUDIO
})

export const getChoukaiData = (level) => ({
    type: actions.GET_CHOUKAI_DATA,
    level
})

export const getChoukaiDataSuccess = (listeningSkillMondai, choukaiMondai, choukaiSentence) => ({
    type: actions.GET_CHOUKAI_DATA_SUCCESS,
    listeningSkillMondai,
    choukaiMondai,
    choukaiSentence
})

export const startChoukaiAudio = () => ({
    type: actions.START_CHOUKAI_AUDIO
})

export const stopChoukaiAudio = () => ({
    type: actions.STOP_CHOUKAI_AUDIO
})