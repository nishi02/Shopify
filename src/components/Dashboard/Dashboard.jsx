import Navbar from "../NavBar/NavBar";
import "../../styles/dashboard.scss";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Notification from "../Notification/Notification";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";

const btns = [
  {
    text: "Logout",
    to: "/",
  },
];

export default function Dashboard() {
  const data = useLoaderData();
  const [updatedForm, setUpdatedForm] = useState(false);
  const myCart = useSelector((state) => state.myCart);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleDeleteAcc(e) {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/user/deleteProfile", {
      method: "POST",
      body: JSON.stringify({ email: "testemail@gmail.com" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!data) {
      setMsg("Try again later.");
    }
    sessionStorage.removeItem("token");
    setMsg("Your account deletion process is initiated.");
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }

  return (
    <div>
      <Navbar btns={btns} />
      <div className="dash-component">
        <div>
          <img src="/hi.gif" alt="Hi gif" />
          <div>
            <h2>
              <span> Hi!</span> {data}
            </h2>
            <p>Step into the vibrant realm of our dashboard.</p>
          </div>
        </div>
        <div>
          <button onClick={() => setUpdatedForm(true)}>Update User</button>
          <button onClick={handleDeleteAcc}>Delete Account</button>
          <button>Change Password</button>
          {myCart.length > 0 ? (
            <Link to="/cart">
              <button>My Cart</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        {msg && <Notification msg={msg} setMsg={setMsg} />}
        <div className="order-his">
          <h2>
            <span>Orders</span> History
          </h2>
          <p>No order has been placed yet.</p>
        </div>
      </div>
      <Footer />

      {updatedForm && <UpdatedFormComponent setUpdatedForm={setUpdatedForm} />}
    </div>
  );
}

export async function getUserDetails() {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Response("The user is not loggedIn.", { status: 404 });
  }
  const response = await fetch("http://localhost:5000/user/getUsername", {
    method: "POST",
    body: JSON.stringify({ id: token }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.username) {
    return data.username;
  } else {
    throw new Response("Unable to login right now.", { status: 500 });
  }
}

function UpdatedFormComponent({ setUpdatedForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [msg, setMsg] = useState("");

  async function handleUpdateUser(e) {
    e.preventDefault();
    if (!firstName && !lastName && !email && !gender) {
      return setMsg("No field is filled to update.");
    }
    if (!email && (lastName || firstName || gender)) {
      return setMsg("Email is mandatory to update any field.");
    }
    let toUpdate = {};
    if (firstName) {
      toUpdate.first_name = firstName;
    }
    if (lastName) {
      toUpdate.last_name = lastName;
    }
    if (gender) {
      toUpdate.gender = gender;
    }
    toUpdate.email = email;

    const token = sessionStorage.getItem("token");
    const response = await fetch("http://127.0.0.1:5000/user/update", {
      method: "POST",
      body: JSON.stringify({ ...toUpdate }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
    <div className="popUp-bg">
      <div className="popup">
        <div>
          <h2>Update Profile</h2>
          <button onClick={() => setUpdatedForm(false)}>Close</button>
        </div>
        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name here.."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name here.."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email here.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select the gender here</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <button onClick={handleUpdateUser}>Update Profile</button>
        </div>
      </div>
      {msg && <Notification msg={msg} setMsg={setMsg} />}
    </div>
  );
}

async function changePassword() {
  return <div>Chnage Password</div>;
}
