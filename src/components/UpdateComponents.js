import React, { useState, useRef } from "react";
import "./UpdateComponents.css";
import CodeComponent from "./CodeComponent";
import RenderComponent from "./RenderComponent";

/**
 * The User can update his blue print
 * @param {} props Components,setComponents The 2d array representation for the components
 * @returns Update the components
 */
function UpdateComponents(props) {
  let [selectedComponent, setSelectedComponent] = useState("0,0");

  /**
   * The user can select a component from the dropdown
   * @returns Component selection Dropdown
   */
  function componentSelection() {
    let components = [];
    props.noOfComponents.forEach((x, i) =>
      x.forEach((y, j) => components.push([i, j]))
    );
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
            <option value={x.toString()} key={"option" + i}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="UpdateComponents">
      {componentSelection()}
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

export default UpdateComponents;
