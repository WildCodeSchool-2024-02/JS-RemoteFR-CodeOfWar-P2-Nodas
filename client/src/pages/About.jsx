import { Link } from "react-router-dom";
import SocialNetwork from "../components/SocialNetwork";
import gamer from "../assets/images/gamer.png";
import team from "../data/teamData";

export default function About() {
  return (
    <>
      <h1 id="about1"> Noda Games</h1>
      <div className="descriptionName">
        <ul>
          <li>
            <b>N</b>ew : Introduction
          </li>
          <li>
            <b>O</b>bjectif : Missions
          </li>
          <li>
            <b>D</b>éveloppement : .
          </li>
          <li>
            <b>A</b>venture : Exploration
          </li>
        </ul>
      </div>
      <div className="bgImage">
        <img src={gamer} alt="img" className="gif" />
      </div>
      <h2 id="about2">Our story</h2>
      <p>Equipe de DEV monstrueuse ! </p>
      <section className="avatar">
        {team.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt={`Avatar ${user.name}`} />
            <div className="userDetails">
              <h3 id="about3">{user.name}</h3>
              <ul className="listUser">
                <li>Age : {user.age} years old</li>
                <li>Description : {user.description}</li>
                <li>
                  jeu préféré :{" "}
                  <Link to={user.pageUrl} target="_blank" rel="noreferrer">
                    {user.favoriteGame}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
      <h2 id="about2">Follow us</h2>
      <SocialNetwork />

      <p className="copyright">
        Noda Gaming © 2024 -{" "}
        <a
          href="https://entreprendre.service-public.fr/vosdroits/F33527"
          target="_blank"
          rel="noreferrer"
        >
          CGV
        </a>
      </p>
    </>
  );
}
