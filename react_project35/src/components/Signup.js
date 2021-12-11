import React from 'react'

import { useState } from 'react'

import store from "../store";
//import { Navigate } from 'react-router-dom';

import  "./CSS/Signup.css"

import {Link, useNavigate} from 'react-router-dom';



function Signup() {
    const navigate = useNavigate();
    const [ username,setUsername ] = useState("");
    const [ password,setPassword ] = useState("");
    const Signupuser = ()=>{
        const newUser = {credentials: username+":"+password};

        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newUser)
        

        }).then(()=>{
            navigate("/")
           

            console.log("Signup successful")
            
        })


    }
    
    
    return (
        <div >
            <div className="form-container sign-up-container">
                <form action="#">
                        <h1>Create Account</h1>
                    
                    <span>or use your email for registration</span>
                    <input type="email" placeholder="Email" onChange={(event)=>{setUsername(event.target.value)}} />
                    <input type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} />
                    <button onClick={ Signupuser }>Sign Up</button>
                </form>
	        </div>
            <div className="overlay-container">
                <div className="overlay">
                    
                    <div className="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <Link to="/"><button className="ghost" id="signIn">Sign In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Signup;

