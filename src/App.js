import './App.css';
import './main.css';
import Navigation from './components/Navigation';
import Header from './components/Header';


function App() {
  return (
      <div className="App">
        <Header />
        <div className='container'>
          <div className='Grid'>
            <Navigation />
          </div>
        </div>
      </div>
  );
}

export default App;
