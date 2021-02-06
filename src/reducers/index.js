
import actualQuestionReducer from './draw';
import categoryReducer from './category'
import { combineReducers } from 'redux';
import modeReducer from './mode';
import requiredExpReducer from './requiredExp';
import expReducer from './exp';
import levelReducer from './level';
import isAchievementsOpenReducer from './isAchievementsOpen';
import counterReducer from './counter'

const allReducers = combineReducers({
    actualQuestion: actualQuestionReducer,
    category: categoryReducer,
    mode:modeReducer,
    exp:expReducer,
    level:levelReducer,
    requiredExp:requiredExpReducer,
    isAchievementsOpen:isAchievementsOpenReducer,
    counter:counterReducer,
})

export default allReducers;