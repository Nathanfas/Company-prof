import React from 'react'
import './footer.css'
import LogoIMG from '../../assets/image/Logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-section">
        <a href="#header">
          <img src={LogoIMG} alt="Logo" className="footer-logo" />
        </a>
        <h1>RETA TAMIRE</h1>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Our Address</h3>
          <p>
            Zewditu Street, Kazanchis, Palace Commercial Center 2<sup>nd</sup>{' '}
            Floor,
            <br /> Office No # 206,
          </p>
          <br />
          <p> Addis Ababa, Ethiopia</p>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +2519-38-07-47-38
            <br />
            <FontAwesomeIcon icon={faPhone} /> +2519-11-15-79-91
            <br />
            <FontAwesomeIcon icon={faPhone} /> +2519-13-71-44-42
            <br />
            <FontAwesomeIcon icon={faEnvelope} /> retatamire206@gmail.com
            <br />
            <a href="#t.me">t.me.retatamire.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Our Shops</h3>
          <p>
            Zewditu Street, Kazanchis, Palace Commercial Center 2<sup>nd</sup>{' '}
            Floor, <br /> Office No. # 206
            <br />
            <p className="for-order">for order </p>
            <p>
              {' '}
              <FontAwesomeIcon icon={faPhone} /> +2519-11-15-79-91{' '}
            </p>
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          <FontAwesomeIcon icon={faCopyright} />{' '}
          <a
            href="http://www.retatamire.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.retatamire.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
