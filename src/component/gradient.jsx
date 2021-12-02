import React from "react";
import "./styles/styles.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { gradientColors } from "../component/data/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Gradientcolorcomponent = (props) => {
  return (
    <section>
      <Container fluid>
        <div className="pos-fixed">
          <h1>UIColorPicker</h1>
          <div className="w-100 d-flex justify-content-end align-items-center">
            <Button>
              <Link to="/">Solid</Link>
            </Button>
          </div>
        </div>
        <div
          className="red-color-pallete-wrapper"
          id="red-color-pallete-wrapper"
        >
          <h1>Click to Copy</h1>
          <p>Always perfect color</p>
          <h2>Gradient Color Palette</h2>
          <Row>
            {gradientColors.map((getBgColor, i) => {
              return (
                <Col md="3" key={i}>
                  <div
                    className="redColor-wrapper"
                    onClick={() =>
                      props.handleGradientColors(getBgColor.gradientColorCodes)
                    }
                  >
                    <div
                      className="color-wrapper"
                      style={{
                        backgroundImage: `linear-gradient(${getBgColor.gradientColorCodes})`,
                      }}
                    ></div>
                    {props.copy === getBgColor.gradientColorCodes ? (
                      <h5>Copied!</h5>
                    ) : (
                      ""
                    )}
                    <p>
                      HEX <span>{getBgColor.gradientColorCodes}</span>
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Gradientcolorcomponent;
