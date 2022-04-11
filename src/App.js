import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header";
// import TopForms from './component/TopForms/TopForms';
import Home from './component/Home/Home'
import Login from './component/Auth/Login/Login';

function App() {
  return (
    <div className="App">
        <Header />
        {/* <TopForms /> */}


        <Router>
          <header>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
          </header>
        </Router>
    </div>
  );
}

export default App;
