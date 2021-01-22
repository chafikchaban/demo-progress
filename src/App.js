import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  body {
    font-family: 'Roboto Mono' !important;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />

      <Jumbotron className="p-0 pb-5 m-0 min-vh-100">
        <Navbar expand="md">
          <NavbarBrand className="mr-auto">DEMO PROJECT</NavbarBrand>
        </Navbar>

        <HomePage />
      </Jumbotron>
    </div>
  );
}

export default App;
