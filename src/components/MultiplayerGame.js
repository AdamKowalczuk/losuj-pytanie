import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/multiplayerGame.scss'
import { changeActualPlayer,setActualQuestion,setExp,setLevel, setRequiredExp,increment,setCategoryToActive} from '../actions/index'
export default function MultiplayerGame() {
    const actualQuestion = useSelector(state => state.actualQuestion);
    const category = useSelector(state => state.category);
    const actualPlayer= useSelector(state => state.actualPlayer);
    const playersNumber= useSelector(state => state.playersNumber);
    const players= useSelector(state => state.players);
    const isCategorySelected= useSelector(state => state.isCategorySelected);
    const exp= useSelector(state => state.exp);
    const requiredExp= useSelector(state => state.requiredExp);
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

                {/* <button className="btn" onClick={()=>{dispatch(changeActualPlayer(playersNumber))}}>Kolejny gracz</button> */}
                <div className="draw-container">

                    {
                    isCategorySelected ?
                    <>
                        <h2>Tura gracza</h2>
                        <h3>{players[actualPlayer].name}</h3>
                        <div className="h1-box">
                            <h1>{category.categoryPl}</h1>
                        </div>
                        <h3>{actualQuestion.description}</h3>
                        <button className="btn btn-main" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn))}}>
                        Losuj
                        </button>
                        <button className="btn" onClick={()=>{dispatch(changeActualPlayer(playersNumber))}}>Kolejny gracz</button>
                    </>
                    :
                    <button className="btn" onClick={()=>{dispatch(setCategoryToActive())}}>Wybierz kategorię</button>
                    }
                </div>


                {/* <div className="results-container">
                    {players.map((player,id) => {
                        return (
                            <div className="result" key={id}>
                                <div className="results-name">{players[id].name}</div>
                                <div className="results-points">{players[id].points}</div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </>
    )
}
