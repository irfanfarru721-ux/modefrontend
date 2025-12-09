import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import api from "../api/axios";

export default function VendorList() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");

  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVendors = async () => {
      try {
        const res = await api.get(`/vendors${type ? `?type=${type}` : ""}`);
        setVendors(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    loadVendors();
  }, [type]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>
        {type ? type.toUpperCase() : "All Vendors"}
      </h2>

      {vendors.length === 0 && <p>No vendors found</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {vendors.map((v) => (
          <Link
            key={v._id}
            to={`/vendor/${v._id}`}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              width: "240px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h3>{v.name}</h3>
            <p>Type: {v.type}</p>
            <p>{v.address}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
