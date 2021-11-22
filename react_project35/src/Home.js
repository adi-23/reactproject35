import React, {useEffect, useState} from 'react'
import Nav from './Nav'
import Product from './components/Product'

function Home() {
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


        

        <div >
            <Nav />
            List of products
            { products.map((product) =>
            
            <Product product={product} />) }
        </div>
    )
}

export default Home
