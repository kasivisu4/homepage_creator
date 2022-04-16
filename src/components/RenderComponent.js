import React from "react";
import "./RenderComponent.css";

export default function RenderComponent(props) {
  console.log(props);
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
