import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "app-contable-profesional-v1";

const defaultData = {
  business: {
    name: "Mi Negocio",
    nit: "900123456",
    phone: "3000000000",
    email: "negocio@demo.com",
    address: "Bogotá, Colombia",
    invoicePrefix: "FV",
    lowStockThreshold: 5,
  },
  products: [],
  clients: [],
  suppliers: [],
  expenses: [],
  extraCosts: [],
  sales: [],
  payments: [],
};

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultData;
  } catch {
    return defaultData;
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function App() {
  const [data, setData] = useState(defaultData);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    setData(loadData());
  }, []);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const addProduct = () => {
    if (!productName) return;
    setData((prev) => ({
      ...prev,
      products: [...prev.products, { id: Date.now(), name: productName }],
    }));
    setProductName("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.business.name}</h1>

      <h2>Productos</h2>

      <input
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={addProduct}>Agregar</button>

      <ul>
        {data.products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}