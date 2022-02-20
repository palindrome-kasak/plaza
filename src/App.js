import "./App.css";
// import NavBar from '../src/Components/NavBar'
import NavBar from "../src/Components/fixedComponents/NavigationBar";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import Footer from "../src/Components/fixedComponents/Footer";
import Product from "../src/Components/ShopComponents/Product";
import ProductDetails from '../src/pages/ProductDetails';
import { connect } from "react-redux";
import Cart from "../src/pages/MyCartPage";
import MyAccount from "./pages/MyProfilePages/MyAccount";
function App({current}) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails/:id" element={!current ? <Navigate to="/" /> : <ProductDetails/>} />
        <Route path="/MyAccount" element={<MyAccount />} />
      </Routes>
     
      
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);

