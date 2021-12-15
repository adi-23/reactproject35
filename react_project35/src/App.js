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
import ProfileForm from './components/ProfileForm';
import Profile from './components/Profile';
import ProfileUpdate from './components/ProfileUpdate';

function App({login}) {
  
  console.log(login)
  
  return (
    <Router>
    
    <div className="App">
      
     
      <div className="content">
      <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/profileform" element={<ProfileForm />}  />
        <Route path="/home" element={<Home />}></Route>
        
        <Route path="signup" element={ <Signup />}></Route>
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category/:value" element={ <Categorie />}  />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/profileupdate" element={<ProfileUpdate />} />
      </Routes>
      </div>
    </div>
    </Router>
    
  
  );
}
const mapStateToProps =(state)=>{

  return {
      login : state.loginSuccess,
      
      
  }
}

export default connect(mapStateToProps)(App);

