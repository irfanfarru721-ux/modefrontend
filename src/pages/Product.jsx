import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
export default function Product(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(()=>{ API.get(`/products/${id}`).then(r=>setProduct(r.data)).catch(console.error); }, [id]);
  if(!product) return <div>Loading...</div>;
  return (
    <div style={{ maxWidth:800 }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <p>Vendor: {product.vendor?.name}</p>
    </div>
  );
}
