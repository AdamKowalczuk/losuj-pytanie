import React from "react";
import "../styles/Achievements.scss";
import { useSelector } from "react-redux";
export default function Achievements() {
  const counter = useSelector((state) => state.counter);
  const level = useSelector((state) => state.level);
  const exp = useSelector((state) => state.exp);
  const requiredExp = useSelector((state) => state.requiredExp);
  return (
    <>
      <div className="achievements">
        <div className="achievements-top">
          <h2>Poziom {level}</h2>
          <h3>
            Doświadczenie {exp}/{requiredExp}
          </h3>
          <h2>Osiągnięcia</h2>
        </div>
        <div className="achievements-list">
          <div className="achievements-item">
            {counter >= 10 ? (
              <>
                <i className="fas fa-award"></i>
                <h3>Zadaj 10 pytań</h3>
              </>
            ) : (
              <>
                <i className="opacity50 fas fa-lock"></i>
                <h3 className="opacity30">Zadaj 10 pytań</h3>
              </>
            )}
          </div>
          <div className="achievements-item">
            {counter >= 30 ? (
              <>
                <i className="fas fa-award"></i>
                <h3>Zadaj 30 pytań</h3>
              </>
            ) : (
              <>
                <i className="opacity50 fas fa-lock"></i>
                <h3 className="opacity30">Zadaj 30 pytań</h3>
              </>
            )}
          </div>
          <div className="achievements-item">
            {counter >= 50 ? (
              <>
                <i className="fas fa-award"></i>
                <h3>Zadaj 50 pytań</h3>
              </>
            ) : (
              <>
                <i className="opacity50 fas fa-lock"></i>
                <h3 className="opacity30">Zadaj 50 pytań</h3>
              </>
            )}
          </div>
          <div className="achievements-item">
            {counter >= 100 ? (
              <>
                <i className="fas fa-award"></i>
                <h3>Zadaj 100 pytań</h3>
              </>
            ) : (
              <>
                <i className="opacity50 fas fa-lock"></i>
                <h3 className="opacity30">Zadaj 100 pytań</h3>
              </>
            )}
          </div>
          <div className="achievements-item">
            {level >= 2 ? (
              <>
                <i className="fas fa-award"></i>
                <h3>Wbij 2 poziom</h3>
              </>
            ) : (
              <>
                <i className="opacity50 fas fa-lock"></i>
                <h3 className="opacity30">Wbij 2 poziom</h3>
              </>
            )}
          </div>
          <div className="achievements-item">
            {level >= 5 ? (
              <>
                <i className="fas fa-award"></i>
                <h3>Wbij 5 poziom</h3>
              </>
            ) : (
              <>
                <i className="opacity50 fas fa-lock"></i>
                <h3 className="opacity30">Wbij 5 poziom</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
