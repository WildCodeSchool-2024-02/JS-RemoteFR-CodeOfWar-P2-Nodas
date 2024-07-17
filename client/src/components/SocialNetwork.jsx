import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SocialNetwork({ network }) {
  return (
    <div className="iconsSocials" key={network.id} >
      <Link to={network.networkUrl} target="_blank" rel="noreferrer">
        <img src={network.networkImg} alt={network.networkName} />{" "}
      </Link>
    </div>
  );
}

SocialNetwork.propTypes = {
  network: PropTypes.string.isRequired,
};
