import { useSelector, useDispatch } from "react-redux";
import  Card from "react-bootstrap/Card"; 
import Button from "react-bootstrap/Button";
import {remove} from "../store/cartSlice";
const Cart = () => {
  const products = useSelector(state => state.cart);  
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    //dsipatch a remove action 
    dispatch(remove(id));
  }

  const cards = products.map(product => (

    <div className="col-md-12">
         <Card key={product.id} className="h-100" style={{marginBottom: '10px'}}>
           <div className="text-center">
             <Card.Img variant="top" src={product.images} style={{ width : '100px', height: '130px'}} />
           </div>
           <Card.Body>
               <Card.Title>{product.title}</Card.Title>
               <Card.Text>
                 INR:{product.price}
               </Card.Text>
           </Card.Body>
            <Card.Footer>
                <Button variant="danger" onClick={() => removeToCart(product.id)}>remove Item</Button>
            </Card.Footer>
           </Card>
    </div>
))
     return(
        <>
          <div className="row">
              {cards}
          </div>
        </>
    )
}
export default  Cart;