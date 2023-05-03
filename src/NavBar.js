import React from "react";

const NavBar = (props) => {

    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://img.icons8.com/?size=1x&id=59997&format=png" alt="cart_icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'orange',
      borderRadius: '50%',
      padding: '2px 8px',
      position: 'absolute',
      right: 10,
      top: -9
    }
  };

export default NavBar;