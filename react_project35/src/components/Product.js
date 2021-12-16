import Comment from "./Comment";
import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./CSS/product.css";


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


    // const[msg , updateMsg] = useState("");
    // const addtocart = (productData) => {
    //   var url = "http://localhost:5000/products"

    // }


    const {comments} = allcomments;

    let com =[];

    for (let i=0; i< comments.length; i++){
        if(comments[i].productId === props.product.id){
            
            com.push(comments[i].body)
        }
    }
    const[msg,updatemsg] = useState("");

    const addToCart = (product) =>{
    var url = "http://localhost:5000/cart";
    axios.post(url,product)
    .then(response =>{
      updatemsg("Added Succesfully !!!");
    })
  }
    return(
        <div>
            <div>
                
                <h1 className="product-category">{props.product.categories}</h1>
                <h1 class="product-brand"> {props.product.brand}</h1>
                <p class="product-short-des"> {props.product.title}</p>
                <span class="product-price">Rs.{props.product.price}/-</span>
                <span class="product-actual-price">{2*props.product.price}</span>
                <span class="product-discount">( 50% off )</span>

          


                  <Comment com={com} />
                  <button onClick={(e) => addToCart(props.product)}
                    className="btn cart-btn">Add To Cart</button>


              </div>
            </div>
            );
}

// async function addToCart(id, quantity) {
//     try {
//       const response = await fetch("http://localhost:5000/cart", {
//         method: "POST",
//         body: JSON.stringify({
//           productId: id,
//           quantity: quantity,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       })
//       let data = await response.json()
//       console.log(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }
  

export default Product;