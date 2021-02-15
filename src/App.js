import './styles/App.scss';
import './styles/button.scss';
import './styles/nav.scss';
import Nav from './components/Nav';
import React from 'react'
import GameMode from './components/GameMode'
import Achievements from './components/Achievements'
import Multiplayer from './components/Multiplayer'
import { useSelector, useDispatch } from 'react-redux'
import { setAchievementsOpen,setActualQuestion,setExp,setLevel, setRequiredExp,increment,setMode } from './actions/index'

export default function App() {
  const actualQuestion = useSelector(state => state.actualQuestion);
  const category = useSelector(state => state.category);
  const mode= useSelector(state => state.mode);
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
    <div className="App">
    {(() => {
      if(mode===''){
        return(
        <GameMode/>
        );
      }
      else if(mode==='singleplayer'){
        return(
        <>
          {isAchievementsOpen===false ?
          <>
            <Nav/>
            <div className="draw-container">
              <div className="h1-box">
                <h1>{category.categoryPl}</h1>
              </div>
              <h3>{actualQuestion.description}</h3>
              <button className="btn btn-main" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn))}}>
                Losuj
              </button>
            </div>
            </>
          : <Achievements/>}
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
        </>);
      }
      else{
        return(<Multiplayer/>);
      }
    })()}
    </div>
  </>)
}

