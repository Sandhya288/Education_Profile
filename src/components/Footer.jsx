import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row footer-middle">
            <div className="col-sm-6 col-md-3 footer-item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 footer-item">
              <h3>Our Branches</h3>
              <ul>
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <a href="#">
                    AIC Building, 3rd floor <br />
                    Office no-7, <br />
                    NITTE College Campus
                   Ras Al Khaima National ENT MUSCUT, OMEN
                  </a>
                </li>
               
              </ul>
            </div>
            <div className="col-md-5 col-lg-5 footer-item text-md-left text-center">
              <h3>2STAR IT SOLUTIONS PRIVATE LIMITED</h3>
              <p>
                "2 Star IT Solution Pvt Ltd is a leading provider of electronic gadgets, offering a diverse
                range of high-quality products. We combine innovation with exceptional service to simplify
                and elevate your tech experience."
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="socialbtns">
                <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=61551733299783"><img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" alt="Facebook"/></a></li>
                  <li><a href="https://twitter.com/2staritsolution"><img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" alt="Twitter"/></a></li>
                  <li><a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=2staritsolution@gmail.com&tf=1"><img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" alt="Google Plus"/></a></li>
                  <li><a href="#"><img className="link-img image-block" src="https://img.icons8.com/?size=16&id=HGQomTX5FhZx&format=png" alt="GitHub"/></a></li>
                  <li><a href="https://www.linkedin.com/in/2star-it-solution"><img className="link-img image-block" src="https://img.icons8.com/?size=16&id=tvG-nQ3s2hZL&format=png" alt="LinkedIn"/></a></li>
                  <li><a href="https://www.instagram.com/2staritsolution/?hl=en"><img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" alt="Instagram"/></a></li>
                  <li><a href="#"><img className="link-img image-block" src="https://img.icons8.com/?size=16&id=aEN7nXI1-gjP&format=png" alt="YouTube"/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="copyright text-center">2STAR IT SOLUTION © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
