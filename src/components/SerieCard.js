import React from "react";
import { Col, Card } from "react-bootstrap";
import test from "./test.jpg";

export default function SerieCard(props) {
  return (
    <Col>
      <Card bg="black">
        <Card.Img variant="top" src={test} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Subtitle>{props.title}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
