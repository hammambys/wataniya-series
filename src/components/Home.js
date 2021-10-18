import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Category from "./Category";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Category title="Comedy" />;
        </Col>
        <Col>
          <Category title="Drama" />;
        </Col>
      </Row>
      <Row>
        <Col>
          <Category title="Action" />;
        </Col>
        <Col>
          <Category title="Romance" />;
        </Col>
      </Row>
    </Container>
  );
}
