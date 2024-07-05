import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import tiktok from "../assets/images/tiktok.png";
import home from "../assets/images/home.png";

export default function Footer() {
  return (
    <>
      <div className="animated-border" />
      <footer className="Footer">
        <p className="copyright">Noda Gaming © 2024</p>
        <div className="iconHome">
          <Link to="/">
            <img src={home} alt="Logo Home" />
          </Link>
        </div>
        <section className="iconsSocials">
          <div>
            <Link to="https://www.instagram.com/">
              <img src={instagram} alt="Logo Instagram" />
            </Link>
            <Link to="https://www.tiktok.com/">
              <img src={tiktok} alt="Logo TikTok" />
            </Link>
            <Link to="https://x.com/">
              <img src={twitter} alt="Logo Twitter" />
            </Link>
            <Link to="https://www.facebook.com/">
              <img src={facebook} alt="Logo Facebook" />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
}
