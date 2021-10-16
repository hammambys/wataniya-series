import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Category from "./Category";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Category />;
        </Col>
        <Col>
          <Category />;
        </Col>
      </Row>
      <Row>
        <Col>
          <Category />;
        </Col>
        <Col>
          <Category />;
        </Col>
      </Row>
    </Container>
  );
}
