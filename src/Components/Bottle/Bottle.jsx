import './Bottle.css'

const Bottle = ({bottle, handleBuyButton}) => {
    const{name, stock, price,img} = bottle;
    return (
        <div className="Bottle">
            <h3>Name:{name}</h3>
            <h3>Stock:{stock}</h3>
            <h3>BottlePrice:{price}</h3>
            <img src={img} alt="" />
            <button onClick={handleBuyButton} className='btn-buy-now'>Buy Now</button>
        </div>
    );
};

export default Bottle;