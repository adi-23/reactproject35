import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Nav() {
    return (
        
            
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">Aboutus</Link>
                    <Link to="/cart">Cart</Link>
                    
                </div>
            
            
            
                <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route exact path="/aboutus" element={<Aboutus />} />
                 <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </Router>
          
        )
}

export default Nav
