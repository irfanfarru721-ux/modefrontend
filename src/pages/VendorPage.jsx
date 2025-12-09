import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import ProductCard from "../components/ProductCard";

export default function VendorPage() {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    if(!id) return;
    API.get(`/vendors/${id}`).then(r => setVendor(r.data)).catch(console.error);
    API.get(`/products?vendor=${id}`).then(r => setProducts(r.data)).catch(console.error);
  }, [id]);

  if(!vendor) return <div>Loading vendor...</div>;
  return (
    <div>
      <h2>{vendor.name}</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16}}>
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
