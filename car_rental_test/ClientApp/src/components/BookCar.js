import React, { Component } from "react";
import carAudi from "../images/cars-big/audi.png";
import carMc from "../images/cars-big/McLerean.jpg";
import carFerrari from "../images/cars-big/Ferrari.jpg";
import carCamaro from "../images/cars-big/camaro.jpg";
import carAven from "../images/cars-big/aventador.jpg";
import carPorsche from "../images/cars-big/panamera-turbo.jpg";
import "./styles/globalStyles.css"
class BookCar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modal: false,
      carType: "",
      pickUp: "",
      dropOff: "",
      pickTime: "",
      dropTime: "",
      carImg: "",
      name: "",
      lastName: "",
      phone: "",
      age: "",
      email: "",
      address: "",
      city: "",
      zip: ""
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handleAge = (e) => {
    this.setState({ age: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleAddress = (e) => {
    this.setState({ address: e.target.value });
  };

  handleCity = (e) => {
    this.setState({ city: e.target.value });
  };

  handleZip = (e) => {
    this.setState({ zip: e.target.value });
  };

  openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      this.state.pickUp === "" ||
      this.state.dropOff === "" ||
      this.state.pickTime === "" ||
      this.state.dropTime === "" ||
      this.state.carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      this.setState((prevState) => ({
        modal: !prevState.modal,
      }));
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  confirmBooking = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  handleCar = (e) => {
    this.setState({
      carType: e.target.value,
      carImg: e.target.value,
    });
  };

  handlePick = (e) => {
    this.setState({ pickUp: e.target.value });
  };

  handleDrop = (e) => {
    this.setState({ dropOff: e.target.value });
  };

  handlePickTime = (e) => {
    this.setState({ pickTime: e.target.value });
  };

  handleDropTime = (e) => {
    this.setState({ dropTime: e.target.value });
  };

  hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  render() {
    const { modal, carType, pickUp, dropOff, pickTime, dropTime, carImg, name, lastName, phone, age, email, address, city, zip } = this.state;

    let imgUrl;
    switch (carImg) {
      case "Audi Q7":
        imgUrl = carAudi;
        break;
      case "Chevrolet Camaro":
        imgUrl = carCamaro;
        break;
      case "McLerean P7":
        imgUrl = carMc;
        break;
      case "Ferrari LaFerrari":
        imgUrl = carFerrari;
        break;
      case "Lamborghini Aventador":
        imgUrl = carAven;
        break;
      case "Porsche Panamera turbo":
        imgUrl = carPorsche;
        break;
      default:
        imgUrl = "";
    }

    return (
      <>
        {/* Your JSX content here */}
      </>
    );
  }
}

export default BookCar;
