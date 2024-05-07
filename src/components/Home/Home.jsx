import "../../styles/home.scss";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Hero from "./Hero";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <main className="home-component">
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default Home;
