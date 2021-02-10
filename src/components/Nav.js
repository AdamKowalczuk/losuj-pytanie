import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector,useDispatch } from 'react-redux'
import { setCategory,changeActive } from '../actions/index'

function toogleMenu() {
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

function changeClass(number,previousActive){
    if(number!==previousActive){
        let x = document.getElementsByClassName("nav")[0].children[number];
        let y = document.getElementsByClassName("nav")[0].children[previousActive];
        x.className="nav-option active"
        y.className="nav-option"
    }
}
function changeColorOfActive(previousActive){
    let x = document.getElementsByClassName("nav")[0].children[previousActive];
    x.className="nav-option active";
}

export default function Nav() {

    const dispatch = useDispatch();
    const previousActive = useSelector(state => state.previousActive);
    const level = useSelector(state => state.level);

    return (
        <>
            <div className="menu-box" onClick={() => {toogleMenu();changeColorOfActive(previousActive)}}>
                <div className="menu"><i className="fas fa-bars"></i></div>
            </div>
            <div className="nav">
                <div className="menu" onClick={() => {toogleMenu();}}><i className="fas fa-bars"></i></div>
                <div className="nav-option" onClick={() =>{ dispatch(setCategory({categoryPl:"losowe",categoryEn:"random"}));dispatch(changeActive(1));changeClass(1,previousActive);}}><i className="fas fa-dice"></i></div>
                {level>=2 ?
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"tak czy nie",categoryEn:"yesOrNot"}));dispatch(changeActive(2));changeClass(2,previousActive)}}><i className="fas fa-not-equal"></i></div>
                : <><Tooltip title="Wbij 2 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-not-equal"></i></div></Tooltip></>
                }
                {level>=3 ?
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"zwariowane",categoryEn:"crazy"}));dispatch(changeActive(3));changeClass(3,previousActive)}}><i className="fas fa-grin-tongue-wink"></i></div>
                : <><Tooltip title="Wbij 3 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-grin-tongue-wink"></i></div></Tooltip></>}
                {level>=4 ?
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"Pytania, których nikt nie zadaje",categoryEn:"aQuestionNoneAsked"}));dispatch(changeActive(4));changeClass(4,previousActive)}}><i className="fas fa-head-side-cough-slash"></i></div>
                : <><Tooltip title="Wbij 4 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-head-side-cough-slash"></i></div></Tooltip></>}
                {level>=5 ?
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"filozoficzne",categoryEn:"philosophical"}));dispatch(changeActive(5));changeClass(5,previousActive)}}><i className="fas fa-book"></i></div>
                : <><Tooltip title="Wbij 5 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-book"></i></div></Tooltip></>}
                {level>=6 ?
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"co wolisz",categoryEn:"whatDoYouPrefer"}));dispatch(changeActive(6));changeClass(6,previousActive)}}><i className="fas fa-balance-scale-left"></i></div>
                : <><Tooltip title="Wbij 6 poziom, aby odblokować" placement="right" arrow><div className="nav-option opacity50"><i className="fas fa-balance-scale-left"></i></div></Tooltip></>}
            </div>
        </>
    )
}
