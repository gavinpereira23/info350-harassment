import {NavBar} from './NavBar.js';
import {Welcome} from './Welcome.js';
import {Stats} from './Stats.js';
import {Forum} from './Forum.js';
import{Resources} from './Resources.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';







function App() {
    document.body.classList.add('body');
  return (
    <div className="App" style={{backgroundColor:'#E5F7FF'}}>
      <NavBar />
          <Routes>
                <Route exact path="/" element = {<Welcome />}></Route>
                <Route path="/harassment-info350" element = {<Welcome />}></Route>
                <Route path="/Welcome" element = {<Welcome />}></Route>
                <Route path="/Stats" element={<Stats />}></Route>
                <Route path="/Resources" element={<Resources />}></Route>
                <Route path="/Forum" element = {<Forum />}></Route>
          </Routes>
          <div style={{minHeight:'100%', backgroundColor:'#E5F7FF'}} />
    </div>
  );
}

export default App;
