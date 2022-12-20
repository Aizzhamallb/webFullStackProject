import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerBlock">
      <div className="footerBlockContent">
        <div className="footerContentInfo">
          <div className="footerContentInfoLeft">
            <div className="footerLeftElement">Home</div>
            <div className="footerLeftElement">Booking</div>
          </div>
          <div className="footerContentInfoRight">
            <div className="footerRightElement">BOOKING.alatoo</div>

            <div className="footerRightElement">
              International Ala-Too Univercity
            </div>
            <div className="footerRightElement">+996 777 77 77 77</div>
            <div className="footerRightElement">alatoo@gmail.com</div>
          </div>
        </div>
        <div className="footerEmail">
          <div>Подпишитесь на рассылку</div>
          <div className="footerEmailDiv">
            <input
              type="e-mail"
              className="footerEmailInp"
              placeholder="E-MAIL"
            />
            <div className="footerLine"></div>
            <div className="footerEmailBtn">ВОЙТИ</div>
          </div>
          <div>Copyright © 1996–2022 Booking.com™. Все права защищены.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
