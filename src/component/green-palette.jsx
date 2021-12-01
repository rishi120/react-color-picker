import React, { useContext } from "react";
import "./styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { greenColor } from "./data/data";
import { Data2 } from "./master";

const Greenpalette = () => {
  const { copy, handleGreenColor } = useContext(Data2);
  return (
    <div className="red-color-pallete-wrapper" id="green-color-pallete-wrapper">
      <h2>Green Palette</h2>
      <Row>
        {greenColor.map((getBgColor, i) => {
          return (
            <Col md="3" key={i}>
              <div
                className="redColor-wrapper"
                onClick={() => handleGreenColor(getBgColor.greenColorHexCode)}
              >
                <div
                  className="color-wrapper"
                  style={{
                    backgroundColor: getBgColor.greenColorHexCode,
                  }}
                ></div>
                {copy === getBgColor.greenColorHexCode ? <h5>Copied!</h5> : ""}
                <h1>{getBgColor.colorName}</h1>
                <p>
                  HEX <span>{getBgColor.greenColorHexCode}</span>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Greenpalette;
