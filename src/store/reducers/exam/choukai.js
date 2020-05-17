import * as actionTypes from '../../actions/actionTypes';
import store from '../../index';
import { customizeMondai, customizeAnswerList, getMark, customizeResultDetail, customizeAudio } from '../../../shared/CustomizeExam'
import { updateObject } from '../../../shared/utility';

const initialState = {
    choukaiData: [],
    isReady: false,
    playingChoukaiAudio: null,
    isPlayingIndex: 0,
    isPlaying: false
}

const refresh = (state, action) => {
    return updateObject(state, initialState)
}

const getChoukaiDataSuccess = (state, action) => {
    return updateObject(state, {
        choukaiData: customizeAudio(customizeMondai(action.listeningSkillMondai), action.choukaiMondai, action.choukaiSentence),
        isReady: true
    })
}

const getNextChoukaiAudio = (state, action) => {
    let isPlayingIndexTemp = state.isPlayingIndex + 1;
    if (isPlayingIndexTemp >= state.choukaiData.length) {
        stopChoukaiAudio(state, action);
    } else {
        return updateObject(state, {
            playingChoukaiAudio: state.choukaiData[isPlayingIndexTemp],
            isPlayingIndex: isPlayingIndexTemp
        })   
    }
}

const startChoukaiAudio = (state, action) => {
    return updateObject(state, {
        isPlaying: true,
        isPlayingIndex: 0,
        playingChoukaiAudio: state.choukaiData[0]
    })
}

const stopChoukaiAudio = (state, action) => {
    return updateObject(state, {
        isPlaying: false,
        playingChoukaiAudio: null
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REFRESH_CHOUKAI: return refresh(state, action);
        case actionTypes.GET_CHOUKAI_DATA_SUCCESS: return getChoukaiDataSuccess(state,action);
        case actionTypes.GET_NEXT_CHOUKAI_AUDIO: return getNextChoukaiAudio(state, action);
        case actionTypes.START_CHOUKAI_AUDIO: return startChoukaiAudio(state, action);
        case actionTypes.STOP_CHOUKAI_AUDIO: return stopChoukaiAudio(state, action);
        default: return state;
    }
}

export default reducer;