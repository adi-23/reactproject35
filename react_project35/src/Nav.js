import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Nav(props) {
    return (
        
            
            
                <div className="Navbar">
                    
                    <Link to="/home">Home</Link>
                    <Link to="/aboutus">Aboutus</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/profileform">Profile of { props.user} </Link>
                    <Link to="/">signout</Link>
                    
                </div>
            
            
            
            
          
        )
}

export default Nav
