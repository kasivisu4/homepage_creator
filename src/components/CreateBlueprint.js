import React from "react";
import "./CreateBlueprint.css";

/**
 *creates the blueprint
 * @param {*} props
 * @returns returns the blueprint component
 */
export default function CreateBlueprint(props) {
  let counter = 0;
  return (
    <div className="CreateBlueprint">
      <div className="BluePrintTitle">Create your Page BluePrint</div>
      {props.noOfComponents.map((x, x_index) => {
        return (
          <div className="xAxis" key={"xAxis" + x_index}>
            {x.map((y, y_index) => {
              return (
                <label className="columnLabel" key={"columnLabel" + y_index}>
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
                temp[x_index].push({
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
