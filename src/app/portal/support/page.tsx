"use client";
import { useState, useRef, useEffect } from "react";
import { useAuth, useClientId, getSupportMessages, saveSupportMessages } from "@/lib/portal/data";
import type { SupportMessage } from "@/lib/portal/types";
import { Card, Badge, PageShell, Btn } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

type Category = "support" | "billing" | "complaint" | "compliment" | "feedback";

const CATEGORY_OPTIONS: { value: Category; label: string; color: "blue"|"yellow"|"red"|"green"|"slate" }[] = [
  { value: "support",    label: "Support",    color: "blue" },
  { value: "billing",   label: "Billing",    color: "yellow" },
  { value: "complaint", label: "Complaint",  color: "red" },
  { value: "compliment",label: "Compliment", color: "green" },
  { value: "feedback",  label: "Feedback",   color: "slate" },
];

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

const GREETING = `Hi! I'm the Meridiem support assistant. I can help you with questions about your team, invoices, billing, or anything else about your account.\n\nWhat can I help you with today?`;

const AI_RESPONSES: Record<string, string> = {
  invoice: "Your most recent invoice is **INV-001** for **$5,850**, issued Feb 1 and due Feb 28. Would you like a full breakdown of line items?",
  deposit: "Your current deposit balance is **$4,200**, which is above the required minimum of $3,000. Your account status is healthy.",
  hours: "Your team logged a combined **113 hours** last week. Ana Reyes: 38h (82% activity), Carlos Mendez: 40h (91% activity), Sofia Villanueva: 35h (78% activity).",
  team: "You currently have **3 active team members**: Ana Reyes (Patient Communication), Carlos Mendez (Medical Billing), and Sofia Villanueva (RPM Support).",
  billing: "For billing questions, I can pull up your invoices, deposit balance, or payment history. You can also pay your current invoice directly from the Billing page. What specifically would you like to know?",
  autopay: "AutoPay is currently **disabled** on your account. To enable it, go to the Billing page and toggle AutoPay on. Payments are processed via ACH — no card fee.",
  default: "Thanks for reaching out! I've noted your message and flagged it for your account manager. Someone from the Meridiem team will follow up within 1 business day. Is there anything else I can help clarify right now?",
};

function getAiReply(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("invoice") || m.includes("bill") && !m.includes("billing question")) return AI_RESPONSES.invoice;
  if (m.includes("deposit") || m.includes("balance")) return AI_RESPONSES.deposit;
  if (m.includes("hour") || m.includes("activity") || m.includes("hours")) return AI_RESPONSES.hours;
  if (m.includes("team") || m.includes("worker") || m.includes("staff")) return AI_RESPONSES.team;
  if (m.includes("billing") || m.includes("payment") || m.includes("pay")) return AI_RESPONSES.billing;
  if (m.includes("autopay") || m.includes("auto pay") || m.includes("auto-pay")) return AI_RESPONSES.autopay;
  return AI_RESPONSES.default;
}

export default function SupportPage() {
  const { user } = useAuth();
  const clientId = useClientId();
  const [myMessages, setMyMessages] = useState<SupportMessage[]>([]);

  useEffect(() => {
    setMyMessages(clientId ? getSupportMessages().filter(m => m.clientId === clientId) : []);
  }, [clientId]);
  const [tab, setTab] = useState<"chat" | "history">("chat");
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", role: "assistant", text: GREETING, timestamp: new Date().toISOString() },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [category, setCategory] = useState<Category>("support");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input.trim(),
      timestamp: new Date().toISOString(),
    };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getAiReply(userMsg.text);
      setMessages(m => [...m, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: reply,
        timestamp: new Date().toISOString(),
      }]);
      setTyping(false);
    }, 1200);
  };

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const STATUS_VARIANT: Record<string, "slate"|"yellow"|"green"> = {
    open: "slate", in_progress: "yellow", resolved: "green",
  };

  return (
    <PageShell title="Support & Chat" sub="Ask questions, get help, or submit feedback to our team.">

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-[#e8dfc9] rounded-xl mb-5 w-fit">
        {(["chat", "history"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${
              tab === t ? "bg-white text-[#091929] shadow-sm" : "text-[#394452] hover:text-[#091929]"
            }`}
          >
            {t === "chat" ? "AI Assistant" : "My Requests"}
          </button>
        ))}
      </div>

      {tab === "chat" ? (
        <Card className="flex flex-col" style={{ height: "calc(100vh - 280px)", minHeight: 480 }}>
          {/* Category selector */}
          <div className="px-4 pt-4 pb-3 border-b border-[#e8dfc9]">
            <div className="flex gap-2 flex-wrap">
              {CATEGORY_OPTIONS.map(c => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                    category === c.value
                      ? "bg-[#091929] text-white border-[#091929]"
                      : "bg-white text-[#394452] border-[#e2d9c8] hover:border-[#394452]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-[#091929] flex items-center justify-center text-white text-xs font-bold shrink-0 mr-2.5 mt-0.5">M</div>
                )}
                <div className={`max-w-[75%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                  <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-[#091929] text-white rounded-tr-sm"
                      : "bg-[#f0e9d8] text-[#091929] rounded-tl-sm"
                  }`}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-[#7a8694] px-1">{formatTime(msg.timestamp)}</span>
                </div>
                {msg.role === "user" && (
                  <div className="h-8 w-8 rounded-full bg-[#e8dfc9] flex items-center justify-center text-[#394452] text-xs font-bold shrink-0 ml-2.5 mt-0.5">
                    {user?.avatar ?? "U"}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="h-8 w-8 rounded-full bg-[#091929] flex items-center justify-center text-white text-xs font-bold shrink-0 mr-2.5">M</div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[#e8dfc9]">
                  <div className="flex gap-1 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7a8694] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7a8694] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7a8694] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-[#e8dfc9]">
            <div className="flex gap-2 items-end">
              <textarea
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder={`Send a ${category} message…`}
                className="flex-1 resize-none rounded-xl border border-[#e2d9c8] px-3.5 py-2.5 text-sm text-[#091929] placeholder:text-[#7a8694] focus:outline-none focus:ring-2 focus:ring-[#091929]/15 focus:border-[#091929]/50 transition"
                style={{ maxHeight: 120 }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || typing}
                className="h-10 w-10 rounded-xl bg-[#091929] text-white flex items-center justify-center hover:bg-[#091929] transition disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Icon d={ICONS.send} size={16} />
              </button>
            </div>
            <p className="text-[10px] text-[#7a8694] mt-1.5 px-0.5">AI assistant · Powered by Meridiem · Shift+Enter for new line</p>
          </div>
        </Card>
      ) : (
        /* History tab */
        <div className="space-y-3">
          {myMessages.length === 0 ? (
            <Card className="p-10 text-center">
              <p className="text-sm text-[#394452]">No support requests yet.</p>
              <Btn variant="secondary" className="mt-4" onClick={() => setTab("chat")}>Start a conversation</Btn>
            </Card>
          ) : (
            myMessages.map(msg => (
              <Card key={msg.id} className="p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      label={CATEGORY_OPTIONS.find(c => c.value === msg.category)?.label ?? msg.category}
                      variant={CATEGORY_OPTIONS.find(c => c.value === msg.category)?.color ?? "slate"}
                    />
                    <Badge
                      label={msg.status.replace("_", " ")}
                      variant={STATUS_VARIANT[msg.status] ?? "slate"}
                    />
                    {msg.priority === "high" && <Badge label="High Priority" variant="red" />}
                  </div>
                  <span className="text-xs text-[#7a8694] shrink-0">{new Date(msg.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-[#091929] mb-1">{msg.message}</p>
                {msg.aiSummary && (
                  <p className="text-xs text-[#394452] italic">AI summary: {msg.aiSummary}</p>
                )}
              </Card>
            ))
          )}
        </div>
      )}
    </PageShell>
  );
}
