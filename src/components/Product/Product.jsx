import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../styles/product.scss";
import { useEffect, useState } from "react";
import Reviews from "./Reviews";
import Notification from "../Notification/Notification";
import { useDispatch } from "react-redux";
import { addCart } from "../../State/Reducers";

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

export default function Product() {
  const data = useLoaderData();
  return (
    <div>
      <NavBar />
      <div className="product-component-main">
        <ProductCard data={data} />
      </div>
      <Reviews data={data} />
      <Footer />
    </div>
  );
}

export async function getProduct({ params }) {
  const response = await fetch(`http://127.0.0.1:5001/product/${params.pid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!data) {
    throw new Response("Unable to get the product details at this moment.", {
      status: 404,
    });
  }
  return data;
}

export function ProductCard({ data }) {
  console.log(data);
  let rating;
  let totalRating = 0;
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  for (let i = 0; i < data[1].reviews.length; i++) {
    totalRating += data[1].reviews[i].rating;
  }
  rating = totalRating / data[1].reviews.length;
  const stars = [];
  const [selImage, setSelImage] = useState(null);
  const [msgs, setMsgs] = useState("");

  useEffect(() => {
    if (!data[1].images.length > 0) {
      setSelImage(
        categories.find(
          (category) => category.category === data[1].product.tempCategory
        ).img
      );
    } else {
      setSelImage(`IMG_${data[1].product.ProductID}_1.jpg`);
    }
  }, []);

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar className="rated" key={i} />);
    } else {
      stars.push(<FaStar className="unrated" key={i} />);
    }
  }

  function handleAddToCart(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    if (!token) {
      return setMsg("You have to login to add products.");
    }
    let img;
    if (!data[1].images.length > 0) {
      img = categories.find(
        (category) => category.category === data[1].product.tempCategory
      ).img;
    } else {
      img = `https://storage.googleapis.com/productimages_webtech_group3/${data[1].product.ProductID}/${selImage}`;
    }
    dispatch(
      addCart({
        img,
        name: data[1].product.ProductName.replace(/"/g, ""),
        price: parseInt(data[1].product.Price),
      })
    );
    setMsg("Product added to cart.");
  }

  return (
    <div className="product-card-component">
      <div className="img-part">
        {data[1].images.length > 0 ? (
          <img
            src={`https://storage.googleapis.com/productimages_webtech_group3/${data[1].product.ProductID}/${selImage}`}
            alt="Laptop image"
          />
        ) : (
          <img
            src={
              categories.find(
                (category) => category.category === data[1].product.tempCategory
              ).img
            }
            alt="No image found"
          />
        )}
        <div>
          {data[1].images.map((image) => {
            if (image != selImage) {
              return (
                <img
                  key={image.ImageIdentifier}
                  src={`https://storage.googleapis.com/productimages_webtech_group3/${data[1].product.ProductID}/${image.ProductID}`}
                  alt="product image"
                  onClick={() => setSelImage(image.ProductID)}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="pro-detail">
        <div>
          <h2>{data[1].product.ProductName.replace(/"/g, "")}</h2>
          <div>
            {stars}
            <p>
              {data[1].reviews.length > 0
                ? `${data[1].reviews.length} Reviews`
                : "No Reviews"}{" "}
            </p>
          </div>
        </div>
        <hr />
        <p className="price">${parseInt(data[1].product.Price)}</p>
        <hr />
        <p>{data[1].product.ProductDesc}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {msg && <Notification msg={msg} setMsg={setMsg} />}
      </div>
    </div>
  );
}
