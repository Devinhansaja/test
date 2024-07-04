import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/NavImage.png";

const TopicBox = () => {
  return (
    <div>
      <style>
        {`
        /* Googlefont Poppins CDN Link */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        body {
          min-height: 100vh;
        }
        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
          box-shadow: 0 1px 2px rgb(192, 189, 189);
          z-index: 99;
        }
        nav .navbar {
          height: 100%;
          max-width: 1250px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: auto;
          padding: 0 50px;
        }
        .navbar .logo a {
          font-size: 30px;
          color: #fffcfc;
          text-decoration: none;
          font-weight: 600;
        }
        nav .navbar .nav-links {
          line-height: 70px;
          height: 100%;
        }
        nav .navbar .links {
          display: flex;
        }
        nav .navbar .links li {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style: none;
          padding: 0 14px;
        }
        nav .navbar .links li a {
          height: 100%;
          text-decoration: none;
          white-space: nowrap;
          color: #070000;
          font-size: 15px;
          font-weight: 500;
        }
        .links li:hover .htmlcss-arrow,
        .links li:hover .js-arrow {
          transform: rotate(180deg);
        }
        nav .navbar .links li .arrow {
          height: 100%;
          width: 22px;
          line-height: 70px;
          text-align: center;
          display: inline-block;
          color: #000000;
          transition: all 0.3s ease;
        }
        nav .navbar .links li .sub-menu {
          position: absolute;
          top: 70px;
          left: 0;
          line-height: 40px;
          background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
          box-shadow: 0 1px 2px rgb(0, 0, 0);
          border-radius: 0 0 4px 4px;
          display: none;
          z-index: 2;
        }
        nav .navbar .links li:hover .htmlCss-sub-menu,
        nav .navbar .links li:hover .js-sub-menu {
          display: block;
        }
        .navbar .links li .sub-menu li {
          padding: 0 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .navbar .links li .sub-menu a {
          color: #000000;
          font-size: 15px;
          font-weight: 500;
        }
        .navbar .links li .sub-menu .more-arrow {
          line-height: 40px;
        }
        .navbar .links li .htmlCss-more-sub-menu {
          line-height: 40px;
        }
        .navbar .links li .sub-menu .more-sub-menu {
          position: absolute;
          top: 0;
          left: 100%;
          border-radius: 0 4px 4px 4px;
          z-index: 1;
          display: none;
        }
        .links li .sub-menu .more:hover .more-sub-menu {
          display: block;
        }
        .navbar .nav-links .sidebar-logo {
          display: none;
        }
        .navbar .bx-menu {
          display: none;
        }
        @media (max-width: 920px) {
          nav .navbar {
            max-width: 100%;
            padding: 0 25px;
          }
          nav .navbar .logo a {
            font-size: 27px;
          }
          nav .navbar .links li {
            padding: 0 10px;
            white-space: nowrap;
          }
          nav .navbar .links li a {
            font-size: 15px;
          }
        }
        @media (max-width: 800px) {
          nav {
            position: relative;
          }
          .navbar .bx-menu {
            display: block;
          }
          nav .navbar .nav-links {
            position: fixed;
            top: 0;
            left: -100%;
            display: block;
            max-width: 270px;
            width: 100%;
            background: #097ca3;
            line-height: 40px;
            padding: 20px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.5s ease;
            z-index: 1000;
          }
          .sidebar-logo i,
          .navbar .bx-menu {
            font-size: 25px;
            color: #fff;
          }
          nav .navbar .links {
            display: block;
            margin-top: 20px;
          }
          nav .navbar .links li .arrow {
            line-height: 40px;
          }
          nav .navbar .links li {
            display: block;
          }
          nav .navbar .links li .sub-menu {
            position: relative;
            top: 0;
            box-shadow: none;
            display: none;
          }
          nav .navbar .links li .sub-menu li {
            border-bottom: none;
          }
          .navbar .links li .sub-menu .more-sub-menu {
            display: none;
            position: relative;
            left: 0;
          }
          .navbar .links li .sub-menu .more-sub-menu li {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .links li:hover .htmlcss-arrow,
          .links li:hover .js-arrow {
            transform: rotate(0deg);
          }
          .navbar .links li .sub-menu .more-sub-menu {
            display: none;
          }
          .navbar .links li .sub-menu .more span {
            display: flex;
            align-items: center;
          }
          .links li .sub-menu .more:hover .more-sub-menu {
            display: none;
          }
          nav .navbar .links li:hover .htmlCss-sub-menu,
          nav .navbar .links li:hover .js-sub-menu {
            display: none;
          }
          .navbar .nav-links.show1 .links .htmlCss-sub-menu,
          .navbar .nav-links.show3 .links .js-sub-menu,
          .navbar .nav-links.show2 .links .more .more-sub-menu {
            display: block;
          }
          .navbar .nav-links.show1 .links .htmlcss-arrow,
          .navbar .nav-links.show3 .links .js-arrow {
            transform: rotate(180deg);
          }
          .navbar .nav-links.show2 .links .more-arrow {
            transform: rotate(90deg);
          }
        }
        @media (max-width: 370px) {
          nav .navbar .nav-links {
            max-width: 100%;
          }
        }
        
        table,
        th,
        td {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 8px;
          text-align: left;
        }
        `}
      </style>
      
      <>
        {/* Meta and link tags moved to the head of the document */}
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="Navigation.css" />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Navigation content */}
        <nav>
          <div className="navbar">
            <i className="bx bx-menu" />
            <img
              width="180"
              height="50"
              className="d-inline-block align-top"
              src={Logo}
              alt="Logo"
            />
            <div className="nav-links">
              <a href="#">
                <div className="sidebar-logo">
                  <i className="bx bx-x" />
                </div>
              </a>
              <ul className="links">
                <li>
                  <a href="#">Route</a>
                  <i className="bx bxs-chevron-down htmlcss-arrow arrow" />
                  <ul className="htmlCss-sub-menu sub-menu">
                    <li>
                      <a href="/estate">Estate</a>
                    </li>
                    <li>
                      <Link to="/Lastcollection">Last Collection</Link>
                    </li>
                    <li>
                      <a href="#">Location</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Plan</Link>
                  <i className="bx bxs-chevron-down htmlcss-arrow arrow" />
                  <ul className="htmlCss-sub-menu sub-menu">
                    <li>
                      <Link to="/Todaytapping">Today Tapping</Link>
                    </li>
                    <li>
                      <Link to="/Planning">Plans</Link>
                    </li>
                    <li>
                      <Link to="/Order">Order</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Bills</a>
                  <i className="bx bxs-chevron-down js-arrow arrow" />
                  <ul className="js-sub-menu sub-menu">
                    <li>
                      <a href="#">Approved</a>
                    </li>
                    <li>
                      <a href="#">Pending</a>
                    </li>
                    <li>
                      <a href="#">New</a>
                    </li>
                    <li>
                      <a href="#">Wip</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Sheet</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                  <i className="bx bxs-chevron-down js-arrow arrow" />
                  <ul className="js-sub-menu sub-menu">
                    <li>
                      <a href="#">EZT Report</a>
                    </li>
                    <li>
                      <a href="#">Root Rep.</a>
                    </li>
                    <li>
                      <a href="#">Weight</a>
                    </li>
                    <li>
                      <a href="#">Cost</a>
                    </li>
                    <li>
                      <a href="#">Chemical</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
};

export default TopicBox;
