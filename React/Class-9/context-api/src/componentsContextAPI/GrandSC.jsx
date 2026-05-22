import React, { useContext } from "react";
import { FamilyContext } from "../Context/FamilyContext";

const GrandSC = () => {
  const info = useContext(FamilyContext);
  return <div className="gson">{`GranS ${info.onlyForGrandChildren}`}</div>;
};

export default GrandSC;
