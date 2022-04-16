import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserHomePage.css";
import HomePageMinimongo from "../models/HomePageMinimongo";

export default function UserHomePage() {
  let custom_url = useParams().id;
  custom_url = custom_url.split(":")[1];
  let Home_Page_Minimongo = new HomePageMinimongo();
  let [components, setComponents] = useState();

  useEffect(() => {
    async function getPage() {
      let components_from_mongo = await Home_Page_Minimongo.getPage({
        url: custom_url,
      });
      setComponents(await components_from_mongo[0]["page"]);
    }
    getPage();
  }, []);

  function render() {
    return (
      <div className="Render">
        {console.log(components)}
        {components?.map((row) => {
          let length = row.length;
          let grid_template = "auto ".repeat(length);
          return (
            <div
              className="Row"
              style={{
                display: "grid",
                gridTemplateColumns: grid_template,
              }}
            >
              {row.map((column) => {
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: column["html"],
                    }}
                    style={eval(
                      "({" + (column["css"] || "fontSize : 20") + "})"
                    )}
                    className="Column"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }

  return <div className="UserHomePage">{render()}</div>;
}
