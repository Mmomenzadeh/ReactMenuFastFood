import "../../assets/styles/product.css"

const Product = ({url , title , price })=>{
    return(
        <div className="Product-container">
            <div><img src={url} alt={title} /></div>
            <div>
                <h3>{title}</h3>
                <h1>{price}</h1>
                <div className="calculation">
                    <div className="product-counter">
                        <button>+</button>
                        <input type="number" value={0} />
                        <button>-</button>

                    </div>
                    <p className="product-totalPrice">0تومان</p>
                </div>
            </div>
        </div>
    )
}

export default Product