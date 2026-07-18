"use client";

import { useState, FormEvent } from "react";
import { services } from "@/content/services";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line p-8 md:p-10 bg-[#F7F6F3]">
        <h3 className="font-display text-2xl font-bold mb-3">Message received.</h3>
        <p className="text-ink/70 leading-relaxed">
          We respond within 1 business day. If your project is time-sensitive, message
          us on WhatsApp using the button on this page and we&rsquo;ll reply faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Full name" name="name" required />
        <Field label="Email or phone" name="contact" required />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-xs uppercase tracking-[0.1em] font-semibold text-ink/60 mb-2">
            Service needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full border border-line bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
        <Field label="Project location" name="location" />
      </div>

      <div>
        <label htmlFor="budget" className="block text-xs uppercase tracking-[0.1em] font-semibold text-ink/60 mb-2">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full border border-line bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="Under $[X]">Under $[X]</option>
          <option value="$[X]–$[X]">$[X]–$[X]</option>
          <option value="$[X]–$[X]">$[X]–$[X]</option>
          <option value="Over $[X]">Over $[X]</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.1em] font-semibold text-ink/60 mb-2">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-line bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-signal" role="alert">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-signal text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-ink transition-colors duration-200 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs text-ink/50">We respond within 1 business day.</p>
    </form>
  );
}

function Field({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.1em] font-semibold text-ink/60 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className="w-full border border-line bg-white px-4 py-3 text-sm focus:outline-none focus:border-ink"
      />
    </div>
  );
}
