import React from "react";
import "./CartItem.css";
class CardItem extends React.Component {
 
 

    
  
   

  render() {
    
    const { price, title, qty } = this.props.product;
    const {product ,onIncreaseQuantity ,onDecreaseQuantity  , onDeleteProduct } = this.props;
    return (
      <>
        <div className="cart-item">
          <div className="left-block">
            <img src="" alt="" style={styles.image} />
          </div>
          <div className="right-block">
            <div style={{ fontSize: 25 }}>{title}</div>
            <div style={{ color: "#777" }}>Rs {price}</div>
            <div style={{ color: "#777" }}>Qty: {qty}</div>
            <div className="cart-item-action">
              {/*Button*/}
              <img
                src="https://cdn-icons-png.flaticon.com/128/5702/5702451.png"
                className="action-icons"
                alt="increase"
                 onClick={ () => onIncreaseQuantity(product)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                className="action-icons"
                alt="decrease"
                onClick={() => onDecreaseQuantity(product)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                className="action-icons"
                alt="delete"
                onClick={() => onDeleteProduct(product.id)}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CardItem;
