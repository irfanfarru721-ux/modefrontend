import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";   // ← FIXED

export default function Product() {
  const { id } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    if (!id) return;
    API.get(`/products/${id}`)
      .then(r => setP(r.data))
      .catch(console.error);
  }, [id]);

  if (!p) return <div>Loading...</div>;

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div style={{ width: 360 }}>
        <img
          src={p.image || "/placeholder.png"}
          alt={p.name}
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <h2>{p.name}</h2>
        <p>{p.description}</p>
        <h3>₹{p.price}</h3>

        <button
          onClick={() => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            cart.push({ product: p._id, qty: 1, item: p });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to cart");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
