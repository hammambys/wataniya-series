import React from "react";
import { Card, Row } from "react-bootstrap";
import SerieCard from "./SerieCard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
  }

  componentDidMount() {
    const seriesRef = collection(db, "series");
    const getSeries = async () => {
      const data = await getDocs(seriesRef);
      this.setSeries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(series);
    };

    getSeries();
  }

  render() {
    return (
      <div className="p-3 m-3" style={{ border: "solid 3px #fff" }}>
        <Card text="white" bg="black" className="text-center">
          <Card.Header className="mb-3">
            <Card.Title>{props.title}</Card.Title>
          </Card.Header>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <SerieCard title={""} />
            ))}
          </Row>
          <Card.Footer>
            <Card.Link href="#">More</Card.Link>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
