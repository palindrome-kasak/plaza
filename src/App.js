import "./App.css";
// import NavBar from '../src/Components/NavBar'
import NavBar from "../src/Components/fixedComponents/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Shop from "../src/pages/Shop";
import Footer from "../src/Components/fixedComponents/Footer";
import Product from "../src/Components/ShopComponents/Product";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <div>{<Product />}</div>
      <Footer />
    </div>
  );
}

export default App;
