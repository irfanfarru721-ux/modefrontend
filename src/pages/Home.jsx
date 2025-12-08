import React, { useEffect, useState } from 'react';
import API from '../api';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
export default function Home(){
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState(null);
  useEffect(()=>{ fetchProducts(); }, [cat]);
  function fetchProducts(){ const url = cat ? `/products?categoryId=${cat}` : '/products'; API.get(url).then(r=>setProducts(r.data)).catch(console.error); }
  return (
    <div style={{ display:'flex', gap:20 }}>
      <CategoryFilter onSelect={setCat} />
      <div style={{ flex:1 }}>
        <h2>Products</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,220px)', gap:12 }}>
          {products.map(p=> <ProductCard key={p._id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
