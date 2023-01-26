import "../../assets/styles/productList.css";
import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    
      <div className="ProductList-container">
        {products.map((item) => {
          return (
            <Product
              key={item.id}
              title={item.name}
              price={item.price}
              url={item.url}
            />
          );
        })}
      </div>
   
  );
};

export default ProductList;
