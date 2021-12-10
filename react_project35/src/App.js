import './App.css';

import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import store from './store';
import Signup from './components/Signup';
import Aboutus from './Aboutus';
import Cart from './Cart';
import {connect} from "react-redux";
import Categorie from './components/Categorie';
import Profile from './components/ProfileForm';
function App({login}) {
  

  
  return (
    <Router>
    
    <div className="App">
     
      <div className="content">
      <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/profile" element={<Profile />}  />
        <Route path="/home" element={<Home />}></Route>
        <Route path="signup" element={ <Signup />}></Route>
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:value" element={ <Categorie />}  />
      </Routes>
      </div>
    </div>
    </Router>
    
  
  );
}
const mapStateToProps =(state)=>{
  return {
      login : state.loginSuccess
  }
}

export default connect(mapStateToProps)(App);

