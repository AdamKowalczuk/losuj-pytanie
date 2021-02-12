import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/multiplayerGame.scss'
import { changeActualPlayer} from '../actions/index'
export default function MultiplayerGame() {
    const actualPlayer= useSelector(state => state.actualPlayer);
    const playersNumber= useSelector(state => state.playersNumber);
    const players= useSelector(state => state.players);
    const dispatch = useDispatch();
    return (
        <>
            <div className="multiplayer-game">
                <h2>Tura gracza</h2>
                <h3>{players[actualPlayer].name}</h3>
                <button className="btn" onClick={()=>{dispatch(changeActualPlayer(playersNumber))}}>Kolejny gracz</button>

                <div className="results-container">

                    {players.map((player,id) => {
                        return (
                            <div className="result" key={id}>
                                <div className="results-name">{players[id].name}</div>
                                <div className="results-points">{players[id].points}</div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
