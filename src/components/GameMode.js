import React from 'react'
import '../styles/GameMode.scss'

import {  useDispatch } from 'react-redux'
import { setMode } from '../actions/index'
export default function GameMode() {

  const dispatch = useDispatch();
    return (
        <>
            <div className="gamemode-container">
                <div className="player-number-container" onClick={() => dispatch(setMode('singleplayer'))}>
                    <div><i className="player-number fas fa-user"></i></div>
                    <h2>Jeden gracz</h2>
                </div>

                <div className="player-number-container" onClick={() => dispatch(setMode('multiplayer'))}>
                    <div><i className="player-number fas fa-users"></i></div>
                    <h2>Wielu graczy</h2>
                </div>
            </div>

        </>
    )
}
