import React, { Component } from 'react';

import { NavMenu } from '../NavMenu';
import { Home } from '../Home';
import BookCar from '../BookCar';
import ScrollTop from '../ScrollTop';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Home />
        <BookCar/>
        <ScrollTop/>
      </div>
    );
  }
}
