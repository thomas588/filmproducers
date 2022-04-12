import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header";
import MainPage1 from './component/MainPage/MainPage1/MainPage1'
import Login from './component/Auth/Login/Login';

function App() {
  return (
    <Router>
    <div className="App">

          <header>
          <Routes>
            <Route path='/' element={<MainPage1 />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
          </header>
    </div>
    </Router>
  );
}

export default App;
