import React from "react";
import { specials } from "../../../data";
import SpecialButtons from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className="specials-div">
      {specials.map(specials => (
        <SpecialButtons key={specials} specials={specials} />
      ))}
    </div>
  );
};

export default Specials;
