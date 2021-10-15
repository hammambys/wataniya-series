import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>

      <Link to="/login" className="btn btn-primary w-100 mt-3">
        login
      </Link>
    </Container>
  );
}
