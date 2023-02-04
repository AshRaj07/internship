import React, { useState } from "react";
import Description from "./Description";
import Detail from "./Detail";
import "./Info.css";
const Info = ({ name, username, email, address, phone, website, company }) => {
  const [hide, sethide] = useState(false);

  return (
    <div className="card">
      <div className="info">
        <p>{company.name}t</p>
        <Detail title={"CONTACT"} body={name} />
        <Detail title={"USERNAME"} body={username} />
        <Detail title={"CITY"} body={address.city} />
        <button onClick={() => sethide(!hide)}>
          {!hide ? "View" : "Hide"} Details
        </button>
      </div>
      {hide && (
        <Description
          name={name}
          username={username}
          email={email}
          phone={phone}
          website={website}
          address={address}
          company={company}
        />
      )}
    </div>
  );
};

export default Info;
