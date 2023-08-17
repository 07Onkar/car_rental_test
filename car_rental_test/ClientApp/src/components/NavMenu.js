import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/Navbar/Car Rental.png"
import "./styles/globalStyles.css"
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



