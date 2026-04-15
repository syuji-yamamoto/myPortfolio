export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="text-gray-600 mb-8">
          お仕事のご依頼やお問い合わせは、以下のメールアドレスまでご連絡ください。
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-colors"
        >
          your-email@example.com
        </a>
      </div>
    </section>
  );
}
