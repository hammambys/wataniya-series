import React from "react";
import { Card, Row } from "react-bootstrap";
import SerieCard from "./SerieCard";

export default function Category(props) {
  return (
    <div className="p-3 m-3" style={{ border: "solid 3px #fff" }}>
      <Card text="white" bg="black" className="text-center">
        <Card.Header className="mb-3">
          <Card.Title>{props.title}</Card.Title>
        </Card.Header>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <SerieCard title="Loutil" />
          ))}
        </Row>
        <Card.Footer>
          <Card.Link href="#">More</Card.Link>
        </Card.Footer>
      </Card>
    </div>
  );
}
