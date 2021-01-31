import './styles/App.scss';
import './styles/button.scss';
import './styles/nav.scss';
import Nav from './components/Nav';
import React from 'react'
import GameMode from './components/GameMode'

import { useSelector, useDispatch } from 'react-redux'
import { setActualQuestion } from './actions/index'

export default function App() {
  const actualQuestion = useSelector(state => state.actualQuestion);
  const category = useSelector(state => state.category);
  const mode= useSelector(state => state.mode);
  const dispatch = useDispatch();
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
          <Nav/>
          <div className="draw-container">
            <div className="h1-box">
              <h1>{category.categoryPl}</h1>
            </div>
            <h3>{actualQuestion.description}</h3>
            <button className="btn btn-main" onClick={() => dispatch(setActualQuestion(category.categoryEn))}>
              Losuj
            </button>
          </div>
        </>);

      }
      else{
        return(
        <>
          <div className="draw-container">
            <h1 >Siema frajerze </h1>
          </div>
        </>);
      }
    })()}
    </div>
  </>)
}

