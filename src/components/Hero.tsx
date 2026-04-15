export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 to-emerald-500 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Name</h1>
        <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
          Web Developer
        </p>
        <a
          href="#about"
          className="inline-block border-2 border-white rounded-full p-3 hover:bg-white/20 transition-colors"
          aria-label="下にスクロール"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
