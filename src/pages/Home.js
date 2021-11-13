import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Category from "../components/Category";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Category title="كوميدي" />;
        </Col>
        <Col>
          <Category title="دراما" />;
        </Col>
      </Row>
      <Row>
        <Col>
          <Category title="تاريخي" />;
        </Col>
        <Col>
          <Category title="اجتماعي" />;
        </Col>
      </Row>
    </Container>
  );
}
