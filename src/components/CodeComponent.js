import React, { useState } from "react";
import "./CodeComponent.css";

export default function CodeComponent(props) {
  function section(index) {
    return (
      <div>
        <div className="container">
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="checkbox"
              name={"label"}
              id={"label"}
              onChange={(event) => {
                let def_val = "html";
                if (event.target.checked === false) {
                  def_val = "css";
                }
                let temp = [...props.code];
                temp[index]["place_holder"] = def_val;
                props.setCode(temp);
              }}
            />
            <label className="label" htmlFor={"label"}>
              <span
                className="inner"
                onClick={(event) => {
                  console.log(event.target);
                }}
              />
              <span className="switch" />
            </label>
          </div>
        </div>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="100"
          placeholder={props.code[index]["place_holder"]}
          onChange={(event) => {
            let temp = [...props.code];
            temp[index][temp[index]["place_holder"]] = event.target.value;
            props.setCode(temp);
          }}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="CodeComponent">
      CodeComponent
      {props.code.map((data, index) => {
        return section(index);
      })}
      <button
        type="button"
        onClick={() => {
          props.setCode([...props.code, { html: null, css: null }]);
        }}
      >
        Add section
      </button>
    </div>
  );
}
