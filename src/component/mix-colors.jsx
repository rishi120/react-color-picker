import React, { useContext } from "react";
import "./styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { mixColors } from "./data/data";
import { Data4 } from "./master";

const Mixcolorpalette = () => {
  const { copy, handleMixColor } = useContext(Data4);
  return (
    <div className="red-color-pallete-wrapper" id="mix-color-pallete-wrapper">
      <h2>Mix Color Palette</h2>
      <Row>
        {mixColors.map((getBgColor, i) => {
          return (
            <Col md="3" key={i}>
              <div
                className="redColor-wrapper"
                onClick={() => handleMixColor(getBgColor.mixColorsHexCode)}
              >
                <div
                  className="color-wrapper"
                  style={{
                    backgroundColor: getBgColor.mixColorsHexCode,
                  }}
                ></div>
                {copy === getBgColor.mixColorsHexCode ? <h5>Copied!</h5> : ""}
                <h1>{getBgColor.colorName}</h1>
                <p>
                  HEX <span>{getBgColor.mixColorsHexCode}</span>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Mixcolorpalette;
