import React from "react";
import "./RefPages.css";
import { Link } from "react-router-dom";

export default function RefPages(props) {
  let urlElements = window.location.href;
  console.log("Temp", props);
  console.log("path", urlElements);
  return (
    <div className="RefPages">
      {props.pages?.map((page) => {
        return (
          <div className="iframeDiv">
            <iframe
              className="iframe"
              src={urlElements + "/user_home_page:" + page.url}
              width="700px"
              height="300px"
            ></iframe>
            <div className="RefLink">
              <Link to={"/homepage_creator/user_home_page:" + page.url}>
                Link to : {page.url}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
