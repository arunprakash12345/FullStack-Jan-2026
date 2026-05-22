import React from "react";
import GrandS from "./GrandS";
import GrandD from "./GrandD";

const Children = ({ info }) => {
  return (
    <div className="children">
      <h2>Children</h2>
      <GrandS info={info} />
      <GrandD info={info} />
    </div>
  );
};

export default Children;
