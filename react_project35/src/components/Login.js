import React from 'react'

import { useState } from 'react'

import store from "../store";
//import { Navigate } from 'react-router-dom';



import {Link, useNavigate} from 'react-router-dom';



function Login() {
    const navigate = useNavigate();

    const [ username,setUsername ] = useState("");
    const [ password,setPassword ] = useState("");


    const checkLogin=() =>{
        fetch("http://localhost:5000/users")
        .then((response) => response.json())
        .then((users) =>{ 

            let authenticate=users.map((user)=>{if(user.credentials===username+':'+ password){
                return true;
            }})



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
            <input type="text" label="username" placeholder="Enter username...." onChange={(event)=>{setUsername(event.target.value)}} />
            <input type="password" label="password" placeholder="Password...." onChange={(event)=>{setPassword(event.target.value)}} />
            <button type="submit" onClick={ checkLogin }>Login</button>
            
           <Link to="/signup"><button type="submit">signup</button></Link>
        </div>
    )
}


export default Login;

