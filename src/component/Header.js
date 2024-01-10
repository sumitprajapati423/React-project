import React from 'react'
import { Badge, Container, Dropdown, FormControl, Navbar, Nav, Button,  } from 'react-bootstrap'
import{FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import { CartState } from '../context/context'
import { AiFillDelete } from 'react-icons/ai'
import { MdMarkEmailUnread } from "react-icons/md";


// import react-bootstrap from 'react-bootstrap'

const Header = () => {

 const {
      state:{Cart},
      Dispatch,
      productDispatch
    }= CartState();

   
        
  

  return (
    <div>
    
    <Navbar bg='dark' variant='dark' style={{height:80}} >
        <Container>
            <Navbar.Brand >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXY8UsBos3JCN_NwKInoviSr978dcY9q0Tg&usqp=CAU" alt="" width={"100px"} height={"79.4px"} />
                <Link to='/'>  <span id='ss'>Shoping Cart</span></Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
              <FormControl style={{width:500}}
                   placeholder='search a project'
                   className='m-auto'
                    onChange={(e)=>{
                      productDispatch({
                     type: "Filter_BY_SEARCH",
                     payload: e.target.value,
                   })
                  }}
              />
            </Navbar.Text>
            <Nav>
              <Dropdown alignRight>
                <Dropdown.Toggle variant='success'>
                    <FaShoppingCart color='white' fontSize="25px"/>
                    <Badge>{Cart.length}</Badge>
                </Dropdown.Toggle>


                <Link to="/Email">
                           <Button  style={{ marginLeft:"20px"}}><MdMarkEmailUnread  style={{fontSize:"25px"}}/></Button>

                       </Link>


                <Dropdown.Menu style={{minWidth: 370 , marginLeft: "-290px" , backgroundColor:"powderblue"}}>
                  { Cart.length > 0 ?(
                    <>
                    {
                    Cart.map((prod)=>(
                      <span className='cartitem' key={prod.id}>
                      <img
                       src={prod.image} 
                       className='cartItemImg'
                       alt={prod.name} 
                       />
                       <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>$ {prod.price.split(".")[0]}</span>
                       </div>
                       <AiFillDelete
                       fontSize="20px"
                       style={{cursor:'pointer'}}
                       onClick={()=>
                        Dispatch({
                          type: 'REMOVE_Cart',
                          payload: prod,
                        })
                       }/>
                    </span>
                    ))}
                      <Link to="/Cart">
                           <Button style={{ width:"95%", margin: "0 10px" }}>Go to Cart</Button>
                       </Link>
                          </>
                         ):(<span  style={{padding:10}}>Cart is Empty!</span>)}
                  
                    </Dropdown.Menu>
              </Dropdown>
            </Nav>
        </Container>
    </Navbar>
    </div>
  )
}

export default Header;