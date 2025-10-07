// app/dashboard/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Link from "next/link";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

type Row = {
  Date: string;
  Sales: number;
  Category: string;
  Units: number;
};

export default function Dashboard() {
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  useEffect(() => {
    // load sample CSV
    fetch("/sample2.csv")
      .then((r) => r.text())
      .then((text) => {
        Papa.parse<Row>(text, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (res: { data: Row[] }) => {
            // ensure types
            const parsed = res.data.map((r: Row) => ({
              Date: String(r.Date),
              Sales: Number(r.Sales) || 0,
              Category: String(r.Category || "Unknown"),
              Units: Number(r.Units) || 0,
            }));
            setRows(parsed);
            setLoading(false);
          },
          error: (err: unknown) => setError(String(err)),
        });
      })
      .catch((err) => setError(String(err)));
  }, []);

  // filter rows by date inputs (simple YYYY-MM-DD expected)
  const filtered = useMemo(() => {
    if (!fromDate && !toDate) return rows;
    return rows.filter((r) => {
      const d = new Date(r.Date);
      if (fromDate) {
        const f = new Date(fromDate);
        if (d < f) return false;
      }
      if (toDate) {
        const t = new Date(toDate);
        if (d > t) return false;
      }
      return true;
    });
  }, [rows, fromDate, toDate]);

  // aggregate sales over time (by Date)
  const salesOverTime = useMemo(() => {
    const map = new Map<string, number>();
    for (const r of filtered) {
      const key = r.Date;
      map.set(key, (map.get(key) ?? 0) + r.Sales);
    }
    // sort by date
    const items = Array.from(map.entries()).sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime());
    return {
      labels: items.map(([d]) => d),
      data: items.map(([, v]) => v),
    };
  }, [filtered]);

  // aggregate by category
  const salesByCategory = useMemo(() => {
    const map = new Map<string, number>();
    for (const r of filtered) {
      map.set(r.Category, (map.get(r.Category) ?? 0) + r.Sales);
    }
    const items = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    return {
      labels: items.map(([c]) => c),
      data: items.map(([, v]) => v),
    };
  }, [filtered]);

  const lineChart = {
    labels: salesOverTime.labels,
    datasets: [
      {
        label: "Sales",
        data: salesOverTime.data,
        fill: false,
        borderWidth: 2,
        tension: 0.2,
        borderColor: "#4f46e5",
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };

  const barChart = {
    labels: salesByCategory.labels,
    datasets: [
      {
        label: "Sales by Category",
        data: salesByCategory.data,
        backgroundColor: "rgba(79,70,229,0.85)",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Retail Analytics Dashboard</h2>
            <p className="text-sm text-slate-600">Track daily sales, compare categories, and explore trends over time with an interactive, presentation‑ready view.</p>
          </div>
          <div>
            <Link href="/" className="text-sm text-slate-700 underline">← Home</Link>
          </div>
        </div>
      </header>

      {error && <p className="text-red-600">{error}</p>}
      {loading && !error && (
        <div className="card p-4 mb-6">
          <div className="animate-pulse flex gap-4 items-center">
            <div className="h-10 w-10 rounded-full bg-slate-200" />
            <div className="flex-1">
              <div className="h-3 bg-slate-200 rounded w-1/3 mb-2" />
              <div className="h-3 bg-slate-200 rounded w-1/4" />
            </div>
          </div>
        </div>
      )}

      <section className="card p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <label className="text-sm text-slate-600">From (YYYY-MM-DD)</label>
            <input value={fromDate} onChange={(e) => setFromDate(e.target.value)} placeholder="2024-01-01" className="px-2 py-1" />
            <label className="text-sm text-slate-600">To</label>
            <input value={toDate} onChange={(e) => setToDate(e.target.value)} placeholder="2024-12-31" className="px-2 py-1" />
            <button onClick={() => { setFromDate(""); setToDate(""); }} className="btn">Reset</button>
          </div>

          <div className="text-sm text-slate-600">Rows in range: <strong>{filtered.length}</strong> / {rows.length}</div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-4">
          <h3 className="font-semibold mb-3">Sales Over Time</h3>
          <div>
            <Line data={lineChart} options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
            }} />
          </div>
        </div>

        <div className="card p-4">
          <h3 className="font-semibold mb-3">Sales by Category</h3>
          <div>
            <Bar data={barChart} options={{
              responsive: true,
              plugins: { legend: { display: false } },
              scales: { x: { grid: { display: false } }, y: { beginAtZero: true } }
            }} />
          </div>
        </div>
      </div>

      <section className="mt-6 card p-4">
        <h4 className="font-medium mb-2">Sample data preview (first 10 rows)</h4>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead className="sticky top-0">
              <tr>
                <th className="border px-2 py-1 text-left bg-white">Date</th>
                <th className="border px-2 py-1 text-left bg-white">Sales</th>
                <th className="border px-2 py-1 text-left bg-white">Category</th>
                <th className="border px-2 py-1 text-left bg-white">Units</th>
              </tr>
            </thead>
            <tbody>
              {rows.slice(0, 10).map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border px-2 py-1">{r.Date}</td>
                  <td className="border px-2 py-1">{r.Sales}</td>
                  <td className="border px-2 py-1">{r.Category}</td>
                  <td className="border px-2 py-1">{r.Units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
