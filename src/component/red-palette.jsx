import React from 'react'
import "./styles/styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { redColors } from "../component/data/data";

export default function Redpalette(props) {
    return (
        <div className="red-color-pallete-wrapper" id="red-color-pallete-wrapper">
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
    )
}
