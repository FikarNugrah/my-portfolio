import "../Style/Footer.css";

export default function Footer() {
  return (
    <div class="footer-content">
      <p>Portfolio | Yafikar Nugrah P</p>
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
      <a href="#about" className="a-about">
        <li className="about-foot">About me ?</li>
      </a>
    </div>
  );
}
