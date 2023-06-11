import React from "react";
import CardItem from "./CartItem";
import "./Cart.css";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 10,
          img: "",
          id: 1,
        },
        {
          price: 1999,
          title: "phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 99,
          title: "USB",
          qty: 100,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;

    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="Cart">
        {products.map((product) => {
          return (
            <CardItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
