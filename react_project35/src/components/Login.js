import React from 'react'

import Nav from '../Nav'

function Login() {

    const checkLogin=() =>{

    }
    return (
        <div>
            <input type="text" label="username" value="adi" />
            <input type="password" label="password" value="hello" />
            <button type="submit" onClick={ checkLogin}>Login</button>
        </div>
    )
}


export default Login

