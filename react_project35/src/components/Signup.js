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
        const len1 = username.length;
        const len2 = password.length;
        const newUser = {credentials: username+":"+password};

        if(len1 !== 0 && len2 !== 0){
                fetch("http://localhost:5000/users",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newUser)
            

            }).then(()=>{
                navigate("/")
            

                console.log("Signup successful")
                
            })
        }

        else{
            navigate("/signup")
        }


    }
    
    
    return (
        <div >
            <div className="form-container sign-up-container">
                 <div className="form">
                        <h1>Create Account</h1>
                    
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Username" onChange={(event)=>{setUsername(event.target.value)}} required />
                    <input type="password" placeholder="Password" onChange={(event)=>{setPassword(event.target.value)}} required />
                    <button onClick={ Signupuser }>Sign Up</button>
                </div>
                
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

