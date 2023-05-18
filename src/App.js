import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC-gKhdi8ZRNDXEu4wV1kM67Zd2hUqzB7w",
  authDomain: "react-cart-e2739.firebaseapp.com",
  projectId: "react-cart-e2739",
  storageBucket: "react-cart-e2739.appspot.com",
  messagingSenderId: "436865307652",
  appId: "1:436865307652:web:34078badc3b0ab66129151"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  
  constructor () {
    super();

    this.state = {

        products: []
    }
}

componentDidMount() {

  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot) => {
        // console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
          return ''
        });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id;

          return data;
        });

        this.setState({
          products
        })
    })
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
      return ''
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
