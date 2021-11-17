import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SerieCard(props) {
  return (
    <Col>
      <Card bg="black">
        <Link to="/watch">
          <Card.Img
            variant="top"
            src={"https://drive.google.com/uc?export=view&id=" + props.imgId}
            style={{ height: "200px" }}
          />
        </Link>

        <Card.Body>
          <Card.Subtitle>{props.title}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
