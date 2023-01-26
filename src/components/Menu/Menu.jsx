import "../../assets/styles/menu.css";
import ProductList from "../ProductsList/ProductsList";

const Menu = ({ products }) => {
  return (
    <div className="menu">
      <div className="heading">رستوران مک دونالد شعبه تهران</div>
      <ProductList products={products} />
    </div>
  );
};

export default Menu;
