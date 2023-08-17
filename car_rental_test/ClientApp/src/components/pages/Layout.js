import React, { Component } from 'react';
import { Home } from '../Home';
import BookCar from '../BookCar';
import ScrollTop from '../ScrollTop';
import { NavMenu } from '../NavMenu';
import { Plantrip } from '../Plantrip';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu/>
        <Home />
            <BookCar />
        <Plantrip/>
        <ScrollTop/>
      </div>
    );
  }
}
