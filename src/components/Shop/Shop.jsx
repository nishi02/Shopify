import "../../styles/shop.scss";
import Navbar from "../NavBar/NavBar";
import Hero from "./Hero";
import Newsletter from "../Home/Newsletter";
import Footer from "../Footer/Footer";

function Shop() {
  return (
    <main className="shop-component">
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default Shop;
