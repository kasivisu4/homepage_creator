import React, { useState, useRef } from "react";
import "./UpdateComponents.css";
import CodeComponent from "./CodeComponent";
import RenderComponent from "./RenderComponent";

export default function UpdateComponents(props) {
  console.log("UpdateComponents", props);
  let [selectedComponent, setSelectedComponent] = useState("0,0");
  function component_selection() {
    let components = [];
    props.noOfComponents.forEach((x, i) =>
      x.forEach((y, j) => components.push([i, j]))
    );
    console.log(components);
    return (
      <div className="select_component">
        Please select the component:
        <select
          className="Component_selection"
          id="Component_selection"
          onChange={(event) => {
            setSelectedComponent(event.target.value);
            let index = event.target.value.split(",");
            document.getElementsByClassName("setText")[0].value =
              props.noOfComponents[index[0]][index[1]][
                document.getElementsByClassName("language_selection")[0].value
              ];
          }}
        >
          {components.map((x, i) => (
            <option value={x.toString()}>{i + 1}</option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="UpdateComponents">
      {component_selection()}
      <div className="selectComponents">
        <CodeComponent
          code={props.noOfComponents}
          setCode={props.setNoOfComponents}
          index={selectedComponent}
        ></CodeComponent>
        <RenderComponent
          code={props.noOfComponents}
          setCode={props.setNoOfComponents}
          index={selectedComponent}
        ></RenderComponent>
      </div>
    </div>
  );
}
