import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/multiplayerGame.scss";
import Achievements from "./Achievements";
import NavMultiplayer from "./NavMultiplayer";
import {
  setActualQuestion,
  setExp,
  setLevel,
  setRequiredExp,
  increment,
  startGame,
  setMode,
  getCounterFromLocalStorage,
  setAchievementsOpen,
  setCategoryToActive,
  changeActualPlayer,
  disableMenu,
  setLevelFromLocalStorage,
  setExpFromLocalStorage,
  setRequiredExpFromLocalStorage,
} from "../actions/index";
export default function MultiplayerGame() {
  const actualQuestion = useSelector((state) => state.actualQuestion);
  const category = useSelector((state) => state.category);
  const actualPlayer = useSelector((state) => state.actualPlayer);
  const playersNumber = useSelector((state) => state.playersNumber);
  const players = useSelector((state) => state.players);
  const isCategorySelected = useSelector((state) => state.isCategorySelected);
  const exp = useSelector((state) => state.exp);
  const level = useSelector((state) => state.level);
  const requiredExp = useSelector((state) => state.requiredExp);
  const isAchievementsOpen = useSelector((state) => state.isAchievementsOpen);
  const dispatch = useDispatch();

  function init() {
    let counter = JSON.parse(localStorage.getItem("counter"));
    let newLevel = JSON.parse(localStorage.getItem("level"));
    let newExp = JSON.parse(localStorage.getItem("exp"));
    let newRequiredExp = JSON.parse(localStorage.getItem("requiredExp"));
    if (newRequiredExp === null) {
      newRequiredExp = 10;
    }
    if (newLevel === null) {
      newLevel = 1;
    }
    dispatch(setLevelFromLocalStorage(newLevel));
    dispatch(setExpFromLocalStorage(newExp));
    dispatch(setRequiredExpFromLocalStorage(newRequiredExp));
    dispatch(getCounterFromLocalStorage(counter));
  }
  init();
  function changeLevel() {
    if (exp >= requiredExp - 1) {
      dispatch(setLevel(1));
      dispatch(setRequiredExp(1.2));
      dispatch(setExp(-exp));
      window.localStorage.setItem("level", JSON.stringify(level + 1));
      window.localStorage.setItem(
        "requiredExp",
        JSON.stringify(Math.round(requiredExp * 1.2))
      );
      window.localStorage.setItem("exp", JSON.stringify(exp - exp));
    } else {
      window.localStorage.setItem("exp", JSON.stringify(exp + 1));
      window.localStorage.setItem("requiredExp", JSON.stringify(requiredExp));
      window.localStorage.setItem("level", JSON.stringify(level));
    }

    // localStorage.clear();
  }
  return (
    <>
      <div className="multiplayer-game">
        {isAchievementsOpen === false ? (
          <>
            <NavMultiplayer />
            <div className="draw-container">
              {isCategorySelected ? (
                <>
                  <h2>Tura gracza</h2>
                  <h3 className="player-name">{players[actualPlayer].name}</h3>
                  <div className="h1-box">
                    <h1>{category.categoryPl}</h1>
                  </div>
                  <h3>{actualQuestion.description}</h3>
                  {actualPlayer === playersNumber - 1 ? (
                    <button
                      className="btn btn-main"
                      onClick={() => {
                        dispatch(increment(1));
                        dispatch(setExp(1));
                        dispatch(changeActualPlayer(playersNumber));
                        changeLevel();
                        dispatch(setActualQuestion(category.categoryEn));
                        dispatch(setCategoryToActive());
                        dispatch(disableMenu());
                      }}
                    >
                      Zakończ rundę
                    </button>
                  ) : (
                    <button
                      className="btn btn-main"
                      onClick={() => {
                        dispatch(increment(1));
                        dispatch(setExp(1));
                        dispatch(changeActualPlayer(playersNumber));
                        changeLevel();
                        dispatch(setActualQuestion(category.categoryEn));
                      }}
                    >
                      Kolejny gracz
                    </button>
                  )}
                </>
              ) : (
                <h2>Wybierz kategorię</h2>
              )}
            </div>
          </>
        ) : (
          <Achievements />
        )}
        {isAchievementsOpen ? (
          <div
            className="menu-box achievements-container"
            style={{ top: 0 }}
            onClick={() => {
              dispatch(setAchievementsOpen());
            }}
          >
            <div className="menu">
              <i className="fas fa-home"></i>
            </div>
          </div>
        ) : (
          <>
            <div
              className="menu-box return"
              onClick={() => {
                dispatch(setMode(""));
                dispatch(startGame());
              }}
            >
              <div className="menu">
                <i className="fas fa-undo"></i>
              </div>
            </div>
            <div
              className="menu-box achievements-container"
              onClick={() => {
                dispatch(setAchievementsOpen());
              }}
            >
              <div className="menu">
                <i className="fas fa-trophy"></i>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
