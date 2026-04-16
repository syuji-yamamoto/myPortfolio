"use client";

import { useState, FormEvent } from "react";

// Web3Forms の公開キー（秘匿不要）https://web3forms.com/
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "1d699145-446e-4c81-a908-d09ec26fc393";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      formData.append("access_key", WEB3FORMS_KEY);

      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-warm-border">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 tracking-wider">
          Contact
        </h2>
        <div className="w-10 h-px bg-brown mx-auto mb-12" />

        <p className="text-warm-muted text-center mb-10 leading-relaxed">
          お仕事のご依頼やお問い合わせは、下記フォームよりお送りください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="checkbox" name="botcheck" className="hidden" />
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-charcoal mb-2 tracking-wide"
            >
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-b border-warm-border bg-transparent py-2 text-charcoal placeholder-warm-border focus:border-brown focus:outline-none transition-colors"
              placeholder="山田 太郎"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-charcoal mb-2 tracking-wide"
            >
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-b border-warm-border bg-transparent py-2 text-charcoal placeholder-warm-border focus:border-brown focus:outline-none transition-colors"
              placeholder="example@mail.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-charcoal mb-2 tracking-wide"
            >
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full border border-warm-border bg-transparent p-3 text-charcoal placeholder-warm-border focus:border-brown focus:outline-none transition-colors resize-none"
              placeholder="お問い合わせ内容を入力してください"
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="border border-charcoal text-charcoal px-10 py-3 text-sm tracking-wider hover:bg-charcoal hover:text-cream transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "送信中..." : "送信する"}
            </button>
          </div>

          {/* Status message */}
          {status === "sent" && (
            <p className="text-center text-sm text-green-700">
              メッセージを送信しました。ありがとうございます。
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-700">
              送信に失敗しました。お手数ですがもう一度お試しください。
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
