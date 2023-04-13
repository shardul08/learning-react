import { APP_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <img alt="logo" className="logo" src={APP_LOGO_URL} />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
