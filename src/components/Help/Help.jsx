import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import "../../styles/help.scss";
import { company_email } from "../../constants";

function Help() {
  return (
    <div>
      <Navbar />
      <div className="help">
        <h2>
          Need <span>Help</span>?
        </h2>
        <ul>
          <li>
            How do I place an <span>order</span>?
          </li>
          <li>
            What <span>payment</span> methods do you accept?
          </li>
          <li>
            Can I <span>track</span> my order?
          </li>
          <li>
            How do I <span>return</span> or exchange an item?
          </li>
        </ul>
        <p>
          You can reach us via email at{" "}
          <a href={`mailto:${company_email}`}>
            <span>{company_email}</span>
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Help;
