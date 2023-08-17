import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import { NavMenu } from "./components/NavMenu";
import { Home } from "./pages/Home";
import {About} from "./pages/About"


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <NavMenu/>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        </>
    );
  }
}
