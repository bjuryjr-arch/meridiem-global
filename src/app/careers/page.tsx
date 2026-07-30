import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Meridiem Global Talent Network",
  description:
    "Apply to join the Meridiem Global talent network. We place skilled remote professionals with U.S. businesses across operations, customer support, and more.",
};

const qualities = [
  {
    title: "Reliable & Accountable",
    body: "You follow through on commitments, meet deadlines, and communicate proactively when something changes.",
  },
  {
    title: "Strong English Communication",
    body: "Clear written and verbal communication is essential across all roles we place. You're comfortable in professional business settings.",
  },
  {
    title: "Tech-Comfortable",
    body: "You work confidently with tools like Google Workspace, CRMs, or role-specific platforms. You can learn new systems quickly.",
  },
  {
    title: "Self-Directed",
    body: "You manage your time well and don't need constant supervision to stay productive and on track.",
  },
];

const expectations = [
  {
    n: "01",
    title: "Stable Internet & Equipment",
    body: "A reliable connection and functional workstation are required. You are responsible for your own setup.",
  },
  {
    n: "02",
    title: "Full-Time Availability",
    body: "Most placements are full-time roles aligned to U.S. business hours. Part-time opportunities are occasionally available.",
  },
  {
    n: "03",
    title: "Professionalism",
    body: "You represent both Meridiem Global and our clients. Punctuality, responsiveness, and conduct matter.",
  },
  {
    n: "04",
    title: "Willingness to Be Managed",
    body: "Our clients use structured workflows and communication tools. You should be comfortable operating within defined systems.",
  },
];

const faqs = [
  {
    q: "Is this a full-time job or freelance?",
    a: "Most placements are full-time, dedicated roles with a single U.S.-based client. You won't be juggling multiple clients at once.",
  },
  {
    q: "What countries do you hire from?",
    a: "We work with professionals across Latin America, Southeast Asia, and other regions. We evaluate candidates based on qualifications, not just location.",
  },
  {
    q: "How long does the process take?",
    a: "After we receive your application, we review it within 3–5 business days. Qualified candidates are contacted for a screening interview. Placements typically happen within 2–4 weeks.",
  },
  {
    q: "What roles are currently available?",
    a: "We hire on a rolling basis based on client demand. Common roles include virtual assistants, customer support representatives, phone order agents, and administrative coordinators.",
  },
  {
    q: "How is compensation determined?",
    a: "Compensation is competitive for your region and aligned to the role, your experience, and the client's requirements. We discuss this openly during the screening process.",
  },
];

export default function CareersPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Join Our Talent Network
          </p>
          <div
            className="mb-6 h-[1.5px] w-11 rounded-full"
            style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.65),rgba(184,136,42,0))" }}
            aria-hidden="true"
          />
          <h1
            className="max-w-[22ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-semibold leading-[1.08] text-[#0a1628]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Work With{" "}
            <em className="not-italic gold-gradient-text">U.S. Businesses</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Meridiem Global places skilled overseas professionals with U.S. businesses who value reliability, accountability, and clear communication. We manage the relationship so you can focus on the work.
          </p>
          <div className="mt-10">
            <a
              href="https://meridiemglobal.zohorecruit.com/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Current Openings
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── What we look for ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
            What We Look For
          </p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Qualities We Value in Every Candidate
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {qualities.map((q) => (
              <div key={q.title} className="surface-light p-7">
                <div
                  className="mb-4 h-[1.5px] w-7 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-lg text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{q.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expectations — dark anchor ── */}
      <section className="bg-[#06091a] py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">
            What&rsquo;s Required
          </p>
          <h2
            className="mb-12 text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What We Expect from Every Professional
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {expectations.map((e) => (
              <div key={e.n} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <p className="mb-3 text-[0.6rem] font-medium tracking-[0.28em] text-[#c8c4b8] uppercase">{e.n}</p>
                <div
                  className="mb-4 h-[1px] w-6 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(200,169,110,0.5),rgba(200,169,110,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-lg text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8a9baa]">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
            Common Questions
          </p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Common Applicant Questions
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map(({ q, a }) => (
              <div key={q} className="surface-light p-7">
                <div
                  className="mb-4 h-[1px] w-6 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.5),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3
                  className="text-base font-medium text-[#0a1628]"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                >
                  {q}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5a6475]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-wc py-16 md:py-20">
        <div className="container text-center">
          <h2
            className="text-3xl text-[#0a1628] md:text-4xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to Join Our Talent Network?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#5a6475]">
            View our current openings and submit your application to be considered for placement with a U.S. business.
          </p>
          <div className="mt-8">
            <a
              href="https://meridiemglobal.zohorecruit.com/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              View Current Openings
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
