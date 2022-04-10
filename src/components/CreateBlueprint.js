import React, { useState } from "react";
import "./CreateBlueprint.css";
export default function CreateBlueprint() {
  let [noOfComponents, setNoOfComponents] = useState([[1]]);
  let counter = 0;

  return (
    <div className="CreateBlueprint">
      {console.log(noOfComponents)}
      {noOfComponents.map((x, index) => {
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
                let temp = [...noOfComponents];
                temp[index].push(1);
                setNoOfComponents(temp);
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
          setNoOfComponents([...noOfComponents, [1]]);
        }}
      >
        Add Div
      </button>
    </div>
  );
}
