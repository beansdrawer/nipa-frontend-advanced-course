import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

function App() {
  return (
    <> 
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT JASON</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            <Image src="./jason-mask.png" alt="프로필 사진" 
            style={{ border: '1px solid #ff0000', width: 300 }} 
            roundedCircle />
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p>
              # 제이슨 <br />
              크리스탈 호수 168-2번지<br />
              캘리포니아 전문대학 전산과 <br />
              국비지원 프론트엔드 부트캠프 수료<br />
              <br />
              # 장점 <br />
              빠른 판단력 <br />
              성실한 태도 <br />
              <br />
              # 단점 WEAKNESS <br />
              무대 공포증 <br />
              여린 심성 <br />
            </p>
            </Col>
        </Row>
      </Container>
      <Container id="portfolio">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>첫 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>두 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>세 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff0000", margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>jason@naver.com</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff0000", margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-1234-1346</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#ff0000", margin: 0, padding: 3 }}>SNS</h3>
            <p style={{ margin: 0, padding: 10 }}>@jason_13_</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; 제이슨 부히즈. All Right Reserved.
          </Row>
      </Container>
    </>
  );
}

export default App;
