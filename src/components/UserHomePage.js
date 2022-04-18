import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserHomePage.css";
import HomePageMinimongo from "../models/HomePageMinimongo";

/**
 *  This Function Renders the User HomePage based on the BluePrint Created from the home page
 * @returns Renders the User Home Page
 */
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

      setComponents(components_from_mongo[0]["page"]);
    }
    getPage();
  }, []);

  return (
    <div className="UserHomePage">
      <div className="Render">
        {components?.map((row, row_index) => {
          let length = row.length;
          let grid_template = "auto ".repeat(length);
          return (
            <div
              className="Row"
              style={{
                display: "grid",
                gridTemplateColumns: grid_template,
              }}
              key={"row" + row_index}
            >
              {row.map((column, column_index) => {
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: column["html"],
                    }}
                    style={eval(
                      "({" + (column["css"] || "fontSize : 20") + "})"
                    )}
                    className="Column"
                    key={"column" + column_index}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
