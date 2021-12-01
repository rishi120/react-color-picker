import React, { useContext } from "react";
import "./styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { yellowColor } from "./data/data";
import { Data3 } from "./master";

const Yellowpalette = () => {
  const { copy, handleYellowColor } = useContext(Data3);
  return (
    <div
      className="red-color-pallete-wrapper"
      id="yellow-color-pallete-wrapper"
    >
      <h2>Yellow Palette</h2>
      <Row>
        {yellowColor.map((getBgColor, i) => {
          return (
            <Col md="3" key={i}>
              <div
                className="redColor-wrapper"
                onClick={() => handleYellowColor(getBgColor.yellowColorHexCode)}
              >
                <div
                  className="color-wrapper"
                  style={{
                    backgroundColor: getBgColor.yellowColorHexCode,
                  }}
                ></div>
                {copy === getBgColor.greenColorHexCode ? <h5>Copied!</h5> : ""}
                <h1>{getBgColor.colorName}</h1>
                <p>
                  HEX <span>{getBgColor.yellowColorHexCode}</span>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Yellowpalette;
