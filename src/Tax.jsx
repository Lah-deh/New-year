import { useState } from "react";

export default function Tax() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    let annual = parseFloat(income);
    if (isNaN(annual) || annual <= 0) {
      setTax("Enter a valid income");
      return;
    }

    
    const bands = [
      { limit: 800_000, rate: 0 },
      { limit: 3_000_000, rate: 0.15 },
      { limit: 12_000_000, rate: 0.18 },
      { limit: 25_000_000, rate: 0.21 },
      { limit: 50_000_000, rate: 0.23 },
      { limit: Infinity, rate: 0.25 },
    ];

    let remaining = annual;
    let taxTotal = 0;
    let lowerLimit = 0;

    for (let i = 0; i < bands.length; i++) {
      const { limit, rate } = bands[i];
      if (annual > lowerLimit) {
        const taxable = Math.min(remaining, limit - lowerLimit);
        taxTotal += taxable * rate;
        remaining -= taxable;
      }
      lowerLimit = limit;
      if (remaining <= 0) break;
    }

    setTax(taxTotal.toLocaleString("en-NG", { style: "currency", currency: "NGN" }));
  };

  return (
    <div className="card">
      <h3>Income Tax Calculator 2026</h3>
      <input
        type="number"
        placeholder="Enter annual income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        style={{
          width: "80%",
          padding: "8px",
          marginTop: "12px",
          borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.3)",
          textAlign: "center",
          background: "rgba(255,255,255,0.08)",
          color: "white",
        }}
      />
      <button
        onClick={calculateTax}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          background: "#3d35c8",
          color: "white",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>

      {tax && (
        <p style={{ marginTop: "12px", fontSize: "14px" }}>
          Estimated Tax: <strong>{tax}</strong>
        </p>
      )}
    </div>
  );
}
