import React from 'react'
import Home from './Home'
import Aboutus from './Aboutus';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import "./components/CSS/Navbar.css";
// import "./Nav.css";

function Nav(props) {
    return (
        
            
        <div className="navbar" style={{display:"flex",
        justifyContent: "space-between",
            alignItems: "center",
            height: 70}}>
        
            <h1 style={{color:"#fff", marginLeft:30}}>Demo</h1>
            <nav>
            
            <ul style={{display: 'flex'}}>
                <li><Link to="/home" className="text-link" style={{ textDecoration: 'none',color:"#fff",marginRight:20,paddingTop:50,fontSize:20}}>Home</Link></li>
                <li><Link to="/aboutus"  className="text-link" style={{ textDecoration: 'none',color:"#fff",marginRight:20,fontSize:20}}>Aboutus</Link></li>
                <li><Link to="/cart"  className="text-link" style={{ textDecoration: 'none',color:"#fff",marginRight:20,fontSize:20}}>Cart</Link></li>
                <li><Link to="/profileform"  className="text-link" style={{ textDecoration: 'none',color:"#fff",marginRight:20,fontSize:20}}>Profile of { props.user}</Link></li>
                <li className="userIcon"><Link to= "/profile" style={{color:"#fff",marginRight:20}}><Icon size="big" name="user circle" className="user circle"/></Link></li>
                <li className="userIcon"><Link to= "/" style={{color:"#fff",marginRight:20}}><Icon size="big" name="sign out" className="sign-out"/></Link></li>

                
            </ul>
            {/* <div className="userIcon">
                         <Link to= "/profile">
                             <Icon size="huge" name='user' className='grey circle' />
                      </Link>
            </div> */}

            </nav>
        
    </div>
            
                // <div className="Navbar">
                    
                //     <Link to="/home">Home</Link>
                //     <Link to="/aboutus">Aboutus</Link>
                //     <Link to="/cart">Cart</Link>
                //     <Link to="/profileform">Profile of { props.user} </Link>
                //     <Link to="/">signout</Link>
                //     <div className="userIcon">
                //         <Link to= "/profile">
                //             <Icon size="huge" name='user' className='grey circle' />
                //         </Link>
                //     </div>
                    
                // </div>
            
            
            
            
          
        )
}

export default Nav
