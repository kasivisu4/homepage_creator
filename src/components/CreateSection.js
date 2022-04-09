import React, { useState } from "react";
import RenderedComponent from "./RenderedComponent";
import CodeComponent from "./CodeComponent";
import "./CreateSection.css";

export default function CreateSection() {
  let [code, setCode] = useState([
    { html: null, css: null, place_holder: "html" },
  ]);
  return (
    <div className="CreateSection">
      {console.log(code)}
      <CodeComponent code={code} setCode={setCode}></CodeComponent>
      <RenderedComponent code={code} setCode={setCode}></RenderedComponent>
    </div>
  );
}
