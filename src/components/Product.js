import { useState, useEffect } from "react";
import  Card from "react-bootstrap/Card"; 
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux"; 
import {add} from '../store/cartSlice';
import  { getProducts }  from "../store/productSlice";


const Product = () => {
    const dispatch = useDispatch();
    const {data: products} = useSelector(state => state.products);
     useEffect(()=> {
        //dispatch an action for fetchProducts
        dispatch(getProducts());
        //api
        // fetch('https://api.escuelajs.co/api/v1/products')
        // .then(data => data.json())
        // .then(result => getProducts(result))

     }, []);
      
     const addToCart = (product) => {
        //dispatch add action
        dispatch(add(product))
     }

     const cards = products.map(product => (
         <div className="col-md-3">
              <Card key={product.id} className="h-100" style={{marginBottom: '10px'}}>
                <div className="text-center">
                  <Card.Img variant="top" src={product.images} style={{ width : '100px', height: '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      INR{product.price}
                    </Card.Text>
                </Card.Body>
                 <Card.Footer>
                     <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
                 </Card.Footer>
                </Card>
         </div>
     ))
    return(
        <>
           <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product;