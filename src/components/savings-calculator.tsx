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

    return {
      overseasCost: totalOverseas,
      annualSavings: totalSavings,
      savingsRate: percent,
    };
  }, [employees, role, usSalary]);

  return (
    <div className="grid gap-8 rounded-2xl border border-white/15 bg-slate-900/70 p-6 md:grid-cols-2 md:p-8">
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-white">Annual Savings Calculator</h3>
        <label className="block text-sm text-slate-300">
          U.S. salary per employee
          <input
            type="number"
            value={usSalary}
            min={30000}
            step={1000}
            onChange={(e) => setUsSalary(Number(e.target.value || 0))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Number of employees
          <input
            type="number"
            value={employees}
            min={1}
            max={100}
            onChange={(e) => setEmployees(Number(e.target.value || 1))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Role type
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          >
            {Object.keys(roleMultipliers).map((roleType) => (
              <option key={roleType} value={roleType}>
                {roleType}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="rounded-xl border border-white/15 bg-[#060d1f] p-6">
        <p className="text-sm text-slate-300">Estimated overseas staffing cost</p>
        <p className="mt-2 text-3xl font-semibold text-white">${overseasCost.toLocaleString()}/yr</p>
        <p className="mt-6 text-sm text-slate-300">Estimated annual savings</p>
        <p className="mt-2 text-4xl font-semibold text-emerald-300">${annualSavings.toLocaleString()}</p>
        <p className="mt-4 inline-flex rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          Approx. {savingsRate}% lower than equivalent U.S. payroll
        </p>
      </div>
    </div>
  );
}
