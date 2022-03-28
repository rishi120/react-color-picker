import React from "react";
import "./styles/styles.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Redpalette from "./red-palette";
import Premiumpalette from "./premium-palette";
import Bluepalette from "./blue-palette";
import Greenpalette from "./green-palette";
import Yellowpalette from "./yellow-palette";
import Mixcolorpalette from "./mix-colors";
import { Link } from "react-router-dom";
import { colors } from "../component/data/data";

const Maincomponent = (props) => {
  return (
    <section>
      <Container fluid>
        <div className="pos-fixed">
          <h1>UIColorPicker</h1>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <ul>
              {colors.map((colorCode, index) => {
                return (
                  <li
                    key={index}
                    style={{ backgroundColor: colorCode.code }}
                    onClick={() => props.handleColorPalette(index)}
                    className={props.active === index ? "active" : ""}
                  >
                    {colorCode.text}
                  </li>
                );
              })}
            </ul>
            <Button onClick={props.handleScrollTop}>
              <Link to="/gradient">Gradient</Link>
            </Button>
          </div>
        </div>
        <div className="red-color-pallete-wrapper">
          <h1>Click to Copy</h1>
          <p>Always perfect color</p>
          <Premiumpalette />
        </div>
        <Redpalette handleColors={props.handleColors} copy={props.copy} />
        <Bluepalette />
        <Greenpalette />
        <Yellowpalette />
        <Mixcolorpalette />
      </Container>
    </section>
  );
};
export default Maincomponent;
