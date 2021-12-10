
import React, {useEffect, useState} from 'react'
import Product from './components/Product';





function Cart() {


 
    const [payload, setPayloader] = useState({});
    

    

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

    console.log(pack)
    
    let display = []
    const quantity = []

    for(let i=1; i<products.length+1; i++){
        quantity[i]=0
    }

    for(let i=1; i<products.length+1; i++){
        for(let j=0; j<pack.length; j++){
            if(i==pack[j].productId){
                quantity[i]=quantity[i]+1
            }
        }
    }

//   console.log(quantity)


    let a = 0

    for (let i=0; i< products.length; i++){
        for (let j=0; j<pack.length; j++){
            if(products[i].id === pack[j].productId){
                for(let m=0; m<display.length; m++){
                    if(pack[j].productId===display[m].id){
                        pack[j].quantity= pack[j].quantity + 1
                        a = 1
                        
                        
                }
            }
            if(a==0)
                {display.push([products[i],pack[j]])}
           
        }a=0
    }
  
    

}


async function removeFromCart(id){
    const response = await fetch("http://localhost:5000/cart", {
    method: "DELETE",
    body: JSON.stringify({
      productId: id,
      
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    for(let i=0; i<pack.length; i++){
        if(id===pack[i].productId && quantity[id]>0){
            quantity[i]=quantity[i]-1
        }
    }
   
}

// console.log(cartinfo)



    

    return (
        <div>
             
              { display.map((product) =>
                        
                        {
                            return (
                                <div>
                                   <p>{product[1].quantity}</p>
                                   <h3>ID: {product[0].id}</h3>
                                   <h3>Title: {product[0].title}</h3>
                                   <h3>Brand: {product[0].brand}</h3>
                                   <h3>Price: {product[0].price}</h3>
                                   <h3>Quantity: {quantity[product[0].id]}</h3>
                                   <button onClick={(e) => removeFromCart(product.id)}>DELETE</button>
                                   <button onClick={(e) => increaseQty(product[0].id,product[1].id,product[1].quantity)} className="btn btn-primary btn-sm"
                          >
                            +
                          </button>
                                  <br></br>

                            </div>
                            )
                        }) } 

                        

                        
        </div>
    )

   

    async function increaseQty(productId, cartId, qty) {

        // let f=0;
        // for(let i=0; i<pack.lenght; i++){
        //     if(id==pack[i].productId){
        //         pack[i].quantity= pack[i].quantity + 1
        //         f=1
        //         break
        //     }
        // if(f=0){
        //     try {
        //          const res = await fetch("http://localhost:5000/cart", {
        //             method: "PUT",
        //             body: JSON.stringify({
        //             productId: id,
        //             quantity: 1,
        //         }),
        //             headers: {
        //               "Content-type": "application/json; charset=UTF-8",
        //             },
        //             });
        //         console.log(res);
        //         fetchCart();
        //         alert("Item increamented");
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

        // useEffect((productId, cartId, qty)=>{
            const axios = require('axios');
            const url = 'http://localhost:5000/cart/'+cartId


        axios.put(url, {
            productId: productId,
            quantity: qty + 1,
        }).then(resp => {
    
            console.log(resp.data);
        }).catch(error => {
    
            console.log(error);
        });
        // },[])
        

   


           


        
      }




    }
                    

    


export default Cart;
