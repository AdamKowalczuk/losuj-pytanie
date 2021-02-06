import React from 'react'
import '../styles/Achievements.scss'
import { useSelector } from 'react-redux'
export default function Achievements() {
    const counter = useSelector(state => state.counter);
    const level = useSelector(state => state.level);
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
                        {counter >=10 ? <><i className="fas fa-award"></i><h3>Zadaj 10 pytań</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Zadaj 10 pytań</h3></>}
                    </div>
                    <div className="achievements-item">
                        {counter >=50 ? <><i className="fas fa-award"></i><h3>Zadaj 50 pytań</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Zadaj 50 pytań</h3></>}
                    </div>
                    <div className="achievements-item">
                        {counter >=100 ? <><i className="fas fa-award"></i><h3>Zadaj 100 pytań</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Zadaj 100 pytań</h3></>}
                    </div>
                    <div className="achievements-item">
                        {counter >=200 ? <><i className="fas fa-award"></i><h3>Zadaj 200 pytań</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Zadaj 200 pytań</h3></>}
                    </div>
                    <div className="achievements-item">
                        {counter >=500 ? <><i className="fas fa-award"></i><h3>Zadaj 500 pytań</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Zadaj 500 pytań</h3></>}
                    </div>
                    <div className="achievements-item">
                        {level >=3 ? <><i className="fas fa-award"></i><h3>Wbij 3 poziom</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Wbij 3 poziom</h3></>}
                    </div>
                    <div className="achievements-item">
                        {level >=10 ? <><i className="fas fa-award"></i><h3>Wbij 10 poziom</h3></>
                        :
                        <><i className="opacity50 fas fa-lock"></i><h3 className="opacity30">Wbij 10 poziom</h3></>}
                    </div>



                </div>
            </div>
        </>
    )
}
