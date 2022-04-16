import React, { useState } from "react";
import "./CreateBlueprint.css";
export default function CreateBlueprint(props) {
  let counter = 0;

  return (
    <div className="CreateBlueprint">
      <div className="BluePrintTitle">Create your Page BluePrint</div>
      {props.noOfComponents.map((x, index) => {
        return (
          <div className="xAxis">
            {x.map((y) => {
              return (
                <label className="columnLabel">
                  {(function () {
                    if (counter < 9) {
                      counter += 1;
                      return "0" + counter.toString();
                    } else {
                      counter += 1;
                      return counter;
                    }
                  })()}
                </label>
              );
            })}
            <button
              className="columnButton"
              onClick={() => {
                let temp = [...props.noOfComponents];
                temp[index].push({
                  css: null,
                  html: null,
                  place_holder: "html",
                });
                props.setNoOfComponents(temp);
              }}
              disabled={x.length > 4}
            >
              {"Add"}
            </button>
          </div>
        );
      })}

      <button
        className="add_components"
        onClick={() => {
          props.setNoOfComponents([
            ...props.noOfComponents,
            [{ css: null, html: null, place_holder: "html" }],
          ]);
        }}
      >
        Add Div
      </button>
    </div>
  );
}
