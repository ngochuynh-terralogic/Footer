import React from 'react';

const mainFooterStyle = {
  padding: '30px 0px'
};
const inline = {
  display: 'inline-block', 
  verticalAlign: 'top'
};
const tmLinks = {
  color: '#999', 
  fontSize: '13.63px', 
  fontWeight: 300, 
  textDecoration: 'underline'
};
const tmIcon = {
  fontSize: '9px', 
  verticalAlign: 'super'
};
const leftfooterlist = {
  listStyle: 'none', 
  margin: 0, 
  padding: 0
};
const footerlinks = {
  color: '#fff', 
  textDecoration: 'none', 
  fontSize: '20.86px', 
  fontWeight: 300, 
  transition: 'all 0.3s'
};
const followlist = {
  listStyle: 'none', 
  display: 'inline-block'
};
const followlistitem = {
  display: 'inline-block', 
  marginRight: '5px'
};
const contactHeader = {
  color: '#fff', 
  marginBottom: '10px', 
  fontSize: '20.86px', 
  fontWeight: 300
};
const addressPhone = {
  color: '#fff', 
  fontSize: '17.84px'
};
const lobbyLabel = {
  color: '#999', 
  fontSize: '13.63px', 
  fontWeight: 300, 
  marginTop: '15px'
};
const lobbyDay = {
  color: '#fff', 
  fontSize: '12.63px', 
  fontWeight: 500, 
  margin: '2px 0'
};
const lobbydayrange = {
  width: '110px', 
  marginRight: '10px', 
  display: 'inline-block'
};
const notitalic = {
  fontStyle: 'normal'
};
const emailsublabel = {
  fontSize: '13.63px', 
  color: '#fff', 
  marginTop: '15px'
};
const spamtext = {
  fontSize: '12.63px', 
  fontWeight: 300, 
  color: '#999', 
  paddingRight: '40px'
};
const emailInput = {
  width: '74%',
  maxWidth: '278px',
  height: '34px', 
  border: '1px solid #ccc', 
  verticalAlign: 'top', 
  padding: '0 10px', 
  outline: 'none', 
  borderRadius: '5px 0 0 5px'
};
const emailSignup = {
  width: '26%',
  maxWidth:'97px',
  height: '34px', 
  border: '1px solid #ccc', 
  textAlign: 'center', 
  background: '#eee', 
  fontSize: '13.63px', 
  color: '#000', 
  fontWeight: 500, 
  outline: 'none', 
  borderRadius: '0 5px 5px 0'
};
const inputContainer = {
  margin: '10px 0'
};
const nobottom = {
  marginBottom: 0, 
  lineHeight: '24.27px'
};
const mapStyle = {
  border: 0
};

const Footer = function() {
  return (
    <div className="container">
      <div style={mainFooterStyle}>  
        <div className="footersub" id="footerSocial">
          <ul style={leftfooterlist}>
            <li>
              <a href="#follow" className="mainfooterlink" style={footerlinks}>Follow Us</a>
              <ul style={followlist}>
                <li style={followlistitem}>
                  <a href="#fb" className="footersocial" style={footerlinks}>
                    <i className="fa fa-facebook-official" />
                  </a>
                </li>
                <li style={followlistitem}>
                  <a href="#twitter" className="footersocial" style={footerlinks}>
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li style={followlistitem}>
                  <a href="#instagram" className="footersocial" style={footerlinks}>
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li style={followlistitem}>
                  <a href="#rss" className="footersocial" style={footerlinks}>
                    <i className="fa fa-rss" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#products" className="mainfooterlink" style={footerlinks}>Our Products</a>
            </li>
            <li>
              <a href="#work" className="mainfooterlink" style={footerlinks}>Come Work with Us</a>
            </li>
          </ul>
          <div>
            <div style={emailsublabel}>
              Keep up-to-date with everything that happens in your world.
            </div>
            <div style={inputContainer}>
              <input style={emailInput} type="text" placeholder="Enter Your Email Address" name="Email" />
              <input style={emailSignup} type="submit" value="Sign-Up" id="emailSignup" />
            </div>
            <div style={spamtext}>
              We promise to never spam you. You can opt-out at any time. Please refer to our 
              <a href="#privacy">Privacy Policy</a> for additional information.
            </div>
          </div>
        </div>
        <div id="footerContact" className="footersub">
          <div style={contactHeader}>Contact Us</div>
          <div>
            <div className="gmap">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.256642674199!2d-95.99453195285862!3d36.16030894197156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6eb7fa4d01791%3A0xd95893ab6017140b!2sNews+On+6+KOTV!5e0!3m2!1sen!2sus!4v1469629675590" 
                width="100%"
                height="164"
                frameBorder="0"
                style={mapStyle}
                allowFullScreen />
            </div>
            <div className="contactinfo">
              <div style={addressPhone}>303 N Boston Ave, Tulsa, OK 74103</div>
              <div style={addressPhone}>(918) 732-6000</div>
              
              <div style={lobbyLabel}>Our lobby hours</div>
              <div style={lobbyDay}>
                <span style={lobbydayrange}>Monday - Friday</span> 
                <i style={notitalic}>8:30 - 5:30PM</i>
              </div>
              <div style={lobbyDay}>
                <span style={lobbydayrange}>Saturday - Sunday</span> 
                <i style={notitalic}>CLOSED</i>
              </div>
              <div style={lobbyDay}>
                <span style={lobbydayrange}>National Holidays</span> 
                <i style={notitalic}>Hours may vary</i>
              </div>
            </div>
          </div>
        </div>
        <div className="footersub" id="footerTOC">
          <p style={nobottom}>
            <i className="fa fa-copyright" aria-hidden="true" /> 
            2016 <a href="#griffin" style={tmLinks}>Griffin Communications</a>, 
            <a href="#frankly" style={tmLinks}>Frankly Media</a>.
          </p>
          <p style={nobottom}>
            TULSA&apos;S OWN
            <i className="fa fa-trademark" style={tmIcon} aria-hidden="true" /> &amp; GREEN COUNTRY&apos;S OWN
            <i className="fa fa-trademark" style={tmIcon} aria-hidden="true" /> are trademark of Griffin Communications, LLC. All Rights Reserved. 
            <a href="#privpol" style={tmLinks}>Privacy Policy</a>,&nbsp;
            <a href="#tos" style={tmLinks}>Terms of Service</a>,&nbsp;
            <a href="#ln" style={tmLinks}>Legal Notices</a>,&nbsp;
            <a href="#ac" style={tmLinks}>Ad Choices</a>,&nbsp;
            <a href="#pif" style={tmLinks}>Public Inspection Files</a>,&nbsp;
            <a href="#sp" style={tmLinks}>Station Profile</a>, &amp;&nbsp;
            <a href="#cca" style={tmLinks}>Closed Captioning Assistance</a>
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
