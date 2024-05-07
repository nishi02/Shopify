import { website_name } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.scss";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";
import { useState } from "react";

const btns = [
  {
    to: "/register",
    text: "Register",
  },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return setMsg("All fields are required.");
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      return setMsg("Please enter a valid email address.");
    }

    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setMsg(data.message);
    if (data.session) {
      sessionStorage.setItem("token", data.session);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    }
  }

  return (
    <div>
      <Navbar btns={btns} />
      <div className="login-page">
        <h2>
          <span>{website_name}'s</span> Login Portal
        </h2>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here..."
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password here..."
            />
          </div>
          <p>
            Are you a new Customer?{" "}
            <span>
              <Link to="/register">Register here</Link>
            </span>
          </p>
          <button onClick={handleLogin}>Login</button>
          {msg && <Notification msg={msg} setMsg={setMsg} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
