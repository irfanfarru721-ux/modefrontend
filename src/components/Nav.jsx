import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Nav(){
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const logout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); navigate('/'); };
  return (
    <nav style={{ padding:12, borderBottom:'1px solid #eee', display:'flex', gap:12 }}>
      <Link to='/'>Home</Link>
      {!user && <Link to='/auth'>Login / Register</Link>}
      {user && <span>Hi, {user.name}</span>}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
