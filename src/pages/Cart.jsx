import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> setCart(JSON.parse(localStorage.getItem("cart")||"[]")), []);

  const remove = (i) => {
    const c = [...cart]; c.splice(i,1);
    setCart(c); localStorage.setItem("cart", JSON.stringify(c));
  };

  const total = cart.reduce((s,i)=> s + ((i.item.price||0) * i.qty), 0);

  return (
    <div style={{maxWidth:900,margin:'20px auto'}}>
      <h2>Cart</h2>
      {cart.length===0 && <div>Your cart is empty</div>}
      {cart.map((c,i)=>(
        <div key={i} style={{display:'flex',gap:12,alignItems:'center',borderBottom:'1px solid #eee',padding:12}}>
          <img src={c.item.image||"/placeholder.png"} style={{width:80}} />
          <div style={{flex:1}}>
            <div>{c.item.name}</div>
            <div>Qty: {c.qty}</div>
          </div>
          <div>₹{(c.item.price||0) * c.qty}</div>
          <button onClick={()=>remove(i)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={()=>{ alert("Checkout coming soon"); navigate("/"); }}>Checkout</button>
    </div>
  );
}
