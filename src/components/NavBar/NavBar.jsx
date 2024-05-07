import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { website_name } from "../../constants";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar({ btns = [] }) {
  const [open, setOpen] = useState(false);
  const myCart = useSelector((state) => state.myCart);

  function isLoggedIn() {
    const token = sessionStorage.getItem("token");
    if (!token) return false;
    return true;
  }

  function handleLogout(text) {
    if (text == "Logout") {
      sessionStorage.removeItem("token");
    }
  }

  return (
    <nav className="nav-bar-component">
      <div className="web-name">
        <img src="/logo.png" alt="Logo Image" />
        <Link to="/">
          <p>{website_name}</p>
        </Link>
      </div>
      <p className="menu-bar-btn" onClick={() => setOpen(true)}>
        <TiThMenu />
      </p>
      <div className={`links ${open ? "open" : ""}`}>
        <button className="close-bar-btn" onClick={() => setOpen(false)}>
          Close
        </button>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
        <div className="btns">
          {btns.length ? (
            btns.map((btn, i) => (
              <Link to={btn.to} key={i}>
                <button onClick={() => handleLogout(btn.text)}>
                  {btn.text}
                </button>
              </Link>
            ))
          ) : isLoggedIn() ? (
            <div className="btns">
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>
              {myCart.length > 0 ? (
                <Link to="/cart">
                  <button>My Cart</button>
                </Link>
              ) : (
                ""
              )}
            </div>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
