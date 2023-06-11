import React from "react";
import "./CartItem.css";
class CardItem extends React.Component {
 
  // this function increase qty of product in cart
  increaseQuantity() {
    /*
    this.state.qty+=1;
    console.log("this", this.state);
    */
    /*
    setState form 1
    this.setState({
     qty : this.state.qty +1
     })
     */

    // setState coming from react.component class 
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  }
  // this function decrease qty of product in cart
  decreaseQuantity() {
    const {qty} = this.state;
    if(qty === 0){
        return ;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  }


  render() {
    
    const { price, title, qty } = this.props.product;
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
                 onClick={ () => this.props.onIncreaseQuantity(this.props.product)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                className="action-icons"
                alt="decrease"
                onClick={() => this.props.onDecreaseQuantity(this.props.product)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                className="action-icons"
                alt="delete"
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
