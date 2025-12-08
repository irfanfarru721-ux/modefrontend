import React, { useEffect, useState } from 'react';
import API from '../api';
export default function CategoryFilter({ onSelect }){
  const [cats, setCats] = useState([]);
  useEffect(()=>{ API.get('/categories').then(r=>setCats(r.data)).catch(console.error); }, []);
  return (
    <div style={{ width:240 }}>
      <h4>Categories</h4>
      <div><button onClick={()=>onSelect(null)}>All</button></div>
      <ul style={{ paddingLeft:0 }}>
        {cats.map(c=>(
          <li key={c._id}>
            <div><button onClick={()=>onSelect(c._id)}>{c.name}</button></div>
            {c.subcategories?.length>0 && (<ul style={{ paddingLeft:12 }}>{c.subcategories.map(s=><li key={s._id}><button onClick={()=>onSelect(s._id)}>{s.name}</button></li>)}</ul>)}
          </li>
        ))}
      </ul>
    </div>
  );
}
