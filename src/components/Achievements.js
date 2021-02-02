import React from 'react'
import '../styles/Achievements.scss'
export default function Achievements() {
    return (
        <>
            <div className="achievements">
                <div className="achievements-top">
                    <h2>Poziom 2</h2>
                    <h3>Doświadczenie 2/10</h3>
                    <h2>Osiągnięcia</h2>
                </div>
{/* dodaj datę do Osiągnięcia */}
                <div className="achievements-list">

                    <div className="achievements-item">
                        <i className="fas fa-award"></i>
                        <h3>Zadaj 10 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-award"></i>
                        <h3>Zadaj 25 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-award"></i>
                        <h3>Zadaj 50 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-award"></i>
                        <h3>Zadaj 100 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-award"></i>
                        <h3>Zadaj 5 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-lock"></i>
                        <h3>Zadaj 5 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-lock"></i>
                        <h3>Zadaj 5 pytań</h3>
                    </div>
                    <div className="achievements-item">
                        <i className="fas fa-lock"></i>
                        <h3>Zadaj 5 pytań</h3>
                    </div>

                </div>
            </div>
        </>
    )
}
