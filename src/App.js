import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Exprence from './Components/Exprence/Exprence';
import Service from './Components/Service/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Testmonial from './Components/Testmonial/Testmonial';
import Contract from './Components/Contracat/Contract';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
  
<Header></Header>
<Nav></Nav>
<About></About>
<Exprence></Exprence>
<Service></Service>
<Portfolio></Portfolio>
<Testmonial></Testmonial>
<Contract></Contract>
<Footer></Footer>



    </div>
  );
}

export default App;
