import React from 'react'


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

};


export default function Nav() {

    return (
        <>

            <div className="menu-box" onClick={() => toogleMenu()}>
                <div className="menu"><i className="fas fa-bars"></i></div>


            </div>
            <div className="nav">
                <div className="menu" onClick={() => toogleMenu()}><i className="fas fa-bars"></i></div>
                <div className="nav-option" ><i className="fas fa-dice"></i></div>
                <div className="nav-option"><i className="fas fa-dog"></i></div>
                <div className="nav-option active"><i className="fas fa-dumbbell"></i></div>
                <div className="nav-option"><i className="fas fa-grin-hearts"></i></div>
                <div className="nav-option"><i className="fas fa-hamburger"></i></div>
                <div className="nav-option"><i className="fas fa-grin-tears"></i></div>
                <div className="nav-option"><i className="fas fa-pizza-slice"></i></div>
            </div>
            {/* <div className="nav-right">
                <div className="nav-option"><i className="fas fa-dice"></i></div>
                <div className="nav-option"><i className="fas fa-hamburger"></i></div>
                <div className="nav-option"><i className="fas fa-grin-tears"></i></div>
                <div className="nav-option"><i className="fas fa-pizza-slice"></i></div>

            </div> */}
        </>
    )
}
