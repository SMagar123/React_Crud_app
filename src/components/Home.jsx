import React from "react";
import "../styles/home.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Features from "./Features";
const Logo = () => {
  return (
    <div className="homeWrapper">
      <div className="bodyWrapper">
        <div className="bodyText">
          <h2>Practice Makes a Man Perfect</h2>
          <span>Play with user data for crud operations...</span>
        </div>
        <div className="bodyImage">
          <img
            src="https://img.freepik.com/premium-vector/budget-data…siness-analysis-illustration_159757-43.jpg?w=2000"
            alt="Body_image"
            style={{
              width: "100%",
              height: "60vh",
              borderRadius: "25px",
            }}
          />
        </div>
      </div>
      <div className="bodyContent">
        <div className="bodyTitle">
          <h3>Why CRUD Operations?</h3>
        </div>
        <div className="bodycontent">
          <p>
            CRUD operations refer to the basic functionalities of a database
            management system, where developers use them to manipulate data
            stored in a database.CRUD operations are commonly used in web
            applications, where users can interact with a database through a
            user interface, such as a web form or an API, to create, read,
            update, or delete data.
            <span>
              <FormatQuoteIcon />
            </span>
          </p>
        </div>
      </div>
      <div className="features">
        <div className="featuresTitle">
          <h3>We Provide Following Features</h3>
          <span>Explore the features by clicking get started...</span>
        </div>
        <div className="featuresBody">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Logo;
