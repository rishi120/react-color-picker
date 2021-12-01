import React, { useState, createContext } from "react";
import Maincomponent from "./main";

const Data = createContext();
const Data2 = createContext();

const Mastercomponent = () => {
  const [copy, setCopy] = useState(null);
  const handleColors = (colorHexCode) => {
    const copyCode = colorHexCode;
    const text = document.createElement("textarea");
    document.body.appendChild(text);
    text.value = copyCode;
    text.select();
    document.execCommand("copy");
    document.body.removeChild(text);
    setCopy(colorHexCode);
    localStorage.setItem("Copy", copy);
    const getCopiedItem = localStorage.getItem("Copy");
    if (getCopiedItem === "null" || getCopiedItem !== "null") {
      setTimeout(function () {
        setCopy(null);
      }, 3000);
    }
  };
  const handleBlueColor = (colorHexCode) => {
    handleColors(colorHexCode);
  };
  const handleGreenColor = (colorHexCode) => {
    handleColors(colorHexCode);
  };
  const values = {
    copy,
    setCopy,
    handleBlueColor,
  };
  const greenColorValues = {
    copy,
    setCopy,
    handleGreenColor,
  };
  return (
    <Data.Provider value={values}>
      <Data2.Provider value={greenColorValues}>
        <Maincomponent handleColors={handleColors} copy={copy} />
      </Data2.Provider>
    </Data.Provider>
  );
};
export default Mastercomponent;
export { Data };
export { Data2 };
