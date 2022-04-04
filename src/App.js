import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import RegisterApp from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Logout from './Logout';
import Members from './Members';

function App() {
  return (
    <div className="App">
      <nav
        className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
        id='ftco-navbar'
      >
        <div className='container'>
          <a className='navbar-brand'>Login and Logout Page</a>
          <div>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item '>
                <a href='/register' className='nav-link'>
                  Register
                </a>
              </li>
              <li className='nav-item '>
                <a href='/login' className='nav-link'>
                  Login
                </a>
              </li>
              <li className='nav-item '>
                <a href='/logout' className='nav-link'>
                  Logout
                </a>
              </li>
              <li className='nav-item '>
                <a href='/members' className='nav-link'>
                  Members
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterApp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/members' element={<Members />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
