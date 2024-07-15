import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import tiktok from "../assets/images/tiktok.png";
import discord from "../assets/images/discord.png";

export default function SocialNetwork() {
  return (
    <div className="iconsSocials">
      <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="Logo Instagram" />
      </Link>
      <Link to="https://www.tiktok.com/" target="_blank" rel="noreferrer">
        <img src={tiktok} alt="Logo TikTok" />
      </Link>
      <Link to="https://x.com/" target="_blank" rel="noreferrer">
        <img src={twitter} alt="Logo Twitter" />
      </Link>
      <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <img src={facebook} alt="Logo Facebook" />
      </Link>
      <Link to="https://discord.com/" target="_blank" rel="noreferrer">
        <img src={discord} alt="Logo Discord" />
      </Link>
    </div>
  );
}
