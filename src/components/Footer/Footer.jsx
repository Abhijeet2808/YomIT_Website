import React from 'react'
import "./footer.css";

const quickLinks01 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Analytics'
    },
    {
        path:'#',
        display:'Commerce'
    },
]

const Footer = () => {
  return <footer className="footer">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>Digncy</h2>
                <p className="description">Grow with us</p>

                <p className="small_text description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis semper ultrices velit
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis semper ultrices velit
                    Lorem ipsum dolor sit amet, consectetur
                </p>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">Solution</h3>
                <ul className="quick__links">
                    {quickLinks01.map((item,index) => (
                        <li className="quick__link-item" key={index}>
                            <a href={item.path}>{item.display}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  </footer>
}

export default Footer
