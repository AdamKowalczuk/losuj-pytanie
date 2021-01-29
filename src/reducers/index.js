
import actualQuestionReducer from './draw';
import categoryReducer from './category'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    actualQuestion: actualQuestionReducer,
    category: categoryReducer
})

export default allReducers;