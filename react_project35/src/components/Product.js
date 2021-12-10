import Comment from "./Comment";
import React, {useEffect, useState} from 'react'




function Product(props){

    
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
                <h3>id :{props.product.id}</h3>
                <h3>category :{props.product.categories}</h3>
                <h3>item: {props.product.title}</h3>
                <h3>brand: {props.product.brand}</h3>
                <h3>price :{props.product.price}</h3>

                <Comment com = {com} />
                <button onClick={(e) => addToCart(props.product.id, 1,pack)}
                            className="">Add To Cart</button>
                </div>
        </div>
    );
}


async function addToCart(id, quantity, pack) {
    // let f=0
    // for(let i=0; i<pack.length; i++){
    //     if(id==pack[i].productId){
    //         f=1
    //         break
    //     }

    // }
    try {
      const response = await fetch("http://localhost:5000/cart", 
      {
        method: "POST",
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      let data = await response.json() 
    //   console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


//   function fetchCart() {
//     const res = fetch("http://localhost:4000/cart");
//     res
//       .json()
//       .then((res) => {
//         console.log(res.data.items);
//         setCarts(res.data.items);
//         setPayloader(res.data);
//       })
//       .catch((error) => {
//         setError(error);
//       });
  

//   async function emptyCart() {
//     try {
//       const res = await fetch("http://localhost:4000/cart/empty-cart", {
//         method: "DELETE",
//       });
//       await res.json();
//       fetchCart();
//       props.history.push("/");
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <button
//     className="btn btn-danger"
//     onClick={(e) => emptyCart()}
//   >
//     Empty cart
//   </button>
//   )
//   }


export default Product;