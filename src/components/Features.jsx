import React from "react";
import "../styles/features.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Features = () => {
  const featuresData = [
    {
      image:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/user_view.png",
      title: "View User",
      description: "You can view the details of Users Involved.",
    },
    {
      image:
        "https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/users4_add.png",
      title: "Add Users",
      description: "You can add new users to the list.",
    },
    {
      image:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/user_edit.png",
      title: "Edit User",
      description: "You can edit the details of Users Involved.",
    },
    {
      image:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/user_delete.png",
      title: "Delete User",
      description: "You can delete the details of Users Involved.",
    },
  ];
  return (
    <div className="featuresCard">
      {featuresData.map((item) => {
        return (
          <div className="featuresDetails">
            <img src={item.image} alt="images" />
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            {item.title === "Add Users" ? (
              <Button
                variant="contained"
                style={{ margin: "5%", backgroundColor: "#4a148c" }}
                component={Link}
                to={`/addusers`}
              >
                Get Started
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ margin: "5%", backgroundColor: "#4a148c" }}
                component={Link}
                to={`/users`}
              >
                Get Started
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Features;
