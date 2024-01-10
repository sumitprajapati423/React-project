import React, { useEffect, useState } from 'react'
import { CartState } from '../context/context';
import { Button, Col, Form, ListGroup, Row, Image} from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  const {
    state: {Cart},
    Dispatch,
  } = CartState();

  const [total, setTotal]=useState();

  useEffect(()=>{
    setTotal(Cart.reduce((acc, curr)=> acc + Number(curr.price)*curr.qty, 0));
  },[Cart])
  
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            Cart.map((prod)=>(
             <ListGroup.Item key={prod.id}>
              <Row style={{ backgroundColor:"powderblue"}}>
              <Col md={2}>
                <Image src={prod.image} alt={prod.name} fluid rounded/>
               </Col>

               <Col md={2}>
                  <span>{prod.name}</span>
               </Col>

               <Col md={2}>${prod.price}</Col>

               <Col md={2}>
                  <Rating rating={prod.ratings}/>
               </Col>

               <Col md={2}>
                <Form.Control as="select" value={prod.qty}
                   onChange={(e)=>
                    Dispatch({
                    type: "CHANGE_CART_QYT",
                     payload:{
                    id:prod.id,
                    qty:e.target.value,
                     }
                    })
                  }>
                  {[...Array(prod.inStock).keys()].map((x)=>(
                    <option key={x+1}>{x + 1}</option>
                  ))}
                </Form.Control>
                </Col>

               <Col md={2}>
                  <Button
                      type='button'
                      variant='light'
                      onClick={()=>
                      Dispatch({
                        type: "REMOVE_Cart",
                        payload:prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px"/>
                  </Button>
                </Col>
              </Row>
             </ListGroup.Item> 
             
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({ Cart.length}) items</span>
        <span style={{fontWeight:700, fontSize:20}}>Total:${total}</span>
          <Button type='button' disabled={Cart.length === 0}>
               Proceed to Checkout
          </Button>
      </div>
    </div>
  )
}

export default Cart