import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from "./component/Header/Header";
// import TopForms from './component/TopForms/TopForms';
import Home from './component/Home/Home'
import Login from './component/Auth/Login/Login';
// import Wrapper from './component/Wrapper/Wrapper'

function App() {
  return (
    <Router>
    <div className="App">
        {/* <Header /> */}
        {/* <TopForms /> */}


          <header>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            {/* <Route path='wrapper' element={<Wrapper />}/> */}
          </Routes>
          </header>
    </div>
    </Router>
  );
}

export default App;
