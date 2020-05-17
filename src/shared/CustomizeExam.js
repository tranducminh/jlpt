import _ from 'lodash';

export function customizeMondai(mondaiData) {
    if (mondaiData.mondai !== null && mondaiData !== null) {
        if (mondaiData.mondai.length !== 0) {
            let mondaiTemp = [];
            let markList = [];
            let answerIndexList = [];
            mondaiData.mondai.forEach(item => {
                let sentences = _.sortBy(_.filter(mondaiData.sentences, ['mondai', item.mondaiOrder]), ['sentenceOrder'])
                let sentencesData = []
                let answerIndexListByMondai = []
                sentences.forEach(sentence => {
                    let questions = _.sortBy(_.filter(mondaiData.questions, ['sentence', sentence.sentenceOrder]), ['questionOrder'])
                    let questionsData = [];
                    questions.forEach(question => {
                        let answers = _.sortBy(_.filter(mondaiData.answers, ['question', question.questionOrder]), ['answerOrder'])
                        questionsData.push({
                            questionData: question,
                            answers: answers
                        })
                        markList.push({
                            index: question.questionOrder,
                            mark: question.mark
                        })
                        answerIndexList.push({
                            index: question.questionOrder,
                            answer: 0
                        })
                        answerIndexListByMondai.push({
                            index: question.questionOrder,
                            answer: 0
                        })
                    })
                    sentencesData.push({
                        sentencesData: sentence,
                        questions: questionsData
                    })
                })
                mondaiTemp.push({
                    mondai: item,
                    sentences: sentencesData,
                    answerIndexList: answerIndexListByMondai
                })

            })
            return ({
                mondai: mondaiTemp,
                length: mondaiTemp.length,
                markList: markList,
                answerIndexList: _.sortBy(answerIndexList, ['index'])
            });
        }
    }
}

export function customizeAudio(listeningMondai, choukaiMondai, choukaiSentence) {
    let mondaiIndex = 0;
    let mondaiSentence = 0;
    let choukaiMondai_ = _.sortBy(choukaiMondai, ['mondai'])
    let choukaiSentence_ = _.sortBy(choukaiSentence, ['sentence'])
    let result = [];
    listeningMondai.mondai.forEach(mondai => {
        result.push(...choukaiMondai_[mondaiIndex].Url);
        mondaiIndex++;
        mondai.sentences.forEach(sentence => {
            result.push(choukaiSentence_[mondaiSentence].Url);
            mondaiSentence++;
            result.push(sentence.questions[0].questionData.questionURL);
        })
        mondaiSentence = 0;
    })
    mondaiIndex = 0;

    return result;
}

export function customizeAnswerList(answerList) {
    if (answerList != null) {
        let result = []
        _.filter(answerList.answers, ['isTrue', true]).forEach(answer => {
            result.push({
                index: answer.question,
                answer: answer.answerOrder
            })
        })
        return result;
    }
}

export function getMark(answerList, userAnswerList, markList) {
    let totalMark = 0;
    let result = _.filter(userAnswerList, userAnswer => _.find(answerList, userAnswer));
    _.forEach(result, o => {
        _.forEach(markList, m => {
            if (o.index === m.index) {
                totalMark += m.mark;
            }
        })
    })
    return totalMark;
}

export function customizeResultDetail(mondaiData, answerList, userAnswerList) {
    if (mondaiData.mondai !== null && mondaiData !== null) {
        if (mondaiData.mondai.length !== 0) {
            let mondaiTemp = [];
            let resultSummary = [];
            let mondaiIndex = 1;
            mondaiData.mondai.forEach(item => {
                let sentences = _.sortBy(_.filter(mondaiData.sentences, ['mondai', item.mondaiOrder]), ['sentenceOrder'])
                let sentencesData = [];
                let resultSummaryTemp = []
                sentences.forEach(sentence => {
                    let questions = _.sortBy(_.filter(mondaiData.questions, ['sentence', sentence.sentenceOrder]), ['questionOrder'])
                    let questionsData = [];
                    questions.forEach(question => {
                        let answers = _.sortBy(_.filter(answerList.answers, ['question', question.questionOrder]), ['answerOrder'])
                        let trueAnswer = answers.find(o => o.isTrue === true).answerOrder;
                        let userAnswer = userAnswerList.find(o => o.index === question.questionOrder).answer;
                        let answersTemp = []
                        answers.forEach(answer => {
                            answersTemp.push({
                                ...answer,
                                isUserAnswer: answer.answerOrder === userAnswer ? true : false
                            })
                        })
                        questionsData.push({
                            isTrue: userAnswer === trueAnswer ? true : false,
                            questionData: question,
                            answers: answersTemp
                        })
                        resultSummaryTemp.push({
                            index: question.questionOrder,
                            answer: trueAnswer === userAnswer ? true : false
                        })
                    })
                    sentencesData.push({
                        sentencesData: sentence,
                        questions: questionsData
                    })
                })
                mondaiTemp.push({
                    mondaiIndex: mondaiIndex,
                    mondai: item,
                    sentences: sentencesData
                })
                resultSummary.push({
                    answerList: resultSummaryTemp
                })
                mondaiIndex +=1;
            })
            return ({
                mondai: mondaiTemp,
                resultSummary: resultSummary,
                length: mondaiTemp.length
            });
        }
    }
}