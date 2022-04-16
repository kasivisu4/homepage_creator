import "./App.css";
import { useState, useEffect } from "react";
import CreateBlueprint from "./components/CreateBlueprint";
import RefPages from "./components/RefPages";
import UpdateComponents from "./components/UpdateComponents";
import { Link } from "react-router-dom";
import HomePageMinimongo from "./models/HomePageMinimongo";

function App() {
  let [userName, setUserName] = useState("root");
  let [customURLInput, setCustomURLInput] = useState("root_url");
  let [submit, setSubmit] = useState(false);
  let [noOfComponents, setNoOfComponents] = useState([
    [{ css: null, html: null, place_holder: "html" }],
  ]);
  let [getPages, setAllPages] = useState();
  let Home_Page_Minimongo = new HomePageMinimongo();

  useEffect(() => {
    async function getPage() {
      let components_from_mongo = await Home_Page_Minimongo.getPage({});
      setAllPages(components_from_mongo);
    }
    getPage();
  }, []);

  async function setPage(page) {
    await Home_Page_Minimongo.removePage({ url: customURLInput });
    await Home_Page_Minimongo.createPage({ url: customURLInput, page: page });
    let mongo_page = await Home_Page_Minimongo.getPage({
      url: customURLInput,
    });
    setNoOfComponents(mongo_page[0]["page"]);
  }

  function set_Form_details() {
    return (
      <div className="userNameDiv">
        UserName :{" "}
        <input
          className="userNameInput"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          placeholder={
            userName === "root" ? "  Enter Your User Name" : userName
          }
        ></input>
        Enter Custom URL :{" "}
        <input
          className="customURLInput"
          type="url"
          onChange={(event) => {
            setCustomURLInput(event.target.value);
          }}
          placeholder={
            customURLInput === "root_url"
              ? "  Enter Suffix URL"
              : userName + "_"
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
          setNoOfComponents={setPage}
        ></CreateBlueprint>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="title">Create HomePage By REACT Custom HTML & CSS</div>
      {set_Form_details()}
      <div className="Header">{form()}</div>
      <UpdateComponents
        noOfComponents={noOfComponents}
        setNoOfComponents={setPage}
      ></UpdateComponents>
      <button
        type="submit"
        className="formSubmit"
        onClick={() => setSubmit(true)}
      >
        <Link to={"/homepage_creator/user_home_page:" + customURLInput}>
          Let's Create!
        </Link>
      </button>
      <div className="RefPage">
        <b>
          <u>Ref Pages:</u>
        </b>
      </div>
      {<RefPages pages={getPages}></RefPages>}
    </div>
  );
}

export default App;
