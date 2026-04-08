import Image from "next/image";
import { getProfileSection, type Locale } from "@/utils/profileData";
import { withBasePath } from "@/utils/formatters";

export default function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const basics = getProfileSection("basics", locale);
  const ui = getProfileSection("ui", locale);

  return (
    <section className="hero-shell container mx-auto px-6 py-16 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
            {basics.eyebrow}
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="block">{basics.name}</span>
          </h1>
          <h2 className="mb-6 max-w-3xl text-xl leading-relaxed text-slate-700 md:text-2xl dark:text-slate-200">
            {basics.title}
          </h2>

          {basics.highlights && Array.isArray(basics.highlights) && (
            <div className="mb-6 flex flex-wrap gap-3">
              {basics.highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-cyan-900 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {basics.summaries &&
            Array.isArray(basics.summaries) &&
            basics.summaries.map((paragraph, index) => (
              <p
                key={index}
                className={`max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 ${index > 0 ? "mt-4" : ""}`}
              >
                {paragraph}
              </p>
            ))}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={withBasePath(basics.resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-center rounded-full btn-primary"
            >
              {ui.viewResume}
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-center rounded-full btn-secondary"
            >
              {ui.viewProjects}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-x-8 top-6 -z-10 h-[88%] rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-sky-300/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_80px_-40px_rgba(8,47,73,0.6)] w-72 h-[24rem] md:w-96 md:h-[30rem] dark:border-slate-800">
            <Image
              src={withBasePath(basics.profileImage)}
              alt={basics.name}
              fill
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 384px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
