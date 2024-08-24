import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?  // Corrected to 'length'
      props.productList.map((product, i) => (
        <Product 
          product={product} 
          key={i} 
          incrementQuantity={props.incrementQuantity} 
          decrementQuantity={props.decrementQuantity} 
          removeItem={props.removeItem} 
          index={i} 
        />
      ))
    : <h1>No Product Exists in the Cart</h1>  // Fixed typo 'Exist' to 'Exists'
  );
}
