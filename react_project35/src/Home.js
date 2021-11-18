import React, {useEffect} from 'react'

function Home() {

    const fetchData = () => {
        return fetch("http://localhost:5000/products")
              .then((response) => response.json())
              .then((data) => console.log(data));}

    useEffect(()=>{

        fetchData();

    },[])

    return (
        <div>
            List of products 
        </div>
    )
}

export default Home
