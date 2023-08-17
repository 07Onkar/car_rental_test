import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/pages/Layout';
import './custom.css';
import { NavMenu } from './components/NavMenu';
import BookCar from './components/BookCar';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
      <NavMenu/>
      <BookCar/>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout> 
    );
  }
}
