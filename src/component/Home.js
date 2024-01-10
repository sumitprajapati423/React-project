import React from 'react'
import { CartState } from '../context/context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';
import "./styles.css"
import Header from './Header';
import Futter from '../Futter';


const Home = () => {
    const {
      state: {products},
      productState: {sort, byFastDelivery, searchQuery, byRating, byStock },
  }= CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) => 
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price 
      );
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod)=> prod.inStock)
    }

    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery)
    }

    if(byRating){
      sortedProducts = sortedProducts.filter((prod)=> prod.ratings >= byRating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=> prod.name.toLowerCase().includes(searchQuery))
    }



    return sortedProducts;
  }
  return (
    <>
    <Header/>
    <div className='home'>
       
        {<Filters/>}
        <div className='productContainer'>
            {transformProducts().map((prod) =>{
                return <SingleProduct prod={prod} key={prod.id}/>
            })}
        </div>
    </div>
    <Futter/></>
    
  )
}

export default Home