import React from "react";
import GrandS from "./GrandSC";
import GrandD from "./GrandDC";
import GrandSC from "./GrandSC";
import GrandDC from "./GrandDC";

const ChildrenC = () => {
  return (
    <div className="children">
      <h2>Children</h2>
      <GrandSC />
      <GrandDC />
    </div>
  );
};

export default ChildrenC;
