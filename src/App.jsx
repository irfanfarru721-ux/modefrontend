import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Auth from './pages/Auth';
import Nav from './components/Nav';
import Cart from './pages/Cart';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

export default function App(){ return (
  <div>
    <Nav />
    <div style={{ padding: 20 }}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/vendor' element={<ProtectedRoute><VendorDashboard/></ProtectedRoute>} />
        <Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>} />
      </Routes>
    </div>
  </div>
); }
