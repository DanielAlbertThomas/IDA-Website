import React from 'react';
import './Services.css';
// import aos from 'aos';
// import 'aos/dist/aos.css';

const Services = () => {
  return (
    <section className="sub-service">
      <div className="section-title1 text-center1">
        <div className="title-effect1">
          <div className="bar1 bar-top1"></div>
          <div className="bar1 bar-right1"></div>
          <div className="bar1 bar-bottom1"></div>
          <div className="bar1 bar-left1"></div>
        </div>
        <h3>Our Services</h3>
        <h1>‎ </h1>
      </div>

      <div className="items">
        <a>
          <div className="sub-box" data-aos="fade-up-right">
            <div className="sub-img">
              <img src="vr-glasses bw.png" alt="Vr glass" />
            </div>
            <h4>AUGMENT REALITY / VIRTUAL REALITY</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-right">
            <div className="sub-img">
              <img src="3d-film.png" alt="3d Animation" />
            </div>
            <h4>2D & 3D ANIMATION</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-left">
            <div className="sub-img">
              <img src="game-development.png" alt="Game Develop" />
            </div>
            <h4>GAME DEVELOPMENT</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-left">
            <div className="sub-img">
              <img src="web-design.png" alt="UI/UX" />
            </div>
            <h4>UI/UX DESIGN</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-right">
            <div className="sub-img">
              <img src="rendering.png" alt="brand Animation" />
            </div>
            <h4>3D MODELING AND RENDERING</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-right">
            <div className="sub-img">
              <img src="vector bk.png" alt="Corporate Videos" />
            </div>
            <h4>MOTION GRAPHICS</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-left">
            <div className="sub-img">
              <img src="responsive bk.png" alt="Web Design" />
            </div>
            <h4>WEB DESIGN</h4>
          </div>
        </a>

        <a>
          <div className="sub-box" data-aos="fade-up-left">
            <div className="sub-img">
              <img src="ar.png" alt="AR App" />
            </div>
            <h4>AR APP DEVELOPMENT</h4>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Services;