import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../styles/about.scss";
import { website_name } from "../../constants";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <h2>
          About <span>Us</span>.
        </h2>
        <p>
          Welcome to <span>{website_name}</span>, your one-stop destination for
          all your shopping needs. We are committed to providing you with the
          best products and an exceptional shopping experience.
        </p>
        <h3>
          Our <span>Mission</span>.
        </h3>
        <p>
          At <span>{website_name}</span>, our mission is to make online shopping
          convenient, enjoyable, and hassle-free for our customers. We strive to
          offer a wide range of high-quality products at competitive prices.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
