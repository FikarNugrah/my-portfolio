import Video from "../Assets/Outer Chill.gif";
import "../Style/Hero.css";

export default function Hero() {
  return (
    <div className="container">
      <img src={Video} alt="hero-img" className="hero-img" />
      <div className="opac"></div>
      <div className="bgc">
        <div className="hero-content">
          <div className="intro">
            <h1>- I'M -</h1>
            <h2>VON RIESSFELD</h2>
          </div>
          <div className="job-area">
            <div className="job">
              <a href="#stdn">
                <h5>Senior High School</h5>
              </a>
              <span>|</span>
              <a href="#webdev">
                <h5>Web Devoloper</h5>
              </a>
            </div>
          </div>
          <div className="media">
            <h4>VISIT ME : </h4>
            <ul className="social-media">
              <li>
                <a href="https://www.instagram.com/sanc_fikar/?hl=id">
                  <i class="ig fa-brands fa-instagram" title="INSTAGRAM"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCfd3WGWC8o3-6T1FlnuCVKw">
                  <i class="yt fa-brands fa-youtube" title="YOU TUBE"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yafikar.paskah">
                  <i class="fb fa-brands fa-facebook" title="FACEBOOK"></i>
                </a>
              </li>
            </ul>
            <a href="#contact">
              <button>CONTACT ME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
