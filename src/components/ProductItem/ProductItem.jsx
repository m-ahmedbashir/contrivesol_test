import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
const ProductItem = ({ id, title, price }) => {
  // cart context
  const { addItem, cart } = useContext(CartContext);

  // handlecartFunction
  const handleAddCart = ({ id, title, price }) => {
    const quantity = 1;
    addItem({ id, title, price, quantity });
    toast.success("Item Added To Cart");
  };
  return (
    <div className="card">
      <div className="card-header bg-white">
        <img src="images.com" alt="product pic" />
      </div>
      <div className="card-body" key={id}>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleAddCart({ id, title, price })}
        >
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
