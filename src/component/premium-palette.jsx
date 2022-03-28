import React, { useContext } from "react";
import "./styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { premiumColors } from "./data/data";
import { Data5 } from "./master";

const Premiumpalette = () => {
    const { copy, handlePremiumColor } = useContext(Data5);
    return (
        <div className="red-color-pallete-wrapper" id="premium-color-pallete-wrapper">
            <h2>Premium Color Palette</h2>
            <Row>
                {premiumColors.map((getBgColor, i) => {
                    return (
                        <Col md="3" key={i}>
                            <div
                                className="redColor-wrapper"
                                onClick={() => handlePremiumColor(getBgColor.premiumColorHexCode)}
                            >
                                <div
                                    className="color-wrapper"
                                    style={{
                                        backgroundColor: getBgColor.premiumColorHexCode,
                                    }}
                                ></div>
                                {copy === getBgColor.premiumColorHexCode ? <h5>Copied!</h5> : ""}
                                <h1>{getBgColor.colorName}</h1>
                                <p>
                                    HEX <span>{getBgColor.premiumColorHexCode}</span>
                                </p>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};
export default Premiumpalette;
