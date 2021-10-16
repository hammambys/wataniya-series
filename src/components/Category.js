import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import test from "./test.jpg";

export default function Category() {
  return (
    <div style={{ padding: "20px", margin: "20px", border: "solid 3px #fff" }}>
      <Card text="white" bg="black" className="text-center">
        <Card.Header style={{ marginBottom: "20px" }}>
          <Card.Title>Category</Card.Title>
        </Card.Header>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card bg="black">
                <Card.Img
                  variant="top"
                  src={test}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Subtitle>Serie 1</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Card.Footer>
          <Card.Link href="#">More</Card.Link>
        </Card.Footer>
      </Card>
    </div>
  );
}
