import React, { useContext } from "react";
import Parent from "./ParentC";
import { FamilyContext } from "../Context/FamilyContext";
import ParentC from "./ParentC";

const FamilyC = () => {
  const info = useContext(FamilyContext);
  console.log(info);
  return (
    <div className="family">
      <div>Family</div>
      <h1>{`FamilyName ${info.familyName}`}</h1>
      <ParentC />
    </div>
  );
};

export default FamilyC;
