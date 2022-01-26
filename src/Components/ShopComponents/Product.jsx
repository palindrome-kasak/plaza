import React from 'react';
import "../../styles/main.scss";
import WineGlass from '../../assets/Images/wineGlass.png'

const Product = () => {
    return(

<div className="column">
<div className="productImage">
<img className="ProductPicture" src={WineGlass} alt="img" />
</div>
<div className="productText">
    <div className="Head">
    <div className="chronicles_head">Creed Chronicles</div> <div className="priceTag">$15</div><br></br>
    </div>
    <div>Wanna be cool? Get this.<br></br> Trust us.</div>
</div>
<div className="button">
<button className="Buy" ><div className="buyText">Buy</div></button>
</div>
</div>
    )
 };
  export default Product