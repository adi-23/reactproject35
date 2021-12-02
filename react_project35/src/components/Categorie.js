import React from 'react'
import {useState, useEffect} from 'react'
function Categorie() {
    
    const [categoryinfo, setCategoryinfo] = useState({
        c: []
    })

    const fetchCategories = () =>{
        return fetch("http://localhost:5000/catogeries").then((response)=>{
            response.json()
        }).then((data) =>{
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

        <div>
            {
                c.map((cat)=><h1>{ cat.cid }</h1>)
            }
        </div>
    )
}

export default Categorie
