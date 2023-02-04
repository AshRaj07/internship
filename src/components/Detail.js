import React from "react";
import "./Deatil.css";
const Detail = ({ title, body }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Detail;
