import { combineReducers } from 'redux';
import exam from './exam/exam';
import resultExam from './exam/result';
import auth from './auth';
import home from './home';
import choukai from './exam/choukai';

const rootReducer = combineReducers({
    exam,
    auth,
    home,
    resultExam,
    choukai
})

export default rootReducer;