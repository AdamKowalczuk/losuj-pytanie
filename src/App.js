import './styles/App.scss';
import './styles/button.scss';
import './styles/nav.scss';
import Nav from './components/Nav';
import React from 'react'
import GameMode from './components/GameMode'
import Achievements from './components/Achievements'
import Multiplayer from './components/Multiplayer'
import { useSelector, useDispatch } from 'react-redux'
import { setAchievementsOpen,setActualQuestion,setExp,setLevel, setRequiredExp,increment,getCounterFromLocalStorage,setMode,setLevelFromLocalStorage,setExpFromLocalStorage,setRequiredExpFromLocalStorage } from './actions/index'

export default function App() {
  const actualQuestion = useSelector(state => state.actualQuestion);
  const category = useSelector(state => state.category);
  const mode= useSelector(state => state.mode);
  const exp= useSelector(state => state.exp);
  const level= useSelector(state => state.level);
  const requiredExp= useSelector(state => state.requiredExp);
  const counter= useSelector(state => state.counter);
  const isAchievementsOpen= useSelector(state => state.isAchievementsOpen);
  const dispatch = useDispatch();


  function init(){
    let counter =JSON.parse(localStorage.getItem("counter"));
    let newLevel =JSON.parse(localStorage.getItem("level"));
    let newExp =JSON.parse(localStorage.getItem("exp"));
    let newRequiredExp=JSON.parse(localStorage.getItem("requiredExp"));
    if(newRequiredExp===null){
      newRequiredExp=10;
    }
    if(newLevel===null){
      newLevel=1
    }
    dispatch(setLevelFromLocalStorage(newLevel))
    dispatch(setExpFromLocalStorage(newExp))
    dispatch(setRequiredExpFromLocalStorage(newRequiredExp))
    dispatch(getCounterFromLocalStorage(counter))
  }
  init();
  function changeLevel() {
    if(exp>=requiredExp-1){
      dispatch(setLevel(1))
      dispatch(setRequiredExp(1.2))
      dispatch(setExp(-exp))
      window.localStorage.setItem("level", JSON.stringify(level+1));
      window.localStorage.setItem("requiredExp", JSON.stringify(Math.round(requiredExp*1.2)));
      window.localStorage.setItem("exp", JSON.stringify(exp-exp));
    }
    else{
      window.localStorage.setItem("exp", JSON.stringify(exp+1));
      window.localStorage.setItem("requiredExp", JSON.stringify(requiredExp));
      window.localStorage.setItem("level", JSON.stringify(level));
    }
    window.localStorage.setItem("counter", JSON.stringify(counter+1));

    // localStorage.clear();
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

