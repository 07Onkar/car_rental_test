import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/Navbar/Car Rental.png"
import "./NavMenu.css"
export class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav: false,
      scrollPosition: 0,
      isScrolled: false,
    };
  }

  componentDidMount() {
    const handleScroll = () => {
      this.setState({ scrollPosition: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }

  openNav = () => {
    this.setState(prevState => ({
      nav: !prevState.nav,
    }));
  };

  handleScroll = () => {
    const scrolled = window.scrollY > 0;
    this.setState({
      isScrolled: scrolled,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { nav, scrollPosition, isScrolled } = this.state;
    const navbarClass = scrollPosition > 0 ? 'navbar navbar-blur' : 'navbar';

    return (
      <>
       <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar_close">
            <FaTimes />
          </div>
          <ul className="mobile-navbar_links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/sign-in">
                Sign in
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* For Desktops */}

        <div className={navbarClass}>
          <div className="navbar_img">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <img  className="navbar-logo" src={Logo}  alt="logo" />
            </Link>
          </div>
          <ul className="navbar_links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="testi-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar_buttons">
            <Link className="navbar_buttons_sign-in" to="/sign-in">
              Sign in
            </Link>
            <Link className="navbar_buttons_register" to="/register">
              Register
            </Link>
          </div>

          {/* for Mobile */}
          
        </div>
      </>
    );
  }
}



