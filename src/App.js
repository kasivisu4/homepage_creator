import "./App.css";
import { useState, useEffect } from "react";
import CreateBlueprint from "./components/CreateBlueprint";
import CreatedPages from "./components/CreatedPages";
import UpdateComponents from "./components/UpdateComponents";
import { Link } from "react-router-dom";
import HomePageMinimongo from "./models/HomePageMinimongo";

/**
 * This function is the main entry point and is responsible for creating the homepage page and also used to navigate to users home page
 * @returns The Home Page Creator component
 */

function App() {
  let [userName, setUserName] = useState("root");
  let [customURLInput, setCustomURLInput] = useState("root_url");
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

  /**
   * This function is used to set the blue print to minimongo
   * @param {} page
   */
  async function setPage(page) {
    setNoOfComponents(page);
    await Home_Page_Minimongo.removePage({ url: customURLInput });
    await Home_Page_Minimongo.createPage({ url: customURLInput, page: page });

    let mongo_page = await Home_Page_Minimongo.getPage({
      url: customURLInput,
    });
  }

  /**
   * This function is used to create the form for the user to input his username and the custom url
   * @returns Form Components
   */
  function setFormDetails() {
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

  return (
    <div className="App">
      <div className="title">Create HomePage By REACT Custom HTML & CSS</div>
      {setFormDetails()}
      <div className="Header">
        <div className="Components">
          <CreateBlueprint
            noOfComponents={noOfComponents}
            setNoOfComponents={setPage}
          ></CreateBlueprint>
        </div>
      </div>
      <UpdateComponents
        noOfComponents={noOfComponents}
        setNoOfComponents={setPage}
      ></UpdateComponents>
      <button type="submit" className="formSubmit">
        <Link to={"/homepage_creator/user_home_page:" + customURLInput}>
          Generate
        </Link>
      </button>
      <div className="RefPage">
        <b>
          <u>Created Pages:</u>
        </b>
      </div>
      {<CreatedPages pages={getPages}></CreatedPages>}
    </div>
  );
}

export default App;
