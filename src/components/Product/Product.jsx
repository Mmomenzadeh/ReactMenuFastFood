import "../../assets/styles/product.css";
import "../../assets/styles/button.css";
import { ProductButton } from "../Button/Button";


const Product = ({ url, title, price }) => {
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={url} alt={title} />
      </div>
      <div className="product-content">
        <p className="product-title">{title}</p>
        <p className="product-price">{price} تومان</p>
        <div className="calculation">
          <div className="product-counter">
            <ProductButton btnStyle="btn-product btn-radius-1" text="+" />
            <p className="counter">0</p>
            <ProductButton btnStyle="btn-product btn-radius-2" text="-" />
          </div>
          <p className="product-totalPrice">0تومان</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
