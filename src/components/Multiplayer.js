import React from 'react';
import Input from "muicss/lib/react/input";
import '../styles/multiplayer.scss';
import {useSelector, useDispatch } from 'react-redux'
import Nav from './Nav';
import MultiplayerGame from './MultiplayerGame'
import { addPlayer,setPlayers,deletePlayer,changeName,startGame,setMode} from '../actions/index'

export default function Multiplayer() {
    const playersNumber= useSelector(state => state.playersNumber);
    const players= useSelector(state => state.players);
    const isStarted= useSelector(state => state.isStarted);
    const dispatch = useDispatch();

    return (
        <>
            {isStarted ? <><Nav/><MultiplayerGame/></> :
            <div className="multiplayer">

                <h3>Dodaj graczy</h3>
                <div className="input-container">
                    {players.map((player,id) => {
                        return (
                            <Input key={id} className="multiplayer-input"
                                label="Podaj swój nick"
                                floatingLabel={true}
                                type="text"
                                onChange={(e) => dispatch(changeName(e, id))}
                            />
                        )
                    })}
                </div>

                <div className="button-container">
                {playersNumber>=4 ?
                    <button className="btn btn-red" onClick={() => {dispatch(addPlayer(-1));dispatch(deletePlayer())}}>Usuń</button>
                    :
                    [
                        (playersNumber===0 ? <button className="btn" onClick={() => {dispatch(setPlayers("Gracz "+(playersNumber+1)));dispatch(addPlayer(1))}}>Dodaj</button>
                        :
                        <>
                            <button className="btn btn-add" onClick={() => {dispatch(setPlayers("Gracz "+(playersNumber+1)));dispatch(addPlayer(1))}}>Dodaj</button>
                            <button className="btn btn-delete" onClick={() => {dispatch(addPlayer(-1));dispatch(deletePlayer())}}>Usuń</button>
                        </>),
                    ]
                }
                </div>
                <button className="btn" onClick={()=>dispatch(startGame())}>Rozpocznij grę</button>
                <div className="menu-box return" onClick={() => dispatch(setMode(''))}>
                    <div className="menu"><i className="fas fa-undo" ></i></div>
                </div>

            </div>
            }
        </>

        )

}

