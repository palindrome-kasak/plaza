/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../styles/main.scss";
import {
  FbFooter,
  InstaFooter,
  TwitterFooter,
  LinkedIn,
} from "../SvgComponents/svgs";
import { Link } from "react-router-dom";
// import { store } from "../../redux/Store/store";



const Footer = (props) => {
  // const currentState = store.getState();
  return (
    <div className="footer_container">
      <div className="footer-rows">
        <div className="footer-column">
          <h4>Plaza Crystal</h4>

          {/* {currentState.loggedIn ? ( */}
            {/* <ul className="unstyled-list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/forum">Forum</Link>
              </li>
              <li>
                <Link to="/cafe">Cafe</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/write_for_Plaza/Plaza/write-for-Plaza/key=0.17995324958427751631214571804">
                  Write for Plaza
                </Link>
              </li>
              <li>
                <Link to="/myaccount">My Account</Link>
              </li>
            </ul>
          ) : ( */}
            <ul className="unstyled-list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          {/* )} */}
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <div>
            {window.innerWidth <= 600 ? (
              <ul className="unstyled-list">
                <li>
                  <a href="mailto:Contact@PlazaCrystalWorld.com?">Email</a>
                </li>
              </ul>
            ) : (
              <ul className="unstyled-list">
                <li>
                  <a href="mailto:Contact@PlazaCrystalWorld.com?">
                    Contact@PlazaCrystalWorld.com
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="IConRowSection">
            <div className="footerIcon">
              <a
                href="https://www.facebook.com/Plazaessential/ "
                target="_blank"
              >
                <FbFooter />
              </a>
            </div>
            <div className="footerIcon">
              <a
                href="https://www.instagram.com/Plazaessential/?hl=en"
                target="_blank"
              >
                <InstaFooter />
              </a>
            </div>
            <div className="footerIcon">
              <a
                href="https://twitter.com/Plazaessential?lang=en"
                target="_blank"
              >
                <TwitterFooter />
              </a>
            </div>
            <div className="footerIcon">
              <a
                href="https://www.linkedin.com/company/Plaza-essential/"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </div>

            {/* <BitmapIcon className="footerIcon" /> */}
          </div>
        </div>

        <hr className="GaryLine" />
        <div className="bottomText">
          <p className="copyrightText">
            © 2021 Plaza Crystal | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
