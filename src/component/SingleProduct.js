import { Button, Card } from "react-bootstrap"
import Rating from "./Rating";
import { CartState } from "../context/context";


const SingleProduct = ({prod}) => {
  console.log(prod)

  const{
    state:{Cart},
     Dispatch,
      }= CartState();
      
console.log(Cart);
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name}/>
        {/* console.log(Card.Img) */}
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>$ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ?(
                 <div>Fast Delivery</div>
            ):(
              <div> 4 day delivery</div>
            )}
            <Rating rating={prod.ratings}/>
          </Card.Subtitle>
          {
            Cart.some((p)=>p.id === prod.id) ? (
              <Button
              onClick={() => {
                Dispatch({
                  type: 'REMOVE_Cart',
                  payload: prod,
                });
              }}
               variant="danger">Remove Cart</Button>
               
            )
            :(
              <Button
               onClick={() => {
                Dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                });
              }}
               disabled={!prod.inStock}>
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </Button>
            )
          } 
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct;
