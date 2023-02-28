import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Header from "../Header/Header";
// romain converter library
import { stringify } from "roman-numerals-api";

const Cart = () => {
  // cart context

  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="container">
      <Header />
      <div className="row w-50 mt-5 mx-auto">
        <div className="col-12">
          <div className="card shadow">
            {cart.items.length === 0 && (
              <div className="alert alert-primary text-center">
                Cart is Empty
              </div>
            )}
            {cart.items.length !== 0 && (
              <div className="card-header bg-white">
                <h5 className="text-center ">
                  Total Amount: {stringify(cart.total)}
                </h5>
              </div>
            )}
            <div className="card-body">
              {cart.items.map((item) => (
                <div className="card m-2">
                  <img src="image.com" alt="img" />
                  <div className="card-body">
                    <h6>Name: {item.title}</h6>
                    <h6>Price: {item.price}</h6>
                    <h6>Quantity: {item.quantity}</h6>
                  </div>
                </div>
              ))}
            </div>
            {cart.items.length !== 0 && (
              <div className="card-footer text-center ">
                <button className="btn btn-outline-danger " onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
