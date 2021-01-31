
import actualQuestionReducer from './draw';
import categoryReducer from './category'
import { combineReducers } from 'redux';
import modeReducer from './mode';
import requiredExpReducer from './requiredExp';
import expReducer from './exp';
import levelReducer from './level';

const allReducers = combineReducers({
    actualQuestion: actualQuestionReducer,
    category: categoryReducer,
    mode:modeReducer,
    exp:expReducer,
    level:levelReducer,
    requiredExp:requiredExpReducer
})

export default allReducers;