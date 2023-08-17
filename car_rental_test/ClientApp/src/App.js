import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import { NavMenu } from "./components/NavMenu";
import { Home } from "./pages/Home";
import {About} from "./pages/About"
import Models from "./pages/Models";
import Testimonials from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import { SignIn } from "./pages/SignIn";


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <NavMenu/>
        <Routes>
          
          <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/models" element={<Models />} />
                <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        </>
    );
  }
}
