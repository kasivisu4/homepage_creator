import React, { useState } from "react";
import "./CodeComponent.css";

export default function CodeComponent(props) {
  let [currState, setCurrState] = useState("html");

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
