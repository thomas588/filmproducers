import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./component/Header/Header";
// import TopForms from './component/TopForms/TopForms';
import Home from './component/Home/Home'
import Login from './component/Auth/Login/Login';
import Auth from './component/Auth/Auth'

function App() {
  return (
    <div className="App">
        <Header />
        {/* <TopForms /> */}


        <Router>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/auth' element={<Auth />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
