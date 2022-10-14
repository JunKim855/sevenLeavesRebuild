import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './images/logo.png';
import Cover from './images/thai_green_tea.jpeg';
import CoffeeTea from './images/coffee_tea.jpeg';
import Macarons from './images/macarons.jpeg';
import Storefront from './images/7leaves.jpeg';
import Artisan from './images/artisan.jpeg';
import MobileApp from './images/mobile_app.png';
import Responsibility from './images/responsibility.jpeg';
import { Container, Navbar, Nav, NavDropdown, Image, Row, Col, Button, Card } from 'react-bootstrap';
import { Search, Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const NavBar = () => (
    <Navbar className="sticky-top bg-white justify-content-center">

      <Navbar.Brand id="logo">
        <Image width="100" src={Logo} alt="logo" />
      </Navbar.Brand>

      <Nav className="container-fluid">
        <NavDropdown title="ABOUT US">
          <NavDropdown.Item>Contact Us</NavDropdown.Item>
          <NavDropdown.Item>Our Story</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="MENU">
          <NavDropdown.Item href="#">Our Drinks</NavDropdown.Item>
          <NavDropdown.Item href="#">Our Macarons</NavDropdown.Item>
          <NavDropdown.Item href="#">Our Merchandise</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="EVENTS & FUNDRAISING">
          <NavDropdown.Item href="#">Events</NavDropdown.Item>
          <NavDropdown.Item href="#">Fundraising</NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="#">LOCATIONS</Nav.Link>

        <NavDropdown title="CAREERS">
          <NavDropdown.Item href="#">San Jose Hiring</NavDropdown.Item>
          <NavDropdown.Item href="#">San Bernardino County Hiring</NavDropdown.Item>
          <NavDropdown.Item href="#">Riverside County Hiring</NavDropdown.Item>
        </NavDropdown>

        <Nav.Item>
          <Nav.Link href="#">ARTISAN</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">MOBILE APP</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">FRANCHISE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Search className="mt-2"/>
        </Nav.Item>
      </Nav>
    </Navbar>
)

const CoverPhoto = () => (
  <Row className="mb-4">
    <Card className="border-white">
      <Image src={Cover}/>
      <div className="main-caption text-white">
        <p className="display-3">ชาเขียว</p>
        <p>From Thailand to your hand</p>
        <p>A sweet and creamy green tea goodness</p>
        <Button className="btn btn-danger">VIEW MENU</Button>
      </div>
    </Card>
  </Row>
)

const MiddlePhotos = () => (
  <Row>
    <Col>
      <Card className="border-white">
        <Image className="dimmed" width="100%" src={CoffeeTea}/>
        <div className="caption text-white">
          <p className="display-6 text-nowrap">Coffee Tea<br/>Goodness</p>
        </div>
      </Card>
    </Col>

    <Col>
      <Card className="border-white">
        <Image className="dimmed" width="100%" src={Macarons}/>
        <div className="caption text-white">
          <p className="display-6 text-nowrap">Our Macarons</p>
        </div>
      </Card>
    </Col>

    <Col>
      <Card className="border-white">
        <Image className="dimmed" width="100%" src={Storefront}/>
        <div className="caption text-white">
          <p className="display-6 text-nowrap">Find a 7 Leaves</p>
        </div>
      </Card>
    </Col>
  </Row>
)

const Mission = () => (
  <>
    <br/><hr className="text-muted my-5"/><br/>
    <Nav className="blockquote justify-content-center">
      <h6><b>OUR MISSION STATEMENT</b></h6>
      <p className="text-center text-muted quote">
        <i>"To enrich and embrace the human experience through our commitment to serve the very best coffee, tea, and goodness in every cup, in every community."</i>
      </p>
    </Nav>
    <br/><hr className="text-muted my-5"/><br/>
  </>
)

const News = () => (
  <>
  <Row className="bottom-section align-items-center mb-3">
    <Col className="m-3">
      <img width="100%" src={Artisan}/>
    </Col>
    <Col className="text-muted m-3">
      <p className="display-6 text-dark">Artisan Is Now Open in Fountain Valley</p>
      <p>7 Leaves Cafe and Crema Bakery are proud to partner together to bring you Artisan. This fresh concept brings a mixture of exciting new brunch items with all of your favorite 7 Leaves Drinks.</p>
      <p>Celebrate with us on July 24th for our Grand Opening! Or stop by our Drive Thru lane for a drink and snack.</p>
      <p>For customers who are in a hurry, we also provide a quick and convenient mobile pickup experience. Simply download the mobile app, and start collecting leaves today.</p>
    </Col>
  </Row>

<Row className="bottom-section align-items-center mb-3">
  <Col className="text-muted m-3">
    <p className="display-6 text-dark">Launching the 7 Leaves Cafe Mobile App</p>
    <p>7 Leaves Cafe is proud to announce the launch of our new Mobile App. Start earning Rewards (Leaves) with easy ordering and delivery. It’s a convenient way to order ahead and pay right on your phone. Earn Leaves and get free drinks
      and items for every dollar you spend. Get exclusive offers and much more!</p>
    <p>Download today on Apple App Store and Google Play Store!</p>
    <br/>
      <Button className="btn btn-danger">READ MORE</Button>
  </Col>
  <Col className="m-3">
    <img width="100%" src={MobileApp}/>
  </Col>
</Row>

<Row className="bottom-section align-items-center mb-5">
  <Col className="m-3">
    <img width="100%" src={Responsibility}/>
  </Col>
  <Col className="text-muted m-3">
    <p className="display-6 text-dark">Our Commitment & Responsibility</p>
    <p>At 7 Leaves, we have a rooted belief seeing the world “through our customer’s eyes.” This powerful idea helps us stay focused on what’s most important: living up to the trust you place in us every day.</p>
    <p>As cities here and around the world tackle the increasing spread of the coronavirus, we'd like to share our commitment of keeping our families, team members and communities safe and healthy, guided by proper care.</p>
    <p>We believe it's our responsibility not only to focus on the well-being of our team and our communities, we also want to support our local health officials and government leaders as they work to respond to the disease.</p>
    <br/>
      <Button className="btn btn-danger">READ MORE</Button>
  </Col>
</Row>
  </>
)

const Footer = () => (
  <Container className="pb-5">
    <hr className="text-muted" />
    <hr className="text-muted" />
    <span>7 Leaves Cafe, All Rights Reserved. Coffee Tea Goodness | <span className="text-danger">Home</span> | <span className="text-danger">Accessibility Statement</span> | <span className="text-danger">Privacy Policy</span></span><br />
    <span>© 2011-2022.</span>
    <span id="social-media">
      <span className="m-3">Connect with us:</span>
      <Facebook />&nbsp;&nbsp;
      <Instagram />&nbsp;&nbsp;
      <Twitter />&nbsp;&nbsp;
    </span>
  </Container>
);


const SevenLeaves = () => (
  <Container>
    <NavBar />
    <CoverPhoto />
    <MiddlePhotos />
    <Mission />
    <News />
    <Footer />
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SevenLeaves />);
