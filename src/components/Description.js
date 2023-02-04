import React from "react";
import "./Description.css";
const Description = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="desc">
      <div className="des">
        <h3>Description</h3>
        <p>
          Our company {company.name} provide service of {company.catchPhrase}.
          We are planning to {company.bs}.
        </p>
      </div>
      <div className="seg">
        <div>
          <div>
            <h3>Contact Person</h3>
            <p>{name}</p>
          </div>
          <div>
            <h3>Username</h3>
            <p>{username}</p>
          </div>
          <div>
            <h3>Emails</h3>
            <p>{email}</p>
          </div>
          <div>
            <h3>Phones</h3>
            <p>{phone}</p>
          </div>
        </div>
        <div className="add">
          <div>
            <h3>Address</h3>
            <p>{address.suite + " " + address.street + " " + address.city}</p>
          </div>
          <div>
            <h3>City</h3>
            <p>{address.city}</p>
          </div>
          <div>
            <h3>Zip code</h3>
            <p>{address.zipcode}</p>
          </div>
          <div>
            <h3>Website</h3>
            <p>{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
