import "./assets/styles/App.css";
import ProductList from "./components/ProductsList/ProductsList";
import hamburger from "./assets/images/hamburger.png";
import ceasar from "./assets/images/ceasar.png";
import french_fries from "./assets/images/french_fries.png";
import salad from "./assets/images/salad.png";
import soda from "./assets/images/soda.png";
import Menu from "./components/Menu/Menu";
import Bill from "./components/Bill/Bill";
const App = () => {
  const products = [
    { id: 1, name: "همبرگر معمولی ", price: "35000", url: hamburger },
    {
      id: 2,
      name: "همبرگر معمولی با قارچ و پنیر",
      price: "78000",
      url: hamburger,
    },
    { id: 3, name: "همبرگر مخصوص", price: "88000", url: hamburger },
    {
      id: 4,
      name: "همبرگر مخصوص با قارچ و پنیر",
      price: "150000",
      url: hamburger,
    },
    {
      id: 5,
      name: "سیب زمینی سرخ کرده ویژه",
      price: "50000",
      url: french_fries,
    },
    { id: 6, name: "سیب زمینی سرخ کرده", price: "25000", url: french_fries },
    { id: 7, name: "نوشابه رژیمی", price: "15000", url: soda },
    { id: 8, name: "نوشابه", price: "13000", url: soda },
    { id: 9, name: "سالاد فصل ", price: "90000", url: salad },
    { id: 10, name: "سالاد سزار", price: "120000", url: ceasar },
  ];

  return (
    <div className="container">
        <Menu  products={products} />
        <Bill />
    </div>
  );
};

export default App;
