import React from 'react'

import { useState } from 'react'

import store from "../store";
//import { Navigate } from 'react-router-dom';



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
        <div>
            <input type="text" label="username" placeholder="Enter username...." onChange={(event)=>{setUsername(event.target.value)}} />
            <input type="password" label="password" placeholder="Password...." onChange={(event)=>{setPassword(event.target.value)}} />
            <button type="submit" onClick={ Signupuser }>Signup</button>
        </div>
    )
}


export default Signup;

