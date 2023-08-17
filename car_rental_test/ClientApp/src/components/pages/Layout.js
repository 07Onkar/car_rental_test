import React, { Component } from 'react';
import { Home } from '../Home';
import BookCar from '../BookCar';
import ScrollTop from '../ScrollTop';
import { NavMenu } from '../NavMenu';
import { PlanTrip } from '../PlanTrip';
import { PickCar } from '../PickCar';
import {Banner} from "../Banner";
import { Testimonials } from '../Testimonials';
import { Faq } from '../Faq';
import { Download } from '../Download';
import {Footer} from "../Footer"
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu/>
        <Home />
            <BookCar />
            <PlanTrip />
        <PickCar/>
        <Banner/>
        {/* Add the ChooseUs Folder */}
        <Testimonials/>
        <Faq/>
        <Download/>
        <Footer/>
        <ScrollTop/>
      </div>
    );
  }
}
