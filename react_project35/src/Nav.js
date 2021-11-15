import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Nav() {
    return (
        
            
            <Router>
                <div>
                    <Link to="/">Home</Link>
                </div>
            
            
            
                <Routes>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Routes>
            </Router>
          
        )
}

export default Nav
