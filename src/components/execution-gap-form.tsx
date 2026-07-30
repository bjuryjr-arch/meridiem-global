"use client";

/**
 * Zoho CRM Web-to-Lead — Execution Gap ebook download (form 7339887000000869007)
 * Uses standard POST submission; Zoho redirects to returnURL on success.
 * All Zoho field names, hidden tokens, endpoint, validation logic,
 * and analytics script are preserved verbatim from the supplied source.
 */

import Script from "next/script";

const ZOHO_ENDPOINT = "https://crm.zoho.com/crm/WebToLeadForm";

function isValidEmail(val: string): boolean {
  const v = val.trim();
  if (!v) return true;
  const at = v.indexOf("@");
  const dot = v.lastIndexOf(".");
  return at >= 1 && dot >= at + 2 && dot + 2 < v.length;
}

function EbookField({
  id,
  name,
  label,
  required,
  inputProps = {},
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[0.72rem] font-semibold tracking-[0.07em] uppercase text-[#071B33]"
      >
        {label}
        {required && (
          <span className="ml-0.5 text-[#b8882a]" aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        aria-required={required || undefined}
        aria-label={label}
        className="w-full rounded-xl border border-[rgba(7,27,51,0.14)] bg-[#faf9f7] px-4 py-3 text-base text-[#071B33] placeholder-[#9da8b4] outline-none transition-all focus:border-[#b8882a] focus:ring-2 focus:ring-[#b8882a]/20"
        {...inputProps}
      />
    </div>
  );
}

export function ExecutionGapForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    // Mandatory validation — mirrors Zoho's checkMandatory function exactly
    const required = [
      { name: "Company",    label: "Company" },
      { name: "First Name", label: "First Name" },
      { name: "Last Name",  label: "Last Name" },
      { name: "Email",      label: "Email" },
    ] as const;

    for (const { name, label } of required) {
      const el = form.elements.namedItem(name) as HTMLInputElement | null;
      if (!el || !el.value.trim()) {
        e.preventDefault();
        alert(`${label} cannot be empty.`);
        el?.focus();
        return;
      }
    }

    const emailEl = form.elements.namedItem("Email") as HTMLInputElement;
    if (!isValidEmail(emailEl.value)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
      emailEl.focus();
      return;
    }

    // SmartURL injection — required by Zoho
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("service") === "smarturl") {
      const h = document.createElement("input");
      h.type = "hidden";
      h.name = "service";
      h.value = "smarturl";
      form.appendChild(h);
    }

    // Disable submit to prevent double-submission; Zoho redirect re-enables naturally
    const btn = form.querySelector<HTMLButtonElement>(".formsubmit");
    if (btn) btn.disabled = true;

    // Form submits normally — Zoho redirects to returnURL on success
  }

  return (
    <>
      {/* Zoho analytics — id ensures Next.js loads this script only once */}
      <Script
        id="wf_anal_ebook"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=7e105225b72e9f343c602c1165d9b54ed506c5f3b4909919ea009a44b8ff811278456443f131c37087e342a38f667221gid7a15f26651fc559560ff3268fac4b1e3789c03789ec35c0f442168f59bec81e3gid318c5f1ba872d2ff9d563a449f3e008bfc3f12ee76f30711867e0877a109cc33gidd62b8d43c6f85d1355bdd47b41f0e91c5c954de8494a588214cd21a88786ace2&tw=16ee5fc7530189d95495ea36ebcd0261d5755f18f36b4354d6c196859954d949&version=v2"
        strategy="afterInteractive"
      />
      {/* Zoho first-party tracking init — different key from staffing form */}
      <Script id="wf-ebook-init" strategy="afterInteractive">{`
        if(typeof _wfa_fstprtcken==='undefined'){_wfa_fstprtcken={};}
        _wfa_fstprtcken[7339887000000869007]=true;
      `}</Script>

      <div className="rounded-2xl border border-[rgba(7,27,51,0.10)] bg-white p-7 shadow-[0_2px_24px_rgba(7,27,51,0.08)] md:p-8">
        <h3
          className="mb-1 text-2xl font-semibold text-[#071B33]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Get The Execution Gap
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-[#5a6475]">
          Discover where execution breaks down—and how responsible delegation
          can help your business scale.
        </p>

        <form
          id="webform7339887000000869007"
          name="WebToLeads7339887000000869007"
          method="POST"
          action={ZOHO_ENDPOINT}
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
          noValidate
        >
          {/* ── Zoho required hidden inputs — do not remove ── */}
          <input type="text" style={{ display: "none" }} name="xnQsjsdp"
            defaultValue="2025d646284962467e4845e1763ee121c11d7078f8c39cc1f3e3daf42f0f468c" readOnly />
          <input type="hidden" name="zc_gad" id="zc_gad_ebook" defaultValue="" readOnly />
          <input type="text" style={{ display: "none" }} name="xmIwtLD"
            defaultValue="55eae6439a2719c39042f014997ac185b168f460a76b8c9d04360f864874543dc38379facd51c18fb7b8ae2d59a9ddab" readOnly />
          <input type="text" style={{ display: "none" }} name="actionType"
            defaultValue="TGVhZHM=" readOnly />
          {/* returnURL — Zoho redirects here on successful submission */}
          <input type="text" style={{ display: "none" }} name="returnURL"
            defaultValue="https://www.meridiemglobal.com/guide/thank-you" readOnly />

          {/* Company — full width */}
          <div className="mb-4">
            <EbookField
              id="ebook_Company" name="Company" label="Company" required
              inputProps={{ maxLength: 200, autoComplete: "organization" }}
            />
          </div>

          {/* First Name + Last Name */}
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <EbookField
              id="ebook_First_Name" name="First Name" label="First Name" required
              inputProps={{ maxLength: 40, autoComplete: "given-name" }}
            />
            <EbookField
              id="ebook_Last_Name" name="Last Name" label="Last Name" required
              inputProps={{ maxLength: 80, autoComplete: "family-name" }}
            />
          </div>

          {/* Email — full width */}
          <div className="mb-6">
            <EbookField
              id="ebook_Email" name="Email" label="Email" required
              inputProps={{ type: "email", maxLength: 100, autoComplete: "email" }}
            />
          </div>

          {/* Honeypot — do not remove */}
          <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q"
            defaultValue="" readOnly />

          <button
            type="submit"
            className="formsubmit w-full rounded-full bg-[#071B33] py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-[#F6F1E8] transition-all hover:bg-[#0a2540] hover:shadow-[0_0_0_3px_rgba(184,136,42,0.30)] disabled:opacity-60 sm:w-auto sm:px-8"
            aria-label="Send Me the Guide"
          >
            Send Me the Guide
          </button>

          <p className="mt-4 text-xs leading-relaxed text-[#8a9baa]">
            We respect your privacy. Your information will only be used to
            respond to your request.
          </p>
        </form>
      </div>
    </>
  );
}
