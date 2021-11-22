import Comment from "./Comment";
import React, {useEffect, useState} from 'react'


function Product(props){

    const [allcomments , setComments] = useState({comments : []})
    
    const fetchData = () =>{
        return fetch("http://localhost:5000/comments")
            .then((response) => response.json())
            .then((data)=> {
                setComments({comments : data
                })
            });
    }

    useEffect(()=>{
        fetchData()
    },[])

    const {comments} = allcomments;

    let com =[];

    for (let i=0; i< comments.length; i++){
        if(comments[i].productId === props.product.id){
            
            com.push(comments[i].body)
        }
    }

    return(
        <div>
            <div>
                <h5>id :{props.product.id}</h5>
                <h6>category :{props.product.categories}</h6>
                <h2>item: {props.product.title}</h2>
                <h3>brand: {props.product.brand}</h3>
                <h1>price :{props.product.price}</h1>

                <Comment com = {com} />
                </div>
        </div>
    );
}

export default Product;