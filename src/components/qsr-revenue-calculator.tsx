"use client";

import { useMemo, useState } from "react";

export function QsrRevenueCalculator() {
  const [callsPerHour, setCallsPerHour] = useState(24);
  const [missedCallsPercent, setMissedCallsPercent] = useState(18);
  const [averageOrderValue, setAverageOrderValue] = useState(28);
  const [hoursOpen, setHoursOpen] = useState(14);

  const { dailyLoss, annualLoss, recoveredRevenue } = useMemo(() => {
    const missedCalls = callsPerHour * hoursOpen * (missedCallsPercent / 100);
    const dayLoss = Math.round(missedCalls * averageOrderValue);
    const yearLoss = dayLoss * 365;
    const recovered = Math.round(yearLoss * 0.72);

    return {
      dailyLoss: dayLoss,
      annualLoss: yearLoss,
      recoveredRevenue: recovered,
    };
  }, [averageOrderValue, callsPerHour, hoursOpen, missedCallsPercent]);

  return (
    <div className="grid gap-8 rounded-2xl border border-white/15 bg-slate-900/70 p-6 md:grid-cols-2 md:p-8">
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-white">How Much Revenue Is Your Restaurant Losing?</h3>
        <label className="block text-sm text-slate-300">
          Average calls per hour
          <input
            type="number"
            value={callsPerHour}
            min={1}
            onChange={(e) => setCallsPerHour(Number(e.target.value || 1))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Percentage of missed calls
          <input
            type="number"
            value={missedCallsPercent}
            min={0}
            max={100}
            onChange={(e) => setMissedCallsPercent(Number(e.target.value || 0))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Average order value ($)
          <input
            type="number"
            value={averageOrderValue}
            min={5}
            onChange={(e) => setAverageOrderValue(Number(e.target.value || 0))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          />
        </label>

        <label className="block text-sm text-slate-300">
          Hours open per day
          <input
            type="number"
            value={hoursOpen}
            min={1}
            max={24}
            onChange={(e) => setHoursOpen(Number(e.target.value || 1))}
            className="mt-2 w-full rounded-lg border border-white/20 bg-[#081129] px-4 py-2 text-white outline-none ring-blue-500/50 focus:ring"
          />
        </label>
      </div>

      <div className="rounded-xl border border-white/15 bg-[#060d1f] p-6">
        <p className="text-sm text-slate-300">Estimated daily lost revenue</p>
        <p className="mt-2 text-3xl font-semibold text-rose-300">${dailyLoss.toLocaleString()}</p>

        <p className="mt-6 text-sm text-slate-300">Estimated annual lost revenue</p>
        <p className="mt-2 text-4xl font-semibold text-rose-200">${annualLoss.toLocaleString()}</p>

        <p className="mt-6 text-sm text-slate-300">Potential recoverable annual revenue with dedicated agents</p>
        <p className="mt-2 text-3xl font-semibold text-emerald-300">${recoveredRevenue.toLocaleString()}</p>
      </div>
    </div>
  );
}
