import React from 'react'

export default function Nav() {
    return (
        <>
            <div className="nav">

                <div className="nav-option"><i className="fas fa-dice"></i></div>
                <div className="nav-option"><i className="fas fa-dog"></i></div>
                <div className="nav-option active"><i className="fas fa-dumbbell"></i></div>
                <div className="nav-option"><i className="fas fa-grin-hearts"></i></div>
                <div className="nav-option"><i className="fas fa-hamburger"></i></div>
                <div className="nav-option"><i className="fas fa-grin-tears"></i></div>
                <div className="nav-option"><i className="fas fa-pizza-slice"></i></div>
            </div>
            <div className="nav-right">
                <div className="nav-option"><i className="fas fa-dice"></i></div>
                <div className="nav-option"><i className="fas fa-hamburger"></i></div>
                <div className="nav-option"><i className="fas fa-grin-tears"></i></div>
                <div className="nav-option"><i className="fas fa-pizza-slice"></i></div>
                <div className="nav-option"><i className="fas fa-dice"></i></div>
                <div className="nav-option"><i className="fas fa-dog"></i></div>
                <div className="nav-option"><i className="fas fa-dumbbell"></i></div>
                <div className="nav-option"><i className="fas fa-grin-hearts"></i></div>
            </div>
        </>
    )
}
