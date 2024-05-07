import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "../../styles/category.scss";

export default function Category() {
  const { products: data, cid } = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="category-pro-list">
        <h2>
          <span>{data[0].CategoryName}</span> Category Products
        </h2>
        <div className="list">
          {data.map((product) => (
            <CategoryProductCard
              product={product}
              key={product.ProductID}
              cid={cid}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getCategoriesProduct({ params }) {
  const response = await fetch("http://127.0.0.1:5001/product/home", {
    method: "POST",
    body: JSON.stringify({ category_id: params.cid }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!data?.products) {
    throw new Response("Unable to fetch products of this category.", {
      status: 404,
    });
  }
  return { products: data.products, cid: params.cid };
}

function CategoryProductCard({ product, cid }) {
  return (
    <div className="product-category-card">
      <Link to={`/product/${product.ProductID}`}>
        {product.ImageName ? (
          <img
            src={`https://storage.googleapis.com/productimages_webtech_group3/${product.ProductID}/${product.ImageName}`}
            alt={product.ImageName + " image"}
          />
        ) : (
          <img src={`/c${cid}.jpg`} alt="Image not found" />
        )}
      </Link>
      <div>
        <p>{product.ProductName.replace(/"/g, "")}</p>
        <p>${parseInt(product.Price)}</p>
      </div>
    </div>
  );
}
