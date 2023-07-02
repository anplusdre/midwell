import './main.css';
import Footer from './components/Footer';
import Frame from './components/Frame';


function App() {
  require("../src/styles/mw.module.css");
  require("../src/styles/midwell.module.css");
  return (
      <div className="App">
            <Frame />
            <Footer />
      </div>
  );
}

export default App;
