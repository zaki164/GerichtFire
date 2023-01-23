import { SubHeading } from '../../components';
import { Row, Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => (
  <footer className='footer app_bg section_padding text-center'>
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4} className="p-3 mb-4 mb-md-0">
          <h3>Contact Us</h3>
          <p className='info_text'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='info_text mb-0'>+1 212-344-1230</p>
          <p className='info_text'>+1 212-555-1230</p>
        </Col>
        <Col xs={{ span: 12, order: 'first' }} sm={12} md={{ span: 4, order: 0 }} className="p-3 mb-4 mb-md-0">
          <h2>Gerícht</h2>
          <SubHeading title='"The best way to find yourself is to lose yourself in the service of others.”' />
          <div className="social">
            <FontAwesomeIcon icon={faFacebookF} className='face' />
            <FontAwesomeIcon icon={faTwitter} className='twit' />
            <FontAwesomeIcon icon={faInstagram} className='ins' />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} className="p-3 mb-4 mb-md-0">
          <h3>Working Hours</h3>
          <p className='info_text mb-0'>Monday-Friday: </p>
          <p className='info_text'>08:00 am -12:00 am</p>
          <p className='info_text mb-0'>Saturday-Sunday: </p>
          <p className='info_text'>07:00am -11:00 pm</p>
        </Col>
      </Row>
      <p className='info_text mt-1 mt-md-5'>2021 Gerícht. All Rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
