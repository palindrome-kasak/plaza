import React from 'react';
import { useState } from 'react';
import "../../styles/main.scss";
import WineGlass from '../../assets/Images/wineGlass.png'


function ButtonIncrement(props) {
  
    return (
      <button  className="counter" style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      <div className="value">+</div>
      </button>
    )
 }
 function ButtonDecrement(props) {
   
   return (
     <button className="counter" style={{ marginLeft: '.5rem'}}  onClick={props.onClickFunc}>
      <div className="value">-</div>
     </button>
   )
 }
 function Display(props) {
   return (
     <label className="value"  id="counter" style={{ marginLeft: '.5rem'}}>{props.message}</label>
   )
 }



const CartProduct = () => {
    const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

    return(
        <div className="cartProduct">
<div id="first"> <img className="cartProductPicture" src={WineGlass} alt="img" /><div className="productName">Plaza Chronicles</div></div>
<div id="second">
<div className="productPrice">$15</div>
<div><ButtonIncrement onClickFunc={incrementCounter}/>
      <Display message={counter}/> 
      <ButtonDecrement onClickFunc={decrementCounter}/></div>
<div className="productPrice">$15</div>

</div>
<div><hr className="line"></hr></div>
</div>
    )
};

export default CartProduct