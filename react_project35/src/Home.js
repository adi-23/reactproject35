import React, {useEffect, useState} from 'react'
import Nav from './Nav'

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
            { products.map((product) => <div>
                <h5>id :{product.price}</h5>
                <h6>category :{product.categories}</h6>
                <h2>item: {product.title}</h2>
                <h3>brand: {product.brand}</h3>
                <h1>price :{product.price}</h1>
                </div>) }
        </div>
    )
}

export default Home
