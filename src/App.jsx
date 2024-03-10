import "./App.css";
import React from "react";
import { Story } from "./Components/Story.jsx";
import { Explore } from "./Components/Explore.jsx";
import { Bakers } from "./Components/Bakers.jsx";
import { Footer } from "./Components/Footer.jsx";
import { Header } from "./Components/Header.jsx";
import { Banner } from "./Components/Banner.jsx";

function App() {
  return (
    <>
      <Header />
      <Story />
      <Banner always={'Always'} fresh={'FRESH'} imagenes={'image1'}/>
      <Explore />
      <Banner always={'Everything'} fresh={'TASTY'} imagenes={'image2'}/>
      <Bakers />
      <Footer />
    </>
  );
}

export default App;
