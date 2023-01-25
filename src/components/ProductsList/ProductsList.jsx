import "../../assets/styles/productList.css"
import Product from "../Product/Product"

const products =[
    {id : 1 , name : "همبرگر معمولی " , price :"35000" , url :"https://bill-generator-js.vercel.app/img/hamburger.png"},
    {id : 2 , name : "همبرگر معمولی با قارچ و پنیر" , price :"78000" , url :"https://bill-generator-js.vercel.app/img/hamburger.png"},
    {id : 3 , name : "همبرگر مخصوص" , price :"88000" , url :"https://bill-generator-js.vercel.app/img/hamburger.png"},
    {id : 4 , name : "همبرگر مخصوص با قارچ و پنیر" , price :"150000" , url :"https://bill-generator-js.vercel.app/img/hamburger.png"},
    {id : 5 , name : "سیب زمینی سرخ کرده ویژه" , price :"50000" , url :"https://bill-generator-js.vercel.app/img/french_fries.png"},
    {id : 6 , name : "سیب زمینی سرخ کرده" , price :"25000" , url :"https://bill-generator-js.vercel.app/img/french_fries.png"},
    {id : 7 , name : "نوشابه رژیمی" , price :"15000" , url :"https://bill-generator-js.vercel.app/img/soda.png"},
    {id : 8 , name : "نوشابه" , price :"13000" , url :"https://bill-generator-js.vercel.app/img/soda.png"},
    {id : 9 , name : "سالاد فصل " , price :"90000" , url :"https://bill-generator-js.vercel.app/img/salad.png"},
    {id : 10, name : "سالاد سزار" , price :"120000" , url :"https://bill-generator-js.vercel.app/img/ceasar.png"},

    
]


const ProductList =()=>{
    return(
        <div className="ProductList-container">
            {products.map((item)=>{
                return <Product key={item.id} title={item.name} price={item.price} url={item.url} />
            })}
        </div>
    )
}

export default ProductList