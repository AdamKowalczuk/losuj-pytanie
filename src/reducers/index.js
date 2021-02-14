
import actualQuestionReducer from './draw';
import categoryReducer from './category'
import { combineReducers } from 'redux';
import modeReducer from './mode';
import requiredExpReducer from './requiredExp';
import expReducer from './exp';
import levelReducer from './level';
import isAchievementsOpenReducer from './isAchievementsOpen';
import counterReducer from './counter';
import playersReducer from './players';
import playersNumberReducer from './playersNumber';
import previousActiveReducer from './previousActive';
import isStartedReducer from './isStarted';
import actualPlayerReducer from './actualPlayer';
import isCategorySelectedReducer from './isCategorySelected';
import isMenuDisabledReducer from './isMenuDisabled';

const allReducers = combineReducers({
    actualQuestion: actualQuestionReducer,
    category: categoryReducer,
    mode:modeReducer,
    exp:expReducer,
    level:levelReducer,
    requiredExp:requiredExpReducer,
    isAchievementsOpen:isAchievementsOpenReducer,
    counter:counterReducer,
    previousActive:previousActiveReducer,
    players:playersReducer,
    playersNumber:playersNumberReducer,
    isStarted:isStartedReducer,
    actualPlayer:actualPlayerReducer,
    isCategorySelected:isCategorySelectedReducer,
    isMenuDisabled:isMenuDisabledReducer,

})

export default allReducers;