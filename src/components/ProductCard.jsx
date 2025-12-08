import React from 'react';
import { Link } from 'react-router-dom';
export default function ProductCard({ product }){
  return (
    <div style={{ border:'1px solid #ddd', padding:12, width:220, borderRadius:8 }}>
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <p>Vendor: {product.vendor?.name || '—'}</p>
      <Link to={`/product/${product._id}`}>View</Link>
    </div>
  );
}
