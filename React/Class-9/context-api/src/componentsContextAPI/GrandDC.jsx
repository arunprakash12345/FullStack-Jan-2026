import React, { useContext } from "react";
import { FamilyContext } from "../Context/FamilyContext";

const GrandDC = () => {
  const info = useContext(FamilyContext);
  return (
    <div className="gdaughter">{`GranD ${info.onlyForGrandChildren}`}</div>
  );
};

export default GrandDC;
