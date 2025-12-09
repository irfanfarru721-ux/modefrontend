import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/vendors").then(res => setVendors(res.data));
    API.get("/categories").then(res => setCategories(res.data));
  }, []);

  // Load products when vendor / category changes
  useEffect(() => {
    if (!selectedVendor) return;

    let url = `/products?vendor=${selectedVendor}`;
    if (selectedCategory) url += `&category=${selectedCategory}`;

    API.get(url).then(res => setProducts(res.data));
  }, [selectedVendor, selectedCategory]);

  return (
    <div>
      <h2>Vendors</h2>

      <select onChange={(e) => setSelectedVendor(e.target.value)}>
        <option value="">Select Vendor</option>
        {vendors.map(v => (
          <option key={v._id} value={v._id}>{v.name}</option>
        ))}
      </select>

      {selectedVendor && (
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
      )}

      <h3>Products</h3>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        products.map(p => (
          <div key={p._id}>
            <strong>{p.name}</strong> - {p.category?.name}
          </div>
        ))
      )}
    </div>
  );
}
