import './styles/App.scss';
import './styles/button.scss';
import './styles/nav.scss';
import Nav from './components/Nav';

import { useSelector, useDispatch } from 'react-redux'
import { setActualQuestion } from './actions/index'

function App() {
  const actualQuestion = useSelector(state => state.actualQuestion);
  const category = useSelector(state => state.category);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <Nav />

      <div className="draw-container">
        <div className="h1-box">
          <h1>{category}</h1>
        </div>
        <h3>{actualQuestion.description}</h3>

        <button className="btn btn-main" onClick={() => dispatch(setActualQuestion())}>
          Losuj
          </button>
      </div>
    </div>
  );
}

export default App;
