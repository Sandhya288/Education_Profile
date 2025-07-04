// ContactUsComponent.jsx
import React from 'react';
import "./Contact.css";

const ContactUsComponent = () => {
  return (
    <div className="contact_us_6" id="contact">
      <h1 style={{marginTop: '20px', paddingTop: '20px'}}>CONTACT US</h1>
      <div className="responsive-container-block container">
        <form className="form-box" id="contactForm" netlify>
          <div className="container-block form-wrapper">
            <div className="mob-text">
              <p className="text-blk contactus-head" style={{color: '#141f82'}}>
                Get in Touch
              </p>
            
            </div>
            <div className="responsive-container-block" id="i2cbk">
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                <p className="text-blk input-title">
                  FIRST NAME
                </p>
                <input className="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                <p className="text-blk input-title">
                  EMAIL
                </p>
                <input className="input" id="ipmgh-3" name="Email" placeholder="Please enter email..." />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
                <p className="text-blk input-title">
                  PHONE NUMBER
                </p>
                <input className="input" id="imgis-3" name="PhoneNumber" placeholder="Please enter phone number..." />
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                <p className="text-blk input-title">
                  WHAT DO YOU HAVE IN MIND ?
                </p>
                <textarea className="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
              </div>
            </div>
            <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2" style={{backgroundColor: '#141f82'}}>
              Submit
            </button>
          </div>
        </form>
        <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
          <div className="map-part">
            <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id" style={{color: '#FFFFFF'}}>
              Reach us at
            </p>
            <p className="text-blk map-contactus-subhead">
              2STAR IT SOLUTION PRIVATE LIMITED<br />
             4-236/C, Beeralpete, Nallur, Village & Post, Karkala Tq,<br />
              Udupi, Karnataka, India, 574122<br />

          INDIA: +91 7899410893    <br />
              OMAN : +968 98787853

            </p>
            <div className="social-media-links mob">
              <a className="social-icon-link" href="https://twitter.com/2staritsolution" id="ix94i-2-2">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
              </a>
              <a className="social-icon-link" href="https://www.facebook.com/profile.php?id=61551733299783" id="itixd">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
              </a>
              <a className="social-icon-link" href="https://mail.google.com/mail/u/2staritsolution@gmail.com" id="izxvt">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
              </a>
              <a className="social-icon-link" href="https://www.instagram.com/2staritsolution/?hl=en" id="izldf-2-2">
                <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
              </a>
            </div>
            <div className="map-box container-block" href="">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
