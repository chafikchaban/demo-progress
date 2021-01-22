import React from "react";
import { Jumbotron, Row } from "reactstrap";
import Card from "../../components/Card/Card";
import "./styles.css";

const HomePage = () => {
  return (
    <Jumbotron fluid className="p-3 m-0 jumbo-container">
      <h3 className="display-6 mb-5">Demo Project</h3>
      <div className="container-row">
        <Card />
        <Card />
        <Card />
      </div>
    </Jumbotron>
  );
};

export default HomePage;
