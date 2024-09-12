<<<<<<< HEAD
import React from 'react'
import '../../styles/hero.css'
import heroDarkImg from '../../images/hero-img.png'

const Hero = () => {
    return (
    <section className='hero__section'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h2>We're Creating Perfect</h2>
                    <h2>Digital Products To</h2>
                    <h2 className="highlight">Promote Your Brand</h2>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper ultrices velit, nec hendrerit neque.</p>
                
                <div className="hero__btns">
                    <button className="primary__btn">Get Started Now</button>
                    <button className="secondary__btn">Discover More</button>
                </div>

                <div className="hero__img">
                    <img src={heroDarkImg} alt="hero-img" />
                </div>
                </div>
=======
import React from "react";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>We're Creating Perfect</h2>
            <h2>Digital Products To</h2>
            <h2 className="highlight">Promote Your Brand</h2>
            <div className="hero__img"></div>
          </div>
>>>>>>> 719dbd36cc239dda354ffad6978f0e3fda76d62e
        </div>
      </div>
    </section>
  );
};

export default Hero;
