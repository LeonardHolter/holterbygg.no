"use client";

import { useState } from "react";
import { trackFormSubmit } from "@/lib/gtag";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(body.error ?? "Noe gikk galt. Prøv igjen senere.");
        setStatus("error");
        return;
      }

      setStatus("success");
      trackFormSubmit();
      form.reset();
    } catch {
      setError("Kunne ikke sende meldingen. Sjekk internettforbindelsen din.");
      setStatus("error");
    }
  }

  return (
    <form className="flex flex-col gap-4 bg-cream p-9" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-1.5 font-heading text-[13px] font-semibold text-ink">
        Navn
        <input
          type="text"
          name="name"
          required
          placeholder="Ditt navn"
          className="border border-[#ccc3b3] bg-white px-3.5 py-3 font-sans text-[15px]"
        />
      </label>
      <label className="flex flex-col gap-1.5 font-heading text-[13px] font-semibold text-ink">
        E-post
        <input
          type="email"
          name="email"
          required
          placeholder="din@epost.no"
          className="border border-[#ccc3b3] bg-white px-3.5 py-3 font-sans text-[15px]"
        />
      </label>
      <label className="flex flex-col gap-1.5 font-heading text-[13px] font-semibold text-ink">
        Fortell om prosjektet
        <textarea
          name="message"
          rows={4}
          required
          placeholder="F.eks. totalrenovering av bad, ca. 6 kvm"
          className="resize-y border border-[#ccc3b3] bg-white px-3.5 py-3 font-sans text-[15px]"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-rust px-4 py-4 font-heading text-[15px] font-bold text-white transition-colors hover:bg-rust-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "SENDER…" : "SEND FORESPØRSEL"}
      </button>
      {status === "success" && (
        <p className="text-sm text-navy">Takk! Vi tar kontakt så raskt vi kan.</p>
      )}
      {status === "error" && error && (
        <p className="text-sm text-[#b5622c]">{error}</p>
      )}
    </form>
  );
}
