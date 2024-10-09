import React from "react";
import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "HOME",
  },
  {
    path: "#about",
    display: "ABOUT",
  },
  {
    path: "#service",
    display: "SERVICES",
  },
  {
    path: "#team",
    display: "TEAM",
  },
  {
    path: "#blog",
    display: "BLOG",
  },
  {
    path: "#contact",
    display: "CONTACT",
  },
];

const Header = ({theme, toggleTheme}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            {/* <h2>YomIT</h2> */}
            <h2>
              <span className="yom">YOM</span>
              <span className="it">IT</span>
            </h2>
          </div>
          {/* =======  Navigation  ====== */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item">
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* =====  light mode ===== */}
          <div className="light__mode" >
            <span onClick={toggleTheme}>
              {theme === 'light-theme' ? (
                <span>
                  <i class="ri-moon-line"></i>Dark
                </span> 
                ) : (
                  <span>
                      <i class="ri-sun-line">Light</i>
                  </span>
                )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
