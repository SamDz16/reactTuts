import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {

      isNavOpen: false,
      isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("username : " + this.username.value + " Password : " + this.password.value + " Remember : " + this.remember.checked);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30px" width="41"
                alt="Ristorante Con Fusion" />
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>

              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home ga-lg" ></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info ga-lg" ></span> About Us
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list ga-lg" ></span> Menu
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card ga-lg" ></span> Contacts Us
                </NavLink>
                </NavItem>
              </Nav>

              <Nav className="ml-auto">
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorant Con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlfor="username">Username</Label>
                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlfor="password">Password</Label>
                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} /> remeber me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" className="bg-primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;