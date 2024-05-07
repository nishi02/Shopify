import { Link } from "react-router-dom";
import "../../styles/footer.scss";
import {
  company_address_1,
  company_address_2,
  company_career_page,
  company_press_page,
  instagram_handle,
  linkedin_handle,
  twitter_handle,
} from "../../constants";

function Footer() {
  return (
    <footer className="footer">
      <div className="fp1">
        <img src="/logo.png" alt="" />
        <p>
          {company_address_1}
          <br />
          {company_address_2}
          <br />
          &copy; Copyright 2024 | All rights reserved.
        </p>
      </div>
      <div className="fp2">
        <h2>MAIN MENU</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
      <div>
        <h2>FIND US ON</h2>
        <div>
          <a target="_blank" href={twitter_handle}>
            Twitter
          </a>
          <a target="_blank" href={linkedin_handle}>
            LinkedIn
          </a>
          <a target="_blank" href={instagram_handle}>
            Instagram
          </a>
        </div>
      </div>
      <div>
        <h2>The Company</h2>
        <div>
          <a target="_blank" href={company_career_page}>
            Careers
          </a>
          <a target="_blank" href={company_press_page}>
            Press
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
