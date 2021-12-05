import React from 'react'
import {useState, useEffect} from 'react'
import Product from './Product'
function Categorie(props) {

    const [productinfo, setProductinfo] = useState({ products: []})
    const [sar,setSar] = useState("hello")

    
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
    
    
    
    return (

        <div>
            
            { this.props.name }
            { products.map((product) =>
                        
                        <Product product={product} />) }
        </div>
    )
}

export default Categorie
