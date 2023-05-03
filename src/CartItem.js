import React from "react";

const CartItem = (props) => {

    const { price, title, qty } = props.product;

    const { product, onDecreaseQuantity, onDeleteProduct, onIncreaseQuantity } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}></img>
            </div>

            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>

                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://img.icons8.com/?size=1x&id=14092&format=png"
                        onClick={() => onIncreaseQuantity(product)}
                    ></img>

                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://img.icons8.com/?size=1x&id=14088&format=png"
                        onClick={() => onDecreaseQuantity(product)}
                    ></img>

                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://img.icons8.com/?size=1x&id=67884&format=png"
                        onClick={() => onDeleteProduct(product.id)}
                    ></img>
                </div>
            </div>
        </div>
    );
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