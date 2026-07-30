"use client";

/**
 * Zoho CRM Web-to-Lead — Staffing Intake (form 7339887000000759054)
 * Replaces the previous Bigin iframe.
 * All Zoho field names, hidden tokens, endpoint, validation logic,
 * and analytics script are preserved verbatim from the supplied source.
 */

import { useState, useRef, type FormEvent } from "react";
import Script from "next/script";

const ZOHO_ENDPOINT = "https://crm.zoho.com/crm/WebToLeadForm";

function isValidEmail(val: string): boolean {
  const v = val.trim();
  if (!v) return true; // empty is caught by mandatory check
  const at = v.indexOf("@");
  const dot = v.lastIndexOf(".");
  return at >= 1 && dot >= at + 2 && dot + 2 < v.length;
}

function Field({
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

export function StaffingNeedsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function validate(form: HTMLFormElement): boolean {
    // Mandatory array mirrors Zoho's checkMandatory function exactly
    const required = [
      { name: "Company",    label: "Company" },
      { name: "First Name", label: "First Name" },
      { name: "Last Name",  label: "Last Name" },
      { name: "Email",      label: "Email" },
      { name: "Phone",      label: "Phone" },
      { name: "LEADCF1",   label: "What role are you looking to hire?" },
    ] as const;

    for (const { name, label } of required) {
      const el = form.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null;
      if (!el || !el.value.trim()) {
        alert(`${label} cannot be empty.`);
        el?.focus();
        return false;
      }
    }

    const emailEl = form.elements.namedItem("Email") as HTMLInputElement;
    if (!isValidEmail(emailEl.value)) {
      alert("Please enter a valid email address.");
      emailEl.focus();
      return false;
    }
    return true;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;
    setBusy(true);

    // SmartURL injection — required by Zoho
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("service") === "smarturl") {
      const h = document.createElement("input");
      h.type = "hidden";
      h.name = "service";
      h.value = "smarturl";
      form.appendChild(h);
    }

    // Analytics submit hook (set by wf_anal script)
    const wfa = (window as Record<string, any>)._wfa_track;
    wfa?.wfa_submit?.(e);

    try {
      const res = await fetch(ZOHO_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        cache: "no-cache",
      });
      const ct = res.headers.get("Content-Type") ?? "";
      const data = ct.includes("application/json")
        ? await res.json()
        : await res.text();

      if (data && typeof data === "object") {
        if (data.actionsubmit === "Splash Message") {
          if (data.invalidCaptcha === "true") {
            alert(data.actionvalue);
          } else {
            form.reset();
            setSubmitted(true);
            wfa?.wfa_post_submit?.(e);
          }
        } else if (data.redirectUrl) {
          window.location.assign(data.redirectUrl);
        } else if (data.actionsubmit === "error_msg") {
          alert(data.message);
        }
      } else {
        // Non-JSON response — Zoho accepted the submission
        form.reset();
        setSubmitted(true);
      }
    } catch {
      alert("We could not submit your request. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Zoho analytics — id ensures Next.js loads this script only once */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=eefe216e0e1940bc5a9d22ff963c1a6450dfd362ef88571cbb53f6215b8e9088125882d87493dfcaf8a112f0b02bce57gid26b0d260fd779b41607995a365764ea185696a64bc98278dbb5191c49fa8c4c7gide9b7895a7a0204d169ede57fbee209960c7b6088dfde8bdfb531902b5647fbcagidb789591572241830879b7c7b64ea024a609430ad5a2ae8a60191851367ba8059&tw=66cea5ab9e72a26813fd65c49451dba841f2f56538dce59c69339ac7cd6581a3&version=v2"
        strategy="afterInteractive"
      />
      {/* Zoho first-party tracking init */}
      <Script id="wf-snf-init" strategy="afterInteractive">{`
        if(typeof _wfa_fstprtcken==='undefined'){_wfa_fstprtcken={};}
        _wfa_fstprtcken[7339887000000759054]=true;
      `}</Script>

      <div className="mx-auto w-full max-w-[660px] rounded-2xl border border-[rgba(7,27,51,0.10)] bg-white shadow-[0_2px_32px_rgba(7,27,51,0.10),0_1px_4px_rgba(7,27,51,0.06)]">
        {submitted ? (
          /* ── Inline success state ── */
          <div className="flex flex-col items-center px-8 py-14 text-center">
            <span
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ background: "rgba(184,136,42,0.12)" }}
            >
              <svg
                width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#b8882a" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <p
              className="mb-3 text-2xl font-semibold text-[#071B33]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Request Received
            </p>
            <p className="max-w-sm text-[0.975rem] leading-relaxed text-[#5a6475]">
              Thank you. Your request has been received, and a member of the
              Meridiem Global team will follow up shortly.
            </p>
          </div>
        ) : (
          /* ── Form ── */
          <form
            id="webform7339887000000759054"
            name="WebToLeads7339887000000759054"
            ref={formRef}
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
            noValidate
            className="p-8 md:p-10"
          >
            {/* ── Zoho required hidden inputs — do not remove ── */}
            <input type="text" style={{ display: "none" }} name="xnQsjsdp"
              defaultValue="fd303af7869a63d5db9f829311853eb0213505be17eb76e573bceee0c66cc6cc" readOnly />
            <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" readOnly />
            <input type="text" style={{ display: "none" }} name="xmIwtLD"
              defaultValue="6fcab394d4940cb0795b420281aba6d341ce4468690c779e153e319e27cf3ff9646971cd23f703171ede2e7424c26ff4" readOnly />
            <input type="text" style={{ display: "none" }} name="actionType"
              defaultValue="TGVhZHM=" readOnly />
            <input type="text" style={{ display: "none" }} name="returnURL"
              defaultValue="null" readOnly />

            {/* Heading */}
            <h3
              className="mb-1 text-2xl font-semibold text-[#071B33]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Tell Us What You Need
            </h3>
            <p className="mb-7 text-sm leading-relaxed text-[#5a6475]">
              Share a few details about your staffing needs, and we&rsquo;ll
              follow up with the best next step.
            </p>

            {/* First Name + Last Name */}
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="First_Name" name="First Name" label="First Name" required
                inputProps={{ maxLength: 40, autoComplete: "given-name" }}
              />
              <Field
                id="Last_Name" name="Last Name" label="Last Name" required
                inputProps={{ maxLength: 80, autoComplete: "family-name" }}
              />
            </div>

            {/* Phone + Email */}
            <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                id="Phone" name="Phone" label="Phone" required
                inputProps={{ type: "tel", maxLength: 30, autoComplete: "tel" }}
              />
              <Field
                id="Email" name="Email" label="Email" required
                inputProps={{ type: "email", maxLength: 100, autoComplete: "email" }}
              />
            </div>

            {/* Company — full width */}
            <div className="mb-4">
              <Field
                id="Company" name="Company" label="Company" required
                inputProps={{ maxLength: 200, autoComplete: "organization" }}
              />
            </div>

            {/* Role description — full width, mandatory (LEADCF1) */}
            <div className="mb-6">
              <label
                htmlFor="LEADCF1"
                className="mb-1.5 block text-[0.72rem] font-semibold tracking-[0.07em] uppercase text-[#071B33]"
              >
                What role are you looking to hire?{" "}
                <span className="text-[#b8882a]" aria-hidden="true">*</span>
              </label>
              <textarea
                id="LEADCF1"
                name="LEADCF1"
                aria-required="true"
                aria-label="What role are you looking to hire?"
                aria-multiline="true"
                className="w-full resize-y rounded-xl border border-[rgba(7,27,51,0.14)] bg-[#faf9f7] px-4 py-3 text-base text-[#071B33] placeholder-[#9da8b4] outline-none transition-all focus:border-[#b8882a] focus:ring-2 focus:ring-[#b8882a]/20"
                style={{ minHeight: "110px" }}
                placeholder="Describe the role or support function you need to fill…"
              />
            </div>

            {/* Honeypot — do not remove */}
            <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q"
              defaultValue="" readOnly />

            <button
              type="submit"
              id="formsubmit"
              className="formsubmit w-full rounded-full bg-[#071B33] py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-[#F6F1E8] transition-all hover:bg-[#0a2540] hover:shadow-[0_0_0_3px_rgba(184,136,42,0.30)] disabled:opacity-60 sm:w-auto sm:px-8"
              aria-label="Request a Staffing Strategy Call"
              disabled={busy}
            >
              {busy ? "Sending…" : "Request a Staffing Strategy Call"}
            </button>

            <p className="mt-4 text-xs leading-relaxed text-[#8a9baa]">
              We respect your privacy. Your information will only be used to
              respond to your request.
            </p>
          </form>
        )}
      </div>
    </>
  );
}
