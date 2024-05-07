import { useState } from "react";
import Notification from "../Notification/Notification";

function Newsletter() {
  const [msg, setMsg] = useState("");

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");

    if (!token)
      return setMsg("You have to logIn to subscribe to our newsletter.");
    setMsg("Successfully subscribed to our newsletter!");
  }

  return (
    <section className="newsletter-component">
      <div>
        <h2>Newsletter</h2>
        <p>
          Stay in the Loop! Subscribe to Our Newsletter for Exclusive Offers,
          Product Updates, and More.
        </p>
      </div>
      <button onClick={handleNewsletterSubmit}>Subscribe</button>
      {msg && <Notification msg={msg} setMsg={setMsg} />}
    </section>
  );
}

export default Newsletter;
