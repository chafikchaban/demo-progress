import React, { useState } from "react";
import { Button } from "reactstrap";
import PieChart from "../PieChart/PieChart";
import Thread from "../Thread/Thread";
import "./styles.css";

const Card = () => {
  const [progress, setProgress] = useState(0);
  const [toggle, setToggle] = useState(false);

  const step = () => {
    setProgress(progress + 1);
  };

  const toggleOpen = () => {
    setToggle(!toggle);
  };

  return (
    <div className="custom-column-container">
      {!toggle ? (
        <PieChart percentage={progress} onClick={() => step()} />
      ) : (
        <Thread progress={progress} />
      )}
      <Button
        color="primary"
        className={"details-button"}
        onClick={() => {
          toggleOpen();
        }}
      >
        {!toggle ? "Details" : "back to chart maybe ?"}
      </Button>
    </div>
  );
};
export default Card;
