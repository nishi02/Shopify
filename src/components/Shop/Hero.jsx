import { website_name } from "../../constants";
import { Link } from "react-router-dom";

const categories = [
  {
    category: "Accessories",
    img: "/c1.jpg",
  },
  {
    category: "Android",
    img: "/c2.jpg",
  },
  {
    category: "Apparel",
    img: "/c3.jpg",
  },
  {
    category: "Backpacks",
    img: "/c4.jpg",
  },
  {
    category: "Bags",
    img: "/c5.jpg",
  },
  {
    category: "Bottles",
    img: "/c6.jpg",
  },
  {
    category: "Drinkware",
    img: "/c7.jpg",
  },
  {
    category: "Fun",
    img: "/c8.jpg",
  },
  {
    category: "Gift Cards",
    img: "/c9.jpg",
  },
  {
    category: "Google",
    img: "/c10.jpg",
  },
  {
    category: "Headgear",
    img: "/c11.jpg",
  },
  {
    category: "Housewares",
    img: "/c12.jpg",
  },
  {
    category: "Lifestyle",
    img: "/c13.jpg",
  },
  {
    category: "More Bags",
    img: "/c14.jpg",
  },
  {
    category: "Nest",
    img: "/c15.jpg",
  },
  {
    category: "Nest-Canada",
    img: "/c16.jpg",
  },
  {
    category: "Nest-USA",
    img: "/c17.jpg",
  },
  {
    category: "Notebooks & Journals",
    img: "/c18.jpg",
  },
  {
    category: "Office",
    img: "/c19.jpg",
  },
  {
    category: "Waze",
    img: "/c20.jpg",
  },
];

function Hero() {
  return (
    <section className="shop-hero">
      <div className="div1">
        <h1>
          <span>{website_name}</span>'s Categories
        </h1>
      </div>
      <div className="category-tab">
        {categories.map((cat, i) => (
          <Link to={`/category/${i + 1}`}>
            <div key={i}>
              <img src={cat.img} alt={cat.category + " image"} />
              <p>{cat.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Hero;
