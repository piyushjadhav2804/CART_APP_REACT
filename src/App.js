import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar'

class App extends React.Component {
  
  constructor () {
    super();

    this.state = {

        products: [
            {
                price: 999,
                title: 'phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                id: 1
            },

            {
                price: 9999,
                title: 'laptop',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 2
            },

            {
                price: 99,
                title: 'watch',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
}

handleIncreaseQuantity = (product) => {

    console.log('increase quantity of ', product);

    const {products} = this.state;

    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
    });
}

handleDecreaseQuantity = (product) => {

    const {products} = this.state;

    const index = products.indexOf(product);

    if(products[index].qty > 0) {
        products[index].qty -= 1;
    }

    this.setState({
        products: products
    });
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    });
}

  getCartCount = () => {

    const {products} = this.state;

    let count=0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let count=0;

    products.map((product) => {
      count += product.qty * product.price
    });

    return count;
  }

  render() {

    const { products } = this.state;

    return (
      <div className="App">
        <NavBar 
          count={this.getCartCount()}
        />
        
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>
          TOTAL: {this.getCartTotal( )}
        </div>
      </div>
    );
  }
}

export default App;
