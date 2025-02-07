import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/products";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
