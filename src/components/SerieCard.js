import React from "react";
import { Col, Card } from "react-bootstrap";


export default function SerieCard(props) {
  return (
    <Col>
      <Card bg="black">
        <Card.Img variant="top" src={"https://drive.google.com/uc?export=view&id="+ props.imgId} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Subtitle>{props.title}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
