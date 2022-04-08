import "./App.css";
import CreateSection from "./components/CreateSection";

function App() {
  return (
    <div className="App">
      <div className="Form">
        <div className="title">Create HomePage by custom HTML & CSS</div>
        <div className="userNameLabel">UserName</div>
      </div>
      <CreateSection></CreateSection>
    </div>
  );
}

export default App;
