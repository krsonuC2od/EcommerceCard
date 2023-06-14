import React from "react";
import CardItem from "./CartItem";
import "./Cart.css";

const Cart = (props) => {
 
  
    const { products } = props;
    return (
      <div className="Cart">
        {products.map((product) => {
          return (
           
           <CardItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct = {props.onDeleteProduct}
            />
           
           
          );
        })}
      </div>
    );
  }


export default Cart;
