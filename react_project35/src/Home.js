import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from './components/Product'
import Categorie from './components/Categorie'

import {connect} from "react-redux";
import Footer from './components/Footer';
function Home({loginUser}) {
    const [categoryinfo, setCategoryinfo] = useState({
        c: []
    })

    const fetchCategories = () =>{
        return fetch("http://localhost:5000/catogeries").then((response)=> response.json()).then((data) =>{
            console.log(data)
            setCategoryinfo({
                c: data
            })
        })

    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const { c } = categoryinfo
    return (
        
        
        

        <div >
            <Nav user={loginUser} />
            {/* <Categorie /> */}
            List of categories
            {
                c.map((cat)=> <button>{ cat.category}
                <Link to={`/category/${ cat.category }`}>explore</Link>
                
                </button>)
            }

            <Footer />
        </div>
    )
}

const mapStateToProps =(state)=>{
  
    return {
        
        loginUser: state.userReducer.username
        
    }
  }
  
  export default connect(mapStateToProps)(Home);
  