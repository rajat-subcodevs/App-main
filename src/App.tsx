import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
import Com from './Components/Com';
import Com1 from './Components/Com1.';
import Com2 from './Components/Com2';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename={'/'}>
    <Route path="/" render={()=>(<Com></Com>)} exact />
    <Route path="/r1" render={()=>(<Com1></Com1>)} />
    <Route path="/r2" render={()=>(<Com2></Com2>)} />

    <a href="https://reacttestsite1.netlify.app/leadgenerator/" style={{color:"white"}}><div className="go-to-sub-site">go to sub site</div></a>

    <div className="links-conatiner">
      <Link style={{color:"white"}} to="/"><span className="links">Route /</span></Link>
      <Link style={{color:"white"}} to="/r1"><span className="links">Route /r1</span></Link>
      <Link style={{color:"white"}} to="/r2"><span className="links">Route /r2</span></Link>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;



