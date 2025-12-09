import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#eee",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/vendors">All Vendors</Link>
      <Link to="/auth">Login</Link>
    </nav>
  );
}
