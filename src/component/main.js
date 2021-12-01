import React from "react";
import "./styles/styles.scss";
import Container from "react-bootstrap/Container";
import { redColors, colors } from "../component/data/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bluepalette from "./blue-palette";
import Greenpalette from "./green-palette";
import Yellowpalette from "./yellow-palette";
import Mixcolorpalette from "./mix-colors";

const Maincomponent = (props) => {
  return (
    <section>
      <Container fluid>
        <div className="pos-fixed">
          <h1>UIColorPicker</h1>
          <ul>
            {colors.map((colorCode, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: colorCode.code }}
                  onClick={() => props.handleColorPalette(index)}
                  className={props.active ? "active" : ""}
                ></li>
              );
            })}
          </ul>
        </div>
        <div
          className="red-color-pallete-wrapper"
          id="red-color-pallete-wrapper"
        >
          <h1>Click to Copy</h1>
          <p>Always perfect color</p>
          <h2>Red Palette</h2>
          <Row>
            {redColors.map((getBgColor, i) => {
              return (
                <Col md="3" key={i}>
                  <div
                    className="redColor-wrapper"
                    onClick={() => props.handleColors(getBgColor.hexCode)}
                  >
                    <div
                      className="color-wrapper"
                      style={{
                        backgroundColor: getBgColor.hexCode,
                      }}
                    ></div>
                    {props.copy === getBgColor.hexCode ? <h5>Copied!</h5> : ""}
                    <h1>{getBgColor.colorName}</h1>
                    <p>
                      HEX <span>{getBgColor.hexCode}</span>
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <Bluepalette />
        <Greenpalette />
        <Yellowpalette />
        <Mixcolorpalette />
      </Container>
    </section>
  );
};
export default Maincomponent;
