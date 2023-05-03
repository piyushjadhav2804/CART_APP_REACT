import React from "react";

class CartItem extends React.Component {

    constructor () {
        super();

        this.state = {
            price: 999,
            title: 'phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {

        // console.log(this.state)
        // this.state.qty = this.state.qty + 1;
        
        //setState form 1 
        // this.setState({
        //     qty: this.state.qty + 1
        // });


        //setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {

        this.setState((prevState) => {

            if(this.state.qty <= 1) {
                return {
                    qty: 0
                }
            }

            else {
                return {
                    qty: prevState.qty - 1
                }
            }
        });
    }

    deleteItem = () => {

        this.setState({
            qty: 0
        });
    }

    render() {

        const {price, title, qty} = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}Buttons></img>
                </div>

                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                   
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://img.icons8.com/?size=1x&id=14092&format=png"
                            onClick={this.increaseQuantity}
                        ></img>
                        
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://img.icons8.com/?size=1x&id=14088&format=png"
                            onClick={this.decreaseQuantity}
                        ></img>
                        
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://img.icons8.com/?size=1x&id=67884&format=png"
                            onClick={this.deleteItem}
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;