
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route,Link, useNavigate} from "react-router-dom";
import {useState} from 'react';
import React  from 'react'
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { signOut } from 'firebase/auth';
import { auth } from "./firebase-configure";


function App() {
  
  const [isAuth, setIsAuth] = useState(false);
 

  const signUserOut = () => {
    signOut(auth).then(() =>{
      localStorage.clear();
      setIsAuth(false);
     window.location.pathname ="/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/createpost">CreatePost</Link>
        {!isAuth ? <Link to ="/login">Login</Link>:<button onClick={signUserOut}>Log Out</button>}
       
      </nav>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login"  element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/createpost"  element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
