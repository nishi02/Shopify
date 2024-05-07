// import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FeatureProducts({ data }) {
  const { data1: p1, data2: p2, data3: p3 } = data;
  return (
    <section className="featured-section">
      <div>
        {/* <FaCaretLeft /> */}
        <div>
          <div>
            <Link to={`/product/${p1[1].product.ProductID}`}>
              <img
                src={`https://storage.googleapis.com/productimages_webtech_group3/${p1[1].product.ProductID}/IMG_${p1[1].product.ProductID}_1.jpg`}
                alt="h1"
              />
            </Link>
            <div>
              <p>{p1[1].product.ProductName.replace(/"/g, "")}</p>
              <p>${parseInt(p1[1].product.Price)}</p>
            </div>
          </div>
          <div>
            <Link to={`/product/${p2[1].product.ProductID}`}>
              <img
                src={`https://storage.googleapis.com/productimages_webtech_group3/${p2[1].product.ProductID}/IMG_${p2[1].product.ProductID}_1.jpg`}
                alt="h1"
              />
            </Link>
            <div>
              <p>{p2[1].product.ProductName.replace(/"/g, "")}</p>
              <p>${parseInt(p2[1].product.Price)}</p>
            </div>
          </div>
          <div>
            <Link to={`/product/${p3[1].product.ProductID}`}>
              <img
                src={`https://storage.googleapis.com/productimages_webtech_group3/${p3[1].product.ProductID}/IMG_${p3[1].product.ProductID}_1.jpg`}
                alt="h1"
              />
            </Link>
            <div>
              <p>{p3[1].product.ProductName.replace(/"/g, "")}</p>
              <p>${parseInt(p3[1].product.Price)}</p>
            </div>
          </div>
        </div>
        {/* <FaCaretRight /> */}
      </div>
    </section>
  );
}
