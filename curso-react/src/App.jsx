import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import BannerAnuncios from "./components/BannerAnuncios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <BannerAnuncios greeting={"free shipping this week 🕶 cuotas sin interés"} />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/category"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
