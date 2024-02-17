import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='bg-dark text-center text-white'>
      <Container className='p-4 pb-0'>
        <section className='mb-4'>
          <Button
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-twitter"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-google"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-instagram"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>

          <Button
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <i className="fab fa-github"></i>
          </Button>
        </section>
      </Container>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className="fas fa-gem me-3"></i>
                Book My Flight 
              </h6>
              <p className='text-justify'>
             1. Flights are a popular mode of transportation that allows people to travel quickly and efficiently between different cities and countries. <br />
2. Airlines offer various flight options, from economy to first class, providing travelers with flexibility and convenience for their journeys.
              
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                New Domestic Flight
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                International Travel Guide
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Customised Holiday Package
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Online Test/ Appointment
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className="fas fa-home me-2"></i>
                 AirLine Flight Hinjewadi ,Phase 3 Pune
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@freelance_project.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 91 8007592194
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 91 9284926333
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} freelance_project.com
        <a className='text-white' href='https://mdbootstrap.com/'>
          
        </a>
      </div>
    </footer>
  );
}


