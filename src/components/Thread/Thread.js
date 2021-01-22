import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "./styles.css";
const Thread = ({ progress }) => {
  return (
    <div className="thread-container">
      <ul class="list-group vertical-steps">
        <li class={`list-group-item ${progress > 0 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            First step. <br /> <br />{" "}
          </span>
        </li>
        <li class={`list-group-item ${progress > 1 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            Second step. <br /> <br />{" "}
          </span>
        </li>
        <li class={`list-group-item ${progress > 2 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            Third step. <br /> <br />{" "}
          </span>
        </li>
        <li class={`list-group-item ${progress > 3 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            Fourth step. <br /> <br />{" "}
          </span>
        </li>
        <li class={`list-group-item ${progress > 4 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            Fifth step. <br /> <br />{" "}
          </span>
        </li>
        <li class={`list-group-item ${progress > 5 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            Sixth step. <br /> <br />{" "}
          </span>
        </li>
        <li class={`list-group-item ${progress > 6 ? "completed" : null}`}>
          <span class={"list-item-text"}>
            Seventh step. <br /> <br />{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};
export default Thread;
