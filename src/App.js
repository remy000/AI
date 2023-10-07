import React from "react";
import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Feature,
  Header,
  Footer,
  Possibility,
  WhatGpt,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
