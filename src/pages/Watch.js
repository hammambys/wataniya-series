import React from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import testimg from "../components/test.jpg";

export default function Watch() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-10" src={testimg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-10" src={testimg} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/It-d7yHqKOg"
      ></iframe>
    </div>
  );
}
