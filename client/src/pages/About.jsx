import SocialNetwork from "../components/SocialNetwork";
import gamer from "../assets/images/gamer.png";
import CardTeam from "../components/CardTeam";
import team from "../data/teamData";
import networkLink from "../data/dataNetwork";

export default function About() {
  return (
    <div className="aboutus">
      <h1 className="crew_name">Noda Games</h1>
      <div className="descriptionName">
        <ul>
          <li>
            <b>N</b>ew <b>O</b>bjective <b>D</b>evelopment <b>A</b>venture
          </li>
          <li>
            Explore, discover, play: <b>NODA</b> revolutionizes your gaming
            experience!
          </li>
        </ul>
      </div>
      <img src={gamer} alt="img" className="gif" />
      <div className="nodas">
        <section className="story-network">
          <h2 className="Our_story second_title">Our story</h2>
          <p className="textAbout">
            A team of gamers enthusiasts has created a games site. Together,
            they combined their skills to design and implement an exceptional
            user experience. Together, they are redefining video game discovery!
          </p>
          <h2 className="follow-us second_title">Follow us</h2>
          <article className="network_link">
            {networkLink.map((network) => (
              <SocialNetwork key={network.id} network={network} />
            ))}
          </article>
        </section>
        <section className="avatar">
          {team.map((user) => (
            <CardTeam key={user.id} user={user} />
          ))}
        </section>
      </div>

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
    </div>
  );
}
