import React from 'react'
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

    return (
        <>
            <div className="menu-box" onClick={() => {toogleMenu();changeColorOfActive(previousActive)}}>
                <div className="menu"><i className="fas fa-bars"></i></div>
            </div>
            <div className="nav">
                <div className="menu" onClick={() => {toogleMenu();}}><i className="fas fa-bars"></i></div>
                <div className="nav-option" onClick={() =>{ dispatch(setCategory({categoryPl:"losowe",categoryEn:"random"}));dispatch(changeActive(1));changeClass(1,previousActive);}}><i className="fas fa-dice"></i></div>
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"tak czy nie",categoryEn:"yesOrNot"}));dispatch(changeActive(2));changeClass(2,previousActive)}}><i className="fas fa-not-equal"></i></div>
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"zwariowane",categoryEn:"crazy"}));dispatch(changeActive(3));changeClass(3,previousActive)}}><i className="fas fa-grin-tongue-wink"></i></div>
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"18+",categoryEn:"forAdults"}));dispatch(changeActive(4));changeClass(4,previousActive)}}><i className="fas fa-user-secret"></i></div>
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"filozoficzne",categoryEn:"philosophical"}));dispatch(changeActive(5));changeClass(5,previousActive)}}><i className="fas fa-book"></i></div>
                <div className="nav-option" onClick={() => {dispatch(setCategory({categoryPl:"co wolisz",categoryEn:"whatDoYouPrefer"}));dispatch(changeActive(6));changeClass(6,previousActive)}}><i className="fas fa-balance-scale-left"></i></div>
            </div>
        </>
    )
}
