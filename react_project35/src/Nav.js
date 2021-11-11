import React from 'react'
import Home from './Home'

function Nav() {
    return (
        <div>
            <ul>
                <Home/>
                <li>Products</li>
                <li>Orders</li>
                <li>AboutUs</li>
            </ul>
        </div>
    )
}

export default Nav
