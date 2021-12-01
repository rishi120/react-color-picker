import React, { useState, createContext } from "react";
import Maincomponent from "./main";

const Data = createContext();
const Data2 = createContext();
const Data3 = createContext();
const Data4 = createContext();

const Mastercomponent = () => {
  const [copy, setCopy] = useState(null);
  const [active, setActive] = useState(false);
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
  const handleYellowColor = (colorHexCode) => {
    handleColors(colorHexCode);
  };
  const handleMixColor = (colorHexCode) => {
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
  const yellowColorValues = {
    copy,
    setCopy,
    handleYellowColor,
  };
  const mixColorValues = {
    copy,
    setCopy,
    handleMixColor,
  };
  const handleColorPalette = (i) => {
    const section1 = document.getElementById("red-color-pallete-wrapper");
    const section2 = document.getElementById("blue-color-pallete-wrapper");
    const section3 = document.getElementById("green-color-pallete-wrapper");
    const section4 = document.getElementById("yellow-color-pallete-wrapper");
    const section5 = document.getElementById("mix-color-pallete-wrapper");
    if (i === 0) {
      section1.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (i === 1) {
      section2.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (i === 2) {
      section3.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (i === 3) {
      section4.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (i === 4) {
      section5.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <Data.Provider value={values}>
      <Data2.Provider value={greenColorValues}>
        <Data3.Provider value={yellowColorValues}>
          <Data4.Provider value={mixColorValues}>
            <Maincomponent
              handleColors={handleColors}
              copy={copy}
              handleColorPalette={handleColorPalette}
              active={active}
            />
          </Data4.Provider>
        </Data3.Provider>
      </Data2.Provider>
    </Data.Provider>
  );
};
export default Mastercomponent;
export { Data };
export { Data2 };
export { Data3 };
export { Data4 };
