import logo from './logo.svg';
import './styles/App.scss';
import './styles/button.scss';
import './styles/nav.scss';
import Nav from './components/Nav'
import Draw from './Draw.js';
import { useSelector, useDispatch } from 'react-redux';
import { bugAdded } from './actions';

function App() {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const actualQuestion = useSelector(state => state.questions);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Nav />
      {/* <Draw /> */}
      {/* <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I shoudn't see</h3> : ""} */}
      {/* <h1>Questions {questions[0].description}</h1>*/}

      {/* <button onClick={() => dispatch(bugAdded())}>Losuj pytanie</button> */}

      {/* {actualQuestion !== "" ? <h2>{actualQuestion.description}</h2> : null} */}
      <div className="draw-container">
        <div className="h1-box">
          <h1>Osobiste</h1>
          {/* <hr /> */}
        </div>

        <h3>Jak masz na imię?</h3>
        <button className="btn btn-main" >
          Losuj
          </button>
      </div>
    </div>
  );
}

export default App;
