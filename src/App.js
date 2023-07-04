import './main.css';
import Footer from './components/Footer';
import Frame from './components/Frame';
import CSSModulesWrapper from './styles/CssModule';


function App() {
  // require("../src/styles/mw.module.css");
  return (
      <div className="App">
            <Frame />
            <Footer />
      </div>
  );
}

export default App;
