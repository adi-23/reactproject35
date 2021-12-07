import React from 'react'
import {useState, useEffect} from 'react'
import Product from './Product'
import { useLocation } from "react-router-dom";

function Categorie(props) {

    const [productinfo, setProductinfo] = useState({ products: []})
    const [sar,setSar] = useState("hello")

    const l1 = useLocation();
    
    const fetchData = () => {
        return fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) =>{ 
                console.log(data);
                setProductinfo({
                    products: data
                })
                
            });

    }
    useEffect(()=>{
        fetchData()
    },[])

    

    const { products} = productinfo
    
    const getCategory = (pathname) => {
        let str = pathname.split("/")
        return str[str.length - 1]
    }

    let cat = getCategory(l1.pathname)

    
    let pro =[];

    for (let i=0; i< products.length; i++){
        if(products[i].categories === cat){
            
            pro.push(products[i])
        }
    }

    return (

        <div>
            
            
            { pro.map((product) =>
                        
                        <Product product={product} />) }
        </div>
    )
}

export default Categorie
