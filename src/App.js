import './App.css';
import './main.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

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
