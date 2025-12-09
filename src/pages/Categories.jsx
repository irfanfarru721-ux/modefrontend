import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    { name: "Restaurants", type: "restaurant" },
    { name: "Grocery", type: "grocery" },
    { name: "Fruits", type: "fruits" },
    { name: "Meat", type: "meat" },
    { name: "Biryani", type: "biryani" },
    { name: "Bakery", type: "bakery" },
  ];

  return (
    <div>
      <h2>Categories</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {categories.map((c) => (
          <div
            key={c.type}
            style={{
              width: "180px",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/vendors?type=${c.type}`)}
          >
            <h3>{c.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
