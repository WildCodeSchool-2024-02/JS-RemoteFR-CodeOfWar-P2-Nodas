import SocialNetwork from "../components/SocialNetwork";
import gamer from "../assets/images/gamer.png";
import CardTeam from "../components/CardTeam";
import team from "../data/teamData";

export default function About() {
  return (
    <>
      <h1 id="about1"> Noda Games</h1>
      <div className="descriptionName">
        <ul>
          <li>
            <b>N</b>ew <b>O</b>bjectif <b>D</b>éveloppement <b>A</b>venture
          </li>
          <li>
            Explore, discover, play: NODA revolutionizes your gaming experience!
          </li>
        </ul>
      </div>
      <div className="bgImage">
        <img src={gamer} alt="img" className="gif" />
      </div>
      <h2 id="about2">Our story</h2>
      <p>
        A team of gamers enthusiasts has created a games site. Together, they
        combined their skills to design and implement an exceptional user
        experience. Together, they are redefining video game discovery!
      </p>
      <section className="avatar">
        {team.map((user) => (
          <CardTeam key={user} user={user} />
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
