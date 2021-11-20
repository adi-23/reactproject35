import React, {useEffect, useState} from 'react'

function Home() {
    const [productinfo, setProductinfo] = useState([])
    const [sar,setSar] = useState("hello")

    
    const fetchData = () => {
        return fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) =>{ 
                console.log(data);
                
            });

    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div >
            List of products
            { productinfo } 
        </div>
    )
}

export default Home
