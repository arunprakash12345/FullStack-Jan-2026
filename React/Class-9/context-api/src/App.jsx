import React from "react";

import "./App.css";
import { FamilyContext } from "./Context/FamilyContext";
import Family from "./componentsContextAPI/FamilyC";
import FamilyC from "./componentsContextAPI/FamilyC";
function App() {
  const familyInfo = {
    familyName: "The Griffins",
    onlyForParents: () => {
      console.log("Info for Parents");
    },
    onlyForGrandChildren: () => {
      console.log("Info for GrandChildren");
    },
  };

  return (
    <>
      <FamilyContext.Provider value={familyInfo}>
        <FamilyC />
      </FamilyContext.Provider>
    </>
  );
}

export default App;
