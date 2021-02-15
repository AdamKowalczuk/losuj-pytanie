import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector,useDispatch } from 'react-redux'
import {setActualQuestion,setExp,setLevel,setRequiredExp,increment, setCategory,changeActive,disableMenu,setCategoryToActive } from '../actions/index'


function toogleMenu() {
    if(document.getElementsByClassName("nav")[0]===undefined){
        null
    }
    else{
        let x = document.getElementsByClassName("nav")[0].style;
        if (x.display === "block") {
            x.display = "none";
        } else {
            x.display = "block";
        }
        let y = document.getElementsByClassName("menu")[1].children[0];
        if (y.className === "fas fa-times") {
            y.className = "fas fa-bars";
        }
        else {
            y.className = "fas fa-times";
        }
    }

}
export default function Nav() {
    const dispatch = useDispatch();
    const level = useSelector(state => state.level);
    const isMenuDisabled = useSelector(state => state.isMenuDisabled);
    const exp= useSelector(state => state.exp);
    const category = useSelector(state => state.category);
    const requiredExp= useSelector(state => state.requiredExp);
    function changeLevel() {
        if(exp>=requiredExp-1){
          dispatch(setLevel(1))
          dispatch(setRequiredExp(1.2))
          dispatch(setExp(-exp))
        }
      }
    return (
        <>
            <div className="menu-box" onClick={() => {toogleMenu();}}>
                <div className="menu"><i className="fas fa-bars"></i></div>
            </div>
            {
            isMenuDisabled ? null
            :
            <div className="nav">
                <div className="menu" ><i className="fas fa-bars"></i></div>
                <div className="nav-option" onClick={() =>{ dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategory({categoryPl:"losowe",categoryEn:"random"}));dispatch(changeActive(1));dispatch(disableMenu());dispatch(setCategoryToActive())}}><i className="fas fa-dice"></i></div>
                {level>=2 ?
                <div className="nav-option" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategory({categoryPl:"tak czy nie",categoryEn:"yesOrNot"}));dispatch(changeActive(2));dispatch(disableMenu());dispatch(setCategoryToActive())}}><i className="fas fa-not-equal"></i></div>
                : <><Tooltip title="Wbij 2 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-not-equal"></i></div></Tooltip></>
                }
                {level>=3 ?
                <div className="nav-option" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategory({categoryPl:"zwariowane",categoryEn:"crazy"}));dispatch(changeActive(3));dispatch(disableMenu());dispatch(setCategoryToActive())}}><i className="fas fa-grin-tongue-wink"></i></div>
                : <><Tooltip title="Wbij 3 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-grin-tongue-wink"></i></div></Tooltip></>}
                {level>=4 ?
                <div className="nav-option" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategory({categoryPl:"Pytania, których nikt nie zadaje",categoryEn:"aQuestionNoneAsked"}));dispatch(changeActive(4));dispatch(disableMenu());dispatch(setCategoryToActive())}}><i className="fas fa-head-side-cough-slash"></i></div>
                : <><Tooltip title="Wbij 4 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-head-side-cough-slash"></i></div></Tooltip></>}
                {level>=5 ?
                <div className="nav-option" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategory({categoryPl:"filozoficzne",categoryEn:"philosophical"}));dispatch(changeActive(5));dispatch(disableMenu());dispatch(setCategoryToActive())}}><i className="fas fa-book"></i></div>
                : <><Tooltip title="Wbij 5 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-book"></i></div></Tooltip></>}
                {level>=6 ?
                <div className="nav-option" onClick={() => {dispatch(increment(1));dispatch(setExp(1));changeLevel();dispatch(setActualQuestion(category.categoryEn));dispatch(setCategory({categoryPl:"co wolisz",categoryEn:"whatDoYouPrefer"}));dispatch(changeActive(6));dispatch(disableMenu());dispatch(setCategoryToActive())}}><i className="fas fa-balance-scale-left"></i></div>
                : <><Tooltip title="Wbij 6 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-balance-scale-left"></i></div></Tooltip></>}
            </div>
            }
        </>
    )
}
