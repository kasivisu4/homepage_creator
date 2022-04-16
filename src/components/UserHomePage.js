import React from "react";
import { useLocation } from "react-router-dom";
import "./UserHomePage.css";

export default function UserHomePage() {
  let noOfComponents = useLocation().state.noOfComponents;
  console.log(noOfComponents);

  function render() {
    return (
      <div className="Render">
        {noOfComponents.map((row) => {
          let length = row.length;
          let grid_template = "auto ".repeat(length);
          return (
            <div
              className="Row"
              style={{
                display: "grid",
                gridTemplateColumns: grid_template,
              }}
            >
              {row.map((column) => {
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: column["html"],
                    }}
                    style={eval(
                      "({" + (column["css"] || "fontSize : 20") + "})"
                    )}
                    className="Column"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  return <div className="UserHomePage">{render()}</div>;
}
