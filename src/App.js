import './main.css';
import Footer from './components/Footer';
import Frame from './components/Frame';
import midwell from './styles/midwell.module.css'
import styles from './styles/mw.module.css'


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
