import './App.css';
// import NavBar from '../src/Components/NavBar'
import NavBar from '../src/Components/fixedComponents/NavigationBar';
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home'
import Shop from '../src/pages/Shop'
import Footer from '../src/Components/fixedComponents/Footer';
import Product from '../src/Components/ShopComponents/Product';




function App() {
  return (
    <div>
     <NavBar/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {/* <Route path="/connect" component={Cafe} /> */}
          <Route path="/shop" component={Shop} />
        </Routes>
        <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
             <div>{<Product/>}</div> 
      <Footer/>
      
    </div>
  );
}

export default App;
