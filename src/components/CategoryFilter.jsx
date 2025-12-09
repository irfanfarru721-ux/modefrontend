import React from "react";

export default function CategoryFilter({ categories, onSelect }) {
  return (
    <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:12}}>
      <button onClick={()=>onSelect(null)} style={{padding:8}}>All</button>
      {categories?.map(c => (
        <button key={c._id} onClick={()=>onSelect(c._id)} style={{padding:8}}>
          {c.name}
        </button>
      ))}
    </div>
  );
}
