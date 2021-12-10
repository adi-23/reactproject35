import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Nav() {
    return (
        
            
            
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/aboutus">Aboutus</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/profile">Address</Link>
                    
                </div>
            
            
            
            
          
        )
}

export default Nav
