import React from "react";
import Parent from "./Parent";

const Family = ({ info }) => {
  return (
    <div className="family">
      <div>Family</div>
      <h1>{`FamilyName ${info.familyName}`}</h1>
      <Parent info={info} />
    </div>
  );
};

export default Family;
