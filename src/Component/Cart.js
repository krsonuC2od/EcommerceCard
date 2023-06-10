import React from 'react';
import CardItem from './CartItem';
import './Cart.css'

class Cart extends React.Component {
  render() {
    return (
    <div className='Cart'> 
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    </div>
    )
  }
}


export default Cart;