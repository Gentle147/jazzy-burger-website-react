import React from "react";
import cartIcon from "../assets/vector-images/cart.png";
import CartOrder from "./CartOrder";
import SubTotal from "./SubTotal";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { dataContextCreated } from "../contextData/DataContext";

const CartPage = () => {
  const { cart, toCartButton } = useContext(dataContextCreated);
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      <div className="cart-img">
        <div className="cart-img-con">
          <label htmlFor="cart-icon">
            <span className="cart-badge">{cart.length}</span>
            <img
              src={cartIcon}
              alt="cart-icon"
              className=""
              style={{ width: "20px", marginRight: "15px" }}
            />
          </label>
          {/* <input type="checkbox" id="cart-icon" className="d-none" /> */}
          <div className="cart-order">
            <h3>Your Order</h3>
            {cart.length > 0 ? (
              <>
                {cart.map((order) => (
                  <CartOrder
                    order={order}
                    key={order.id}
                    toCartButton={toCartButton}
                  />
                ))}
                <SubTotal cart={cart} />
                <button
                  className="checkout-btn"
                  onClick={() => {
                    navigate("/checkout");
                  }}
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <h4>Your cart is empty</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
