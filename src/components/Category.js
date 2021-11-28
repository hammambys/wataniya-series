import React from "react";
import { Card, Row } from "react-bootstrap";
import SerieCard from "./SerieCard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

//get all series from database
const seriesRef = collection(db, "series");
const getSeries = async () => {
  const data = await getDocs(seriesRef);
  const series = await data.docs.map((doc) => ({
    ...doc.data(),
  }));
  return series;
};

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        { name: "", category: "", ep_links: [] },
        { name: "", category: "", ep_links: [] },
        { name: "", category: "", ep_links: [] },
        { name: "", category: "", ep_links: [] },
      ],
    };
  }
  componentDidMount() {
    getSeries().then((res) => {
      this.setState({ series: [...res] });
    });
  }

  render() {
    var serieslist = this.state.series;
    console.log(serieslist[2].ep_links[0]);
    return (
      <div className="p-3 m-3" style={{ border: "solid 3px #fff" }}>
        <Card text="white" bg="black" className="text-center">
          <Card.Header className="mb-3">
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Header>
          <Row xs={1} md={2} className="g-4">
            {serieslist.map((serie) => {
              if (this.props.title === serie.category) {
                return <SerieCard title={serie.name} imgId={serie.img_id} />;
              }
              return null;
            })}
          </Row>
          <Card.Footer>
            <Card.Link href="#">المزيد</Card.Link>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
