import logo from './icons/logo.svg'
import icon from './icons/icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="col-1">
            <img src={logo} alt="logo" />
            <div>All Rights Reserved to info.com</div>
            <div>© DDD – Web Marketing</div>
            <div>Privacy Policy</div>
            <img src={icon} alt="icon" className="icon" />
          </div>
          <div className="col-2">
            <h3>CONTACT US</h3>
            <div className="footer-row">
              <div>UK &#160;</div>
              <div>
                +44-2020202020 <br /> +44-2020202020
              </div>
            </div>
            <div className="footer-row">
              <div>AUT</div>
              <div>+44-2020202020</div>
            </div>
            <div className="footer-row">
              <div>AUS</div>
              <div>+44-2020202020</div>
            </div>
          </div>
          <div className="col-3">
            <div>
              <h3>ADDRESS</h3>
              <div>
                Lorem ipsum <br /> set amet
              </div>
            </div>
            <div>
              <h3>OUR OFFICE HOURS</h3>
              <div>
                Mon-Fr: 8:00-18:00 GMT <br />
                Sat/Su: Closed
              </div>
            </div>
          </div>
          <div className="col-4">
            <h3>Email US</h3>
            <div>info@info.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
