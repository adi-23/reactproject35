import React, {useEffect, useState} from 'react'
import Product from './components/Product';
import "./components/CSS/Cart.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
// import Cartitems from './components/Cartcomp/Cartitems';



function Cart() {

    const [productinfo, setProductinfo] = useState({ products: []})

    const fetchData = () =>{
        return fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data)=> {
                setProductinfo({products : data
                })
            });
    }

    useEffect(()=>{
        fetchData()
    },[])

    const {products} = productinfo


    const [cartinfo, setCartinfo] = useState({ pack: []})
    

    const fetchData1 = () =>{
        return fetch("http://localhost:5000/cart")
            .then((response) => response.json())
            .then((data)=> {
                setCartinfo({pack : data
                })
            });
    }

    useEffect(()=>{
        fetchData1()
    },[])

    const {pack} = cartinfo

    let display = []

    for (let i=0; i< products.length; i++){
        for (let j=0; j<pack.length; j++){
            if(products[i].id === pack[j].productId){
            
            display.push(products[i])
        }
    }
    }
    
    const url = "http://localhost:5000/cart";
    const [cartlist , updatecart] = useState([]);
    const getcart=()=>{
        fetch(url)
        .then(response=>response.json())
        .then(allCart => updatecart(allCart))
    }
    const increment = (id,categories,title,brand,price,initialprice,quantity) => {
        var items = {
            "id": id,
            "categories": categories,
            "title":title,
            "brand":brand,
            "quantity":quantity+1,
            "initialprice":initialprice,
            "price":price+initialprice
            
        };
        const url = "http://localhost:5000/cart/"+id;
        axios.put(url,items)
        .then(response =>{
            getcart();

          });
        
    }
    const decrement = (id,categories,title,brand,price,initialprice,quantity) => {
        if (quantity==1) {
            quantity=2;
            price=initialprice*2

            
            
        }
        var items = {
            "id": id,
            "categories": categories,
            "title":title,
            "brand":brand,

            "quantity":quantity-1,
            "initialprice":initialprice,
            "price":price-initialprice
            
        };
        const url = "http://localhost:5000/cart/"+id;
        axios.put(url,items)
        .then(response =>{
            getcart();

          });
        
    }
    const[msg,updatemsg] = useState("");

    const removeItems = (Id) =>{
        var url = "http://localhost:5000/cart/"+Id
        axios.delete(url)
          .then(response =>{
            getcart();

          })
          .catch(error=>{
            updatemsg("Error! Try Agian !!!!");
          
          });
          
            
    }
    useEffect(()=>{
        getcart();
    },[]
    )


    return (
    <div>
        <h1>{msg}</h1>
        <div className="continue-shopping">
            <Link to="/home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_s2mtboH-sMR_0pT_vgDeWFK88j-I0YOjxQ&usqp=CAU" alt="arrow" className="arrow-icon"/></Link>
            <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVBcdEwjcPkUTnpyfPpd3mDTcOf4V4qo0kg&usqp=CAU" alt="cart"/>
            <p>7</p>

        </div>
        <div className="main-cart-section">
            <h1>Shopping cart</h1>
            <p className="total-items">You have <span className="total-items-count">7</span> items in your cart</p>
            <div className="cart-items">
                <div className="cart-items-container">
                    
                        <div className="items-info">
                            <div className="title">
                                        
                                { cartlist.map((product, cart) =>
                            
                                    {
                                        return (
                                        <div>
                                            <h1>{product.brand}</h1>
                                            <p>{product.title}</p>
                                    
                                                 <div className="add-minus-quantity">
                                                 <i onClick={decrement.bind(this,product.id,product.categories,product.title,product.brand,product.price,product.initialprice,product.quantity)} class="fas fa-minus minus"></i>
                                                 <input type="text" placeholder={product.quantity}/>
                                                 <i onClick={increment.bind(this,product.id,product.categories,product.title,product.brand,product.price,product.initialprice,product.quantity)} class="fas fa-plus add"></i>
                                         </div>
                                                
                                            
                                           
                                            <div className="price">
                                                <h1>{product.price}/-</h1>
                                            </div>
                                            <div  className="remove-item">
                                                <i  onClick={removeItems.bind(this,product.id)} class="fas fa-trash-alt remove"></i>
                                                
                                                
                                            </div>
                                        </div>
                                        )
                                    }) } 
                               
                            
                            </div>
                            
                        

                        </div>
                </div>

            </div>

        </div>
        <div className="card-total">
            <h3>card Total:<span>4200</span>/-</h3>
            <button>Checkout</button>

        </div>
    </div>)
}

export default Cart;

// import React, {useEffect, useState} from 'react'
// import Product from './components/Product';





// function Cart() {


 
//     const [payload, setPayloader] = useState({});
    

    

//     const [productinfo, setProductinfo] = useState({ products: []})

//     const fetchData = () =>{
//         return fetch("http://localhost:5000/products")
//             .then((response) => response.json())
//             .then((data)=> {
//                 setProductinfo({products : data
//                 })
//             });
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])

//     const {products} = productinfo


//     const [cartinfo, setCartinfo] = useState({ pack: []})

//     const fetchData1 = () =>{
//         return fetch("http://localhost:5000/cart")
//             .then((response) => response.json())
//             .then((data)=> {
//                 setCartinfo({pack : data
//                 })
//             });
//     }

//     useEffect(()=>{
//         fetchData1()
//     },[])

//     const {pack} = cartinfo

//     console.log(pack)
    
//     let display = []
//     const quantity = []

//     for(let i=1; i<products.length+1; i++){
//         quantity[i]=0
//     }

//     for(let i=1; i<products.length+1; i++){
//         for(let j=0; j<pack.length; j++){
//             if(i==pack[j].productId){
//                 quantity[i]=quantity[i]+1
//             }
//         }
//     }

// //   console.log(quantity)


//     let a = 0

//     for (let i=0; i< products.length; i++){
//         for (let j=0; j<pack.length; j++){
//             if(products[i].id === pack[j].productId){
//                 for(let m=0; m<display.length; m++){
//                     if(pack[j].productId===display[m].id){
//                         pack[j].quantity= pack[j].quantity + 1
//                         a = 1
                        
                        
//                 }
//             }
//             if(a==0)
//                 {display.push([products[i],pack[j]])}
           
//         }a=0
//     }
  
    

// }


// async function removeFromCart(id){
//     const response = await fetch("http://localhost:5000/cart", {
//     method: "DELETE",
//     body: JSON.stringify({
//       productId: id,
      
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     for(let i=0; i<pack.length; i++){
//         if(id===pack[i].productId && quantity[id]>0){
//             quantity[i]=quantity[i]-1
//         }
//     }
   
// }

// // console.log(cartinfo)



    

//     return (
//         <div>
             
//               { display.map((product) =>
                        
//                         {
//                             return (
//                                 <div>
//                                    <p>{product[1].quantity}</p>
//                                    <h3>ID: {product[0].id}</h3>
//                                    <h3>Title: {product[0].title}</h3>
//                                    <h3>Brand: {product[0].brand}</h3>
//                                    <h3>Price: {product[0].price}</h3>
//                                    <h3>Quantity: {quantity[product[0].id]}</h3>
//                                    <button onClick={(e) => removeFromCart(product.id)}>DELETE</button>
//                                    <button onClick={(e) => increaseQty(product[0].id,product[1].id,product[1].quantity)} className="btn btn-primary btn-sm"
//                           >
//                             +
//                           </button>
//                                   <br></br>

//                             </div>
//                             )
//                         }) } 

                        

                        
//         </div>
//     )

   

//     async function increaseQty(productId, cartId, qty) {

//         // let f=0;
//         // for(let i=0; i<pack.lenght; i++){
//         //     if(id==pack[i].productId){
//         //         pack[i].quantity= pack[i].quantity + 1
//         //         f=1
//         //         break
//         //     }
//         // if(f=0){
//         //     try {
//         //          const res = await fetch("http://localhost:5000/cart", {
//         //             method: "PUT",
//         //             body: JSON.stringify({
//         //             productId: id,
//         //             quantity: 1,
//         //         }),
//         //             headers: {
//         //               "Content-type": "application/json; charset=UTF-8",
//         //             },
//         //             });
//         //         console.log(res);
//         //         fetchCart();
//         //         alert("Item increamented");
//         //     } catch (err) {
//         //         console.log(err);
//         //     }
//         // }

//         // useEffect((productId, cartId, qty)=>{
//             const axios = require('axios');
//             const url = 'http://localhost:5000/cart/'+cartId


//         axios.put(url, {
//             productId: productId,
//             quantity: qty + 1,
//         }).then(resp => {
    
//             console.log(resp.data);
//         }).catch(error => {
    
//             console.log(error);
//         });
//         // },[])
        

   


           


        
//       }




//     }
                    

    


// export default Cart;
