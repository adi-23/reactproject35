import React from 'react'

import { useState } from 'react'

import store from "../store";
//import { Navigate } from 'react-router-dom';

import "./CSS/Login.css"

import {Link, useNavigate} from 'react-router-dom';
import Signup from './Signup';



function Login() {
    const navigate = useNavigate();

    const [ username,setUsername ] = useState("");
    const [ password,setPassword ] = useState("");


    const checkLogin=() =>{
        fetch("http://localhost:5000/users")
        .then((response) => response.json())
        .then((users) =>{ 

            let a= (users) => {
                for (let i=0;i<users.length;i++){
                    if(users[i].credentials===username+':'+ password){
                        return {status: true,username: username};
                    }
                    
                }
                return {status: false};
            }
            
            let authenticate = a(users)

            // let authenticate = data.includes(username+':'+ password);
            if(authenticate)
            {
                store.dispatch({type:"loginSuccess"});
                store.dispatch({type:"loginUser",payload: {username: username}})
                
                //return <Navigate to='/home' />
               navigate('/home')
            }
            else
            {
                store.dispatch({type:"loginFailure"});

            }
           
            
        })

        
    }

    return (
        <div>
            
           

           <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" onChange={(event)=>{setUsername(event.target.value)}} />
                    <br></br>
                    <input type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
                    <button onClick={ checkLogin }>Sign In</button>
                </form>
	        </div>
            <div className="overlay-container">
                <div className="overlay">
                    
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <Link to="/signup"><button className="ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;

