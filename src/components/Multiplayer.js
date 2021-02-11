import React from 'react';
import Input from "muicss/lib/react/input";
import '../styles/multiplayer.scss';
import {useSelector, useDispatch } from 'react-redux'
import { addPlayer} from '../actions/index'
export default function Multiplayer() {

    // changeName(e, id) {
    //     let players = [...this.props.data.players];
    //     players[id].nick = e.target.value;
    //     this.props.data.players = players;
    //   }
    const playerNumber= useSelector(state => state.playerNumber);
    // const players= useSelector(state => state.players);
    const dispatch = useDispatch();

    return (
        <>
            <div className="multiplayer">
                <h3>Dodaj graczy</h3>
                  <Input
                    label="Podaj swój nick"
                    floatingLabel={true}
                    type="text"
                    // onChange={(e) => this.changeName(e, id)}
                  />
                {(() => {

                })()}

                <div className="button-container">
                    {(() => {
                        if(playerNumber>=4){
                            return(<button className="btn" onClick={() => {dispatch(addPlayer(-1))}}>Usuń</button>)

                        }
                        else if(playerNumber===0){
                            return(<button className="btn" onClick={() => {dispatch(addPlayer(1))}}>Dodaj</button>)
                        }
                        else{
                            return(
                                <>
                                    <button className="btn" onClick={() => {dispatch(addPlayer(1))}}>Dodaj</button>
                                    <button className="btn" onClick={() => {dispatch(addPlayer(-1))}}>Usuń</button>
                                </>
                            )
                        }
                    })()}
                    {/* {playerNumber>==4 ? }
                    <button className="btn" onClick={() => {dispatch(addPlayer(1))}}>Dodaj</button>
                    <button className="btn" onClick={() => {dispatch(addPlayer(-1))}}>Usuń</button> */}
                </div>
                <button className="btn">Rozpocznij grę</button>

            </div>
        </>
    )
}
