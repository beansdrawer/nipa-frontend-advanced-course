import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function App() {

  return (
    <Carousel className='w-50'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>첫 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>두 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>세 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}