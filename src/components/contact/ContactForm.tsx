"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <p className="text-base font-bold text-emerald-700">お問い合わせを受け付けました</p>
        <p className="mt-2 text-sm text-emerald-700">
          お問い合わせいただきありがとうございます。担当者より折り返しご連絡いたします。
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-emerald-700 underline underline-offset-2"
        >
          もう一件問い合わせる
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-brand-800">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-lg border border-brand-200 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-bold text-brand-800">
          会社名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-lg border border-brand-200 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          placeholder="株式会社サンプル"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-brand-800">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-brand-200 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-brand-800">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-lg border border-brand-200 px-4 py-3 text-sm text-brand-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          placeholder="お問い合わせ内容をご記入ください。"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-900 shadow-sm transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
