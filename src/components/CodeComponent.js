import React, { useState } from "react";
import "./CodeComponent.css";

/**
 * This function is responsible for the user home page html and CSS creation
 * @param {prop} props  2d array of the user homepage blue print and the index for the code update
 * @returns The code component
 */
export default function CodeComponent(props) {
  let [currState, setCurrState] = useState("html");

  /**
   * This function is used to create the code of html and css for the user home page
   * @param {integer} index Used for get specific code component
   * @returns TextArea CodeComponent
   */
  function set_text(index) {
    return (
      <div className="TextDiv">
        <select
          className="language_selection"
          onChange={(event) => {
            setCurrState(event.target.value);
            document.getElementsByClassName("setText")[0].value =
              props.code[index[0]][index[1]][event.target.value];
          }}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <textarea
          className="setText"
          onChange={(event) => {
            let text_update = [...props.code];
            text_update[index[0]][index[1]][currState] = event.target.value;
            props.setCode(text_update);
          }}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="CodeComponent">{set_text(props.index.split(","))}</div>
  );
}
