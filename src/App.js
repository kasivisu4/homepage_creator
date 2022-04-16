import "./App.css";
import { useState } from "react";
import CreateBlueprint from "./components/CreateBlueprint";
import Templates from "./components/Templates";
import UpdateComponents from "./components/UpdateComponents";

function App() {
  let [userName, setUserName] = useState("root");
  let [customURLInput, setCustomURLInput] = useState("root_url");
  let [submit, setSubmit] = useState(false);
  let [noOfComponents, setNoOfComponents] = useState([
    [{ css: null, html: null, place_holder: "html" }],
  ]);

  function set_Form_details() {
    function handleKeyDown(event, setFunction) {
      if (event.keyCode === 13) {
        setFunction(event.target.value);
      }
    }

    return (
      <div className="userNameDiv">
        UserName :{" "}
        <input
          className="userNameInput"
          onKeyDown={(event) => {
            handleKeyDown(event, setUserName);
          }}
          placeholder={
            userName === "root" ? "  Enter Your User Name" : userName
          }
        ></input>
        Enter Custom URL :{" "}
        <input
          className="customURLInput"
          type="url"
          onKeyDown={(event) => {
            handleKeyDown(event, setCustomURLInput);
          }}
          placeholder={
            customURLInput === "root_url"
              ? "  Enter Suffix URL"
              : customURLInput
          }
        ></input>
      </div>
    );
  }

  function form() {
    return (
      <div className="Components">
        <CreateBlueprint
          noOfComponents={noOfComponents}
          setNoOfComponents={setNoOfComponents}
        ></CreateBlueprint>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="title">Create HomePage by custom HTML & CSS</div>
      {set_Form_details()}
      <div className="Header">
        {form()}
        {<Templates></Templates>}
      </div>
      <UpdateComponents
        noOfComponents={noOfComponents}
        setNoOfComponents={setNoOfComponents}
      ></UpdateComponents>
      <button
        type="submit"
        className="formSubmit"
        onClick={() => setSubmit(true)}
      >
        Let's Create!
      </button>
    </div>
  );
}

export default App;
