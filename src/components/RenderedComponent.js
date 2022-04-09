import React from "react";
import "./RenderedComponent.css";

export default function RenderedComponent(props) {
  function components() {
    try {
      return props.code.map((d) => {
        console.log(d["css"]);
        return (
          <div
            dangerouslySetInnerHTML={{ __html: d["html"] }}
            style={eval("({" + (d["css"] != null ? d["css"] : "") + "})")}
          />
        );
      });
    } catch (err) {
      console.log(err);
    }
  }

  return <div className="RenderedComponent">{components()}</div>;
}
