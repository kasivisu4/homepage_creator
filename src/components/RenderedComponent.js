import React from "react";
import "./RenderedComponent.css";

export default function RenderedComponent(props) {
  return (
    <div className="RenderedComponent">
      {props.code.map((d) => {
        return (
          <div
            dangerouslySetInnerHTML={{ __html: d["html"] }}
            style={eval("({" + (d["css"] != null ? d["css"] : "") + "})")}
          />
        );
      })}
    </div>
  );
}
