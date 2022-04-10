import "./App.css";
import { useState } from "react";
import CreateBlueprint from "./components/CreateBlueprint";

function App() {
  let [userName, setUserName] = useState("root");

  function set_user_name() {
    function handleKeyDown(event) {
      if (event.keyCode === 13) {
        setUserName(event.target.value);
      }
    }

    return (
      <div className="userNameDiv">
        UserName :{" "}
        <input
          className="userNameInput"
          onKeyDown={handleKeyDown}
          placeholder={userName === "root" ? "Enter after you fill" : userName}
        ></input>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="Form">
        <div className="title">Create HomePage by custom HTML & CSS</div>
      </div>
      <CreateBlueprint></CreateBlueprint>
      {set_user_name()}
    </div>
  );
}

export default App;
