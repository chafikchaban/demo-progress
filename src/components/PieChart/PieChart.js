import React from "react";
import { Button } from "reactstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles.css";
const PieChart = ({ percentage, onClick }) => {
  return (
    <div className="pie-container">
      <Button
        style={{ position: "relative" }}
        className={"pie-touchable"}
        type="submit"
        color="transparent"
        onClick={() => onClick()}
      >
        <CircularProgressbar
          value={percentage}
          strokeWidth={50}
          maxValue={7}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: `#CCB8F3`,
            trailColor: "#ECEDE7",
          })}
        />
        <div style={{ position: "absolute", top: "-5%", left: "49%" }}>7</div>
        <div style={{ position: "absolute", top: "15%", left: "88%" }}>1</div>
        <div style={{ position: "absolute", top: "58%", left: "97%" }}>2</div>
        <div style={{ position: "absolute", top: "93%", left: "71%" }}>3</div>
        <div style={{ position: "absolute", top: "93%", left: "27%" }}>4</div>
        <div style={{ position: "absolute", top: "58%", left: "0%" }}>5</div>
        <div style={{ position: "absolute", top: "15%", left: "9%" }}>6</div>
      </Button>
    </div>
  );
};
export default PieChart;
