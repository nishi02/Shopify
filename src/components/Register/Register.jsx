import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import { website_name } from "../../constants";
import { Link, useLoaderData } from "react-router-dom";
import "../../styles/register.scss";
import { useState } from "react";
import Notification from "../Notification/Notification";

const btns = [
  {
    to: "/login",
    text: "Login",
  },
];

export default function Register() {
  const { countries } = useLoaderData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [msg, setMsg] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !location ||
      !gender
    ) {
      return setMsg("All fields are required to register.");
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      return setMsg("Please enter a valid email address.");
    }

    if (password.length < 6) {
      return setMsg("Password should be atleast 6 characters.");
    }

    const response = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        password,
        email,
        location,
        gender,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setMsg(data.message);
    if (data.session) {
      sessionStorage.setItem("token", 18286);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  }

  return (
    <div>
      <Navbar btns={btns} />
      <div className="register-page">
        <h2>
          <span>{website_name}'s</span> Registration Portal
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
              placeholder="Enter your email here.."
            />
          </div>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name here.."
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name here.."
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {countries.map((country, i) => {
                if (country != "Select your country") {
                  return (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  );
                }
                return (
                  <option key={i} value="">
                    {country}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" selected>
                Select your gender here
              </option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password here.."
            />
          </div>
          <p>
            Are you an existing Customer?{" "}
            <span>
              <Link to="/login">Login here</Link>
            </span>
          </p>
          <button onClick={handleRegister}>Register</button>
          {msg && <Notification msg={msg} setMsg={setMsg} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getLocation() {
  const response = await fetch(
    "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
  );
  const data = await response.text();
  const countriesArray = data
    .split("\n")
    .filter((country) => country.trim() !== "");
  return { countries: ["Select your country", ...countriesArray] };
}
