import React from "react";
import "./RenderComponent.css";

/**
 * This function helps to render the 2d component created by the user
 * @param {props} props The 2d blueprint created by the user.
 * @returns Rendered component
 */
export default function RenderComponent(props) {
  function components(index) {
    try {
      return (
        <div
          className="Rendered"
          dangerouslySetInnerHTML={{
            __html: props.code[index[0]][index[1]]["html"],
          }}
          style={eval(
            "({" +
              (props.code[index[0]][index[1]]["css"] || "fontSize:20") +
              "})"
          )}
        />
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="RenderComponentDiv">
      {components(props.index.split(","))}
    </div>
  );
}
