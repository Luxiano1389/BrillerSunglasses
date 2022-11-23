import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import VideoBanner from "./components/VideoBanner";
import ProductosBanner from "./components/ProductosBanner";
import TopSeller from "./components/TopSeller";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <div>
      <ItemListContainer greeting={"Free shipping this week 🕶 cuotas sin interés"} />
      <Navbar />
      <VideoBanner />
      <ProductosBanner />
      <TopSeller />
      <Footer />
    </div>
  );
}

export default App;
