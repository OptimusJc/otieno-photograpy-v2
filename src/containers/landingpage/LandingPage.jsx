import landingLogo from "../../assets/logo/otieno_logo_black.png";
import "./landingpage.scss";

import { Link } from "react-router-dom";

const Entry = () => {
  return (
    <div className="landing-page">
      <img
        className="landing-page-image"
        src={landingLogo}
        alt="landing logo"
      />
      <Link to="/home">enter</Link>
    </div>
  );
};

export default Entry;
