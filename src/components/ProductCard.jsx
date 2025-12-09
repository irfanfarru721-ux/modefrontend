import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{width:220,border:'1px solid #eee',borderRadius:8,padding:12}}>
      <Link to={`/product/${product._id}`} style={{textDecoration:'none',color:'inherit'}}>
        <div style={{height:140,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
          <img src={product.image || "/placeholder.png"} alt={product.name} style={{maxWidth:'100%',maxHeight:'100%'}} />
        </div>
        <h4 style={{margin:'8px 0'}}>{product.name}</h4>
        <div>₹{product.price}</div>
      </Link>
    </div>
  );
}
