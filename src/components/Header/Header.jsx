import React from "react";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Services",
  },
  {
    path: "#casestudy",
    display: "Case Study",
  },
  {
    path: "#blog",
    display: "Blog",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>YomIT</h2>
            <p>Growt with us</p>
          </div>
          {/* =======  Navigation  ====== */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, imdex) => (
                <li className="menu__item">
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* =====  light mode ===== */}
          <div className="light__mode">
            <span>
              <i class="ri-sun-line">Light Mode</i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
