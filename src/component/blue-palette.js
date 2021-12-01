import React, { useContext } from "react";
import "./styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { blueColor } from "./data/data";
import { Data } from "./master";

const Bluepalette = () => {
  const { copy, handleBlueColor } = useContext(Data);
  return (
    <div className="red-color-pallete-wrapper">
      <h2>Blue Palette</h2>
      <Row>
        {blueColor.map((getBgColor, i) => {
          return (
            <Col md="3" key={i}>
              <div
                className="redColor-wrapper"
                onClick={() => handleBlueColor(getBgColor.blueColorHexCode)}
              >
                <div
                  className="color-wrapper"
                  style={{
                    backgroundColor: getBgColor.blueColorHexCode,
                  }}
                ></div>
                {copy === getBgColor.blueColorHexCode ? <h5>Copied!</h5> : ""}
                <h1>{getBgColor.colorName}</h1>
                <p>
                  HEX <span>{getBgColor.blueColorHexCode}</span>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Bluepalette;
