import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Nav from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import VendorList from "./pages/VendorList";
import VendorPage from "./pages/VendorPage";
import Categories from "./pages/Categories";

export default function App() {
  return (
    <div>
      <Nav />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/auth" element={<Auth />} />

          {/* Vendor Routes */}
          <Route path="/vendors" element={<VendorList />} />
          <Route path="/vendors/:category" element={<VendorList />} />
          <Route path="/vendor/:id" element={<VendorPage />} />

          <Route path="/categories" element={<Categories />} />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vendor/dashboard"
            element={
              <ProtectedRoute>
                <VendorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
