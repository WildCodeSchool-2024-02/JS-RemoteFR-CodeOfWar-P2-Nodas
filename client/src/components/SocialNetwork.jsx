import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SocialNetwork({ network }) {
  return (
    <div className="iconsSocials">
      <Link to={network.networkUrl} target="_blank" rel="noreferrer">
        <img src={network.networkImg} alt={network.networkName} />{" "}
      </Link>
    </div>
  );
}

SocialNetwork.propTypes = {
  network: PropTypes.shape({
    id: PropTypes.number.isRequired,
    networkUrl: PropTypes.string.isRequired,
    networkImg: PropTypes.string.isRequired,
    networkName: PropTypes.string.isRequired,
  }).isRequired,
};
