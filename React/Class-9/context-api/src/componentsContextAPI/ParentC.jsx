import React, { useContext } from "react";
import Children from "./ChildrenC";
import { FamilyContext } from "../Context/FamilyContext";

const ParentC = () => {
  const info = useContext(FamilyContext);
  return (
    <div className="parent">
      <div>{`Parent ${info.onlyForParents()}`}</div>
      <Children />
    </div>
  );
};

export default ParentC;
