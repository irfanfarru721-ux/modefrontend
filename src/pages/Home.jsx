import React, { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    API.get("/products").then(r => setProducts(r.data)).catch(console.error);
    API.get("/vendors").then(r => setVendors(r.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Vendors</h2>
      <div style={{display:'flex',gap:12,marginBottom:20}}>
        {vendors.map(v => (
          <Link key={v._id} to={`/vendor/${v._id}`} style={{padding:12,border:'1px solid #eee'}}>{v.name}</Link>
        ))}
      </div>

      <h2>Products</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:16}}>
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
