import './styles/App.scss';
import './styles/button.scss';
import './styles/nav.scss';
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">


      <Nav />

      <div className="draw-container">
        <div className="h1-box">
          <h1>Osobiste</h1>

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
