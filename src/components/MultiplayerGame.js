import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../styles/multiplayerGame.scss';
import Achievements from './Achievements'
import NavMultiplayer from './NavMultiplayer'
import { setActualQuestion,setExp,setLevel, setRequiredExp,increment,setMode,setAchievementsOpen,setCategoryToActive,changeActualPlayer, disableMenu} from '../actions/index'
export default function MultiplayerGame() {
    const actualQuestion = useSelector(state => state.actualQuestion);
    const category = useSelector(state => state.category);
    const actualPlayer= useSelector(state => state.actualPlayer);
    const playersNumber= useSelector(state => state.playersNumber);
    const players= useSelector(state => state.players);
    const isCategorySelected= useSelector(state => state.isCategorySelected);
    const exp= useSelector(state => state.exp);
    const requiredExp= useSelector(state => state.requiredExp);
    const isAchievementsOpen= useSelector(state => state.isAchievementsOpen);
    const dispatch = useDispatch();

    function changeLevel() {
        if(exp>=requiredExp-1){
          dispatch(setLevel(1))
          dispatch(setRequiredExp(1.2))
          dispatch(setExp(-exp))
        }
      }
    return (
        <>
            <div className="multiplayer-game">
            {
                isAchievementsOpen===false
                ?
                <>
                <NavMultiplayer/>
                <div className="draw-container">
                    {
                    isCategorySelected ?
                    <>
                        <h2>Tura gracza</h2>
                        <h3 className="player-name">{players[actualPlayer].name}</h3>
                        <div className="h1-box">
                            <h1>{category.categoryPl}</h1>
                        </div>
                        <h3>{actualQuestion.description}</h3>
                        {
                            actualPlayer===(playersNumber-1)
                            ?
                            <button className="btn btn-main" onClick={() => {dispatch(increment(1));dispatch(setExp(1));dispatch(changeActualPlayer(playersNumber));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategoryToActive());dispatch(disableMenu())}}>
                                Zakończ rundę
                            </button>
                            :
                            <button className="btn btn-main" onClick={() => {dispatch(increment(1));dispatch(setExp(1));dispatch(changeActualPlayer(playersNumber));changeLevel();dispatch(setActualQuestion(category.categoryEn))}}>
                                Kolejny gracz
                            </button>
                        }
                    </>
                    :
                    <h2>Wybierz kategorię</h2>
                    }
                </div>
                </>
                :
                <Achievements/>
            }
            {
                isAchievementsOpen ?
                <div className="menu-box achievements-container" style={{ top: 0}} onClick={() => {dispatch(setAchievementsOpen())}}>
                    <div className="menu"><i className="fas fa-home"></i></div>
                </div>
                :
                <>
                <div className="menu-box return" onClick={() => dispatch(setMode(''))}>
                <div className="menu"><i className="fas fa-undo" ></i></div>
                </div>
                <div className="menu-box achievements-container" onClick={() => {dispatch(setAchievementsOpen())}}>
                <div className="menu"><i className="fas fa-trophy"></i></div>
                </div>
                </>
            }
            </div>
        </>
    )
}
