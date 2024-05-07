import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import "../../styles/product.scss";

const reviews = [
  {
    name: "John Doe",
    date: "April 20, 2024",
    profile: "r1.jpg",
    comment:
      "Great camera! I've been using it for a month now and I'm impressed with the quality of the photos.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    date: "May 1, 2024",
    profile: "r2.jpg",
    comment:
      "The best bike I've ever owned. Smooth ride and sturdy build. Highly recommend it!",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    date: "March 15, 2024",
    profile: "r3.jpg",
    comment:
      "The perfume has a lovely scent, but it fades quickly. Wish it lasted longer.",
    rating: 1,
  },
];

export default function Reviews({ data }) {
  const reviews = data[1].reviews;
  return (
    <div className="reviews-component">
      <h2>
        Product <span>Reviews</span>.
      </h2>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review, i) => (
            <ReviewCard review={review} key={i} />
          ))}
        </div>
      ) : (
        <p className="noReview">No reviews available for this product yet.</p>
      )}
    </div>
  );
}

export function ReviewCard({ review }) {
  const stars = [];
  const { rating, Username, Review } = review;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar className="rated" key={i} />);
    } else {
      stars.push(<FaStar className="unrated" key={i} />);
    }
  }

  return (
    <div className="review-card">
      <div className="profile">
        <div>
          <p>{Username}</p>
          <p>{stars}</p>
        </div>
      </div>
      <div>{Review}</div>
    </div>
  );
}
