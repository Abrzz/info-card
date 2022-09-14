import globe from "../img/globe.svg";
import "../index.css";

export default function Header() {
  return (
    <div className="header-container">
      <img src={globe} alt="Globe" className="header-logo-img" />
      <span className="header-logo-text">My travel journal</span>
    </div>
  );
}
