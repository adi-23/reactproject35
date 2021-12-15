import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import "./Nav.css"

function Nav(props) {
    return (
        
            
            
                <div className="Navbar">
                    
                    <Link to="/home">Home</Link>
                    <Link to="/aboutus">Aboutus</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/profileform">Profile of { props.user} </Link>
                    <Link to="/">signout</Link>
                    <div className="userIcon">
                        <Link to= "/profile">
                            <Icon size="huge" name='user' className='grey circle' />
                        </Link>
                    </div>
                    
                </div>
            
            
            
            
          
        )
}

export default Nav
