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
                        return true;
                    }
                    
                }
                return false;
            }
            
            let authenticate = a(users)


            

            

            
            
            
        


            // let authenticate = data.includes(username+':'+ password);
            if(authenticate)
            {
                store.dispatch({type:"loginSuccess"});
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
            
           

           <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" onChange={(event)=>{setUsername(event.target.value)}} />
                    <input type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
                    <button onClick={ checkLogin }>Sign In</button>
                </form>
	        </div>
            <div class="overlay-container">
                <div class="overlay">
                    
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <Link to="/signup"><button class="ghost" id="signUp">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;

