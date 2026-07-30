"use client";

import { useMemo, useState } from "react";

const roleMultipliers: Record<string, number> = {
  "Virtual Assistant": 0.32,
  "Customer Support Agent": 0.38,
  "Administrative Assistant": 0.35,
  "Phone Support Agent": 0.36,
  "Specialized Remote Role": 0.45,
};

export function SavingsCalculator() {
  const [usSalary, setUsSalary] = useState(65000);
  const [employees, setEmployees] = useState(3);
  const [role, setRole] = useState("Customer Support Agent");

  const { overseasCost, annualSavings, savingsRate } = useMemo(() => {
    const multiplier = roleMultipliers[role] ?? 0.38;
    const totalUs = usSalary * employees;
    const totalOverseas = Math.round(totalUs * multiplier);
    const totalSavings = totalUs - totalOverseas;
    const percent = totalUs > 0 ? Math.round((totalSavings / totalUs) * 100) : 0;
    return { overseasCost: totalOverseas, annualSavings: totalSavings, savingsRate: percent };
  }, [employees, role, usSalary]);

  return (
    <div className="surface rounded-2xl border border-white/[0.09] p-6 md:grid md:grid-cols-2 md:gap-8 md:p-8">
      <div className="space-y-5">
        <div>
          <p
            className="text-[0.65rem] font-medium tracking-[0.3em] text-[#c8c4b8] uppercase mb-2"
          >
            Annual Savings Calculator
          </p>
          <h3
            className="text-2xl text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Estimate Your Savings
          </h3>
        </div>

        <label className="block text-sm text-[#c8c4b8]">
          U.S. salary per employee
          <input
            type="number"
            value={usSalary}
            min={30000}
            step={1000}
            onChange={(e) => setUsSalary(Number(e.target.value || 0))}
            className="input mt-2"
          />
        </label>

        <label className="block text-sm text-[#c8c4b8]">
          Number of employees
          <input
            type="number"
            value={employees}
            min={1}
            max={100}
            onChange={(e) => setEmployees(Number(e.target.value || 1))}
            className="input mt-2"
          />
        </label>

        <label className="block text-sm text-[#c8c4b8]">
          Role type
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="input mt-2 appearance-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23b8b4a8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.9rem center",
              paddingRight: "2.2rem",
            }}
          >
            {Object.keys(roleMultipliers).map((roleType) => (
              <option key={roleType} value={roleType} style={{ background: "#0b1027", color: "#f5f2ea" }}>
                {roleType}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-xl border border-white/[0.1] bg-[#04060f] p-6 md:mt-0">
        <p className="text-sm text-[#c8c4b8]">Estimated overseas staffing cost</p>
        <p
          className="mt-2 text-3xl font-semibold text-[#f5f2ea]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          ${overseasCost.toLocaleString()}/yr
        </p>

        <div className="cream-accent my-5 h-[1px] w-8 rounded-full" />

        <p className="text-sm text-[#c8c4b8]">Estimated annual savings</p>
        <p
          className="mt-2 text-4xl font-semibold text-emerald-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          ${annualSavings.toLocaleString()}
        </p>
        <p className="mt-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/[0.08] px-3 py-1 text-xs font-medium text-emerald-200">
          Approx. {savingsRate}% lower than equivalent U.S. payroll
        </p>
      </div>
    </div>
  );
}
