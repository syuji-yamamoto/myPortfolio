export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal text-cream">
      <div className="text-center px-6">
        <p className="text-sm tracking-[0.3em] text-warm-muted mb-6 uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
          Shuji Yamamoto
        </h1>
        <div className="w-16 h-px bg-warm-border mx-auto my-6" />
        <p className="text-lg md:text-xl font-light text-warm-muted tracking-wide">
          Web Developer
        </p>
        <a
          href="#about"
          className="inline-block mt-12 border border-warm-muted rounded-full p-3 hover:border-cream transition-colors"
          aria-label="下にスクロール"
        >
          <svg
            className="w-5 h-5 text-warm-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
