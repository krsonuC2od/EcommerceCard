import React from "react";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Watch",
          qty: 10,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
          id: 1,
        },
        {
          price: 1999,
          title: "phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80",
          id: 2,
        },
        {
          price: 99,
          title: "USB",
          qty: 1,
          img: "https://images.unsplash.com/photo-1499033300314-43c811cff6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const {products} = this.state;
    let count=0
  products.forEach((product)=>{
  count += product.qty;
  })

    return count;
  }
 
  getCartTotal  = ()=>{
    const {products} = this.state;
    let cartTotal =0;
  products.map((product)=>{
   return  cartTotal = cartTotal + product.qty * product.price;
  })
  return cartTotal;
 } 
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count ={this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding:10 ,fontSize:20}}>Total Amount: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
