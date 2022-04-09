import React, { useState, useRef } from "react";
import "./CodeComponent.css";

export default function CodeComponent(props) {
  const ref_holder = useRef([]);
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
                let def_val = "css";
                console.log("def-val", def_val);
                if (event.target.checked === false) {
                  def_val = "html";
                }
                let temp = [...props.code];
                temp[index]["place_holder"] = def_val;
                props.setCode(temp);
                ref_holder.current[index].value = props.code[index][def_val];
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
          ref={(el) => (ref_holder.current[index] = el)}
          onChange={(event) => {}}
        ></textarea>
        <button
          className="Render"
          onClick={() => {
            let temp = [...props.code];
            temp[index][temp[index]["place_holder"]] =
              ref_holder.current[index].value;
            props.setCode(temp);
            {
              console.log(window.getSelection().toString());
            }
          }}
        >
          Render
        </button>
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
          props.setCode([
            ...props.code,
            { html: null, css: null, place_holder: "html" },
          ]);
        }}
      >
        Add section
      </button>
    </div>
  );
}
