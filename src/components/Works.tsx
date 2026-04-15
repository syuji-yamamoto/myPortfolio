import { works } from "@/data/works";

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 border-t border-warm-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 tracking-wider">
          Works
        </h2>
        <div className="w-10 h-px bg-brown mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work) => (
            <article
              key={work.title}
              className="border border-warm-border bg-white hover:shadow-md transition-shadow"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-warm-border border-b border-warm-border">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 tracking-wide">
                  {work.title}
                </h3>
                <p className="text-sm text-warm-muted mb-4 leading-relaxed">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-warm-border text-brown-light px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2 border-t border-warm-border">
                  {work.demoUrl && (
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brown hover:text-charcoal transition-colors"
                    >
                      Demo &rarr;
                    </a>
                  )}
                  {work.githubUrl && (
                    <a
                      href={work.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-warm-muted hover:text-charcoal transition-colors"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
