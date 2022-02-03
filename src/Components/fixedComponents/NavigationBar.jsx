/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../../styles/main.scss";

import logo from '../../assets/Images/Logo1.png';

// import { SearchIcon, BackIcon, HamburgerIcon } from "../SvgComponents/svgs";
// import MyAccountDropDown from "../FixedComponents/MyAccountDropDown";
// import { store } from "../../redux/Store/store";
// import SignInPopUp from "../ReusableComponents/SignInPopUp";

const Nav = (props) => {
//   const strictVisible = props.strictVisible ? true : false;
//   const [displayed, setIfDisplayed] = useState(false);
//   const dropdownRef = useRef();
//   const profile = useRef();
//   const hamburger = useRef();
//   const [search, setSearchState] = useState(false);
//   const [keyword, setKeyword] = useState("");
//   const [hamburgerDisplayed, setIfHamburgerDisplayed] = useState(false);
//   const history = useHistory();
//   const media_buttonId = useRef(0);
//   const user = store.getState().user;
//   const currentState = store.getState();
//   const [signInPopUp, openSignInPopUp] = useState(false);

//   useEffect(() => {
//     if (strictVisible) {
//       setTimeout(function () {
//         openSignInPopUp(true);
//       }, 1000);
//     }
//   }, []);

//   const handleClickOutside = (event) => {
//     if (profile.current && profile.current.contains(event.target)) {
//       setIfDisplayed(!displayed);
//     }
//     if (
//       displayed &&
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target)
//     ) {
//       setIfDisplayed(false);
//     }

//     if (search && event.target.name !== "search") {
//       setSearchState(false);
//     }

//     if (
//       hamburgerDisplayed &&
//       hamburger.current &&
//       hamburger.current.contains(event.target)
//     ) {
//       if (
//         event.target.id === "back-button-svg" ||
//         event.target.id === "back-button" ||
//         event.target.id === "back-button-path"
//       ) {
//         setIfHamburgerDisplayed(false);
//       } else if (event.target.id === "HM1") {
//         history.push("/home");
//         setIfHamburgerDisplayed(false);
//       } else if (event.target.id === "HM2") {
//         history.push("/media", {
//           refresh: true,
//           buttonId: media_buttonId.current,
//           mediaData: [],
//         });
//         setIfHamburgerDisplayed(false);
//       } else if (event.target.id === "HM3") {
//         history.push("/forum");
//         setIfHamburgerDisplayed(false);
//       } else if (event.target.id === "HM4") {
//         history.push("/cafe");
//         setIfHamburgerDisplayed(false);
//       } else if (event.target.id === "HM5") {
//         history.push("/shop");
//         setIfHamburgerDisplayed(false);
//       }
//     }
//   };

//   const handleInput = (event) => {
//     if (event.target.name === "search") {
//       setKeyword(event.target.value);
//     }
//   };

//   const handleEnter = (event) => {
//     if (event.target.name === "search" && event.key === "Enter") {
//       history.push({ pathname: "/searchresults", state: { keyword: keyword } });
//       setSearchState(!search);
//     }
//   };

//   const searchClickHandler = () => {
//     // console.log(search);
//     setSearchState(!search);
//   };

//   useEffect(() => {
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [handleClickOutside]);

  return (
    <>
      <div className="main">
        <div className="first">
          <NavLink className="link" to="/home">
            {" "}
            <img src={logo} alt="logo" className="plaza_logo" />
          </NavLink>
        </div>
        <div className="second">
          <div
            style={{ width: "6vw", height: 40, display: "inline-block" }}
            align="center"
          >
            <NavLink activeClassName="link1" className="link" to="/home">
              {" "}
              Home
            </NavLink>
          </div>
          <div
            style={{ width: "6vw", height: 40, display: "inline-block" }}
            align="center"
          >
            <NavLink activeClassName="link1" className="link" to="/shop">
              Shop
            </NavLink>
          </div>
          <div
            style={{ width: "6vw", height: 40, display: "inline-block" }}
            align="center"
          >
            <NavLink activeClassName="link1" className="link" to="/product">
              Product
            </NavLink>
          </div>
          <div
            style={{ width: "6vw", height: 40, display: "inline-block" }}
            align="center"
          >
            <NavLink activeClassName="link1" className="link" to="/cart">
              Cart
            </NavLink>
          </div>
          <div
            style={{ width: "6vw", height: 40, display: "inline-block" }}
            align="center"
          >
            {/* <NavLink activeClassName="link1" className="link" to="/shop">
              Shop
            </NavLink> */}
          </div>
        </div>
        <div className="third">
        <NavLink to="/cart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <img
            className="cart__image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart__counter">1</div>
        </div>
      </NavLink>
          {/* <div style={{ width: "11vw" }} className="search-box-container">
            {search ? (
              <input
                type="text"
                name="search"
                className="searchbox-input"
                onChange={handleInput}
                onKeyDown={handleEnter}
                autoFocus
              />
            ) : (
              <></>
            )}
          </div> */}
          {/* <div className="search icon-hover" onClick={searchClickHandler}>
            {" "}
            <SearchIcon />{" "}
          </div>
          {currentState.loggedIn ? (
            <div
              ref={profile}
              className={
                displayed ? "active-profile icon-hover" : "profile icon-hover"
              }
            >
              <img
                src={user.photoURL}
                alt="img"
                style={{ objectPosition: "50% 50%", objectFit: "cover" }}
              />
            </div>
          ) : null}
          {!currentState.loggedIn ? (
            // <div className="SignInButton">Sign In</div>
            <div
              id="cafeButton"
              onClick={() => {
                openSignInPopUp(true);
              }}
            >
              <button
                id="CafeButton3"
                style={{
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
            </div>
          ) : null}
          {signInPopUp ? (
            <SignInPopUp
              visible={signInPopUp}
              changeVisibility={openSignInPopUp}
              strictVisible={strictVisible}
            />
          ) : (
            <></>
          )}
          {displayed && currentState.loggedIn ? (
            <MyAccountDropDown
              ref={dropdownRef}
              visible={displayed}
              setVisibility={setIfDisplayed}
              className="dropdown-component"
            />
          ) : null}
          <div
            className="hamburger"
            onClick={() => {
              setIfHamburgerDisplayed(true);
            }}
          > */}
            {/* {hamburgerDisplayed? */}
            {/* <HamburgerIcon />
            <div
              className="hamburger-container"
              style={{
                display: hamburgerDisplayed ? "block" : "none",
                width: window.innerWidth,
                height: window.innerHeight,
              }}
            >
              <div ref={hamburger}>
                <div>
                  <div
                    align="center"
                    style={{
                      display: "inline-flex",
                      zIndex: 2,
                      height: 30,
                      width: 30,
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    id="back-button"
                  >
                    <BackIcon />
                  </div>
                </div>
                <div className="hamburger-link-container" id="HM1">
                  Home
                </div>
                <hr className="hamburger-menu-line"></hr>
                <div className="hamburger-link-container" id="HM2">
                  Media
                </div>
                <hr className="hamburger-menu-line"></hr>
                <div className="hamburger-link-container" id="HM3">
                  Forum
                </div>
                <hr className="hamburger-menu-line"></hr>
                <div className="hamburger-link-container link" id="HM4">
                  Cafe
                </div>
                <hr className="hamburger-menu-line"></hr>
                <div className="hamburger-link-container" id="HM5">
                  Shop
                </div>
              </div>
            </div>
            : <></>} */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Nav;
