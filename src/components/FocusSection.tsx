import { getProfileSection, type Locale } from "@/utils/profileData";

export default function FocusSection({ locale = "en" }: { locale?: Locale }) {
  const focus = getProfileSection("focus", locale);
  const focusData = focus as Record<string, unknown>;
  const themes = (Array.isArray(focusData.themes) ? focusData.themes : []) as Array<{title: string; description: string}>;

  return (
    <section id="focus" className="py-20">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.24em] text-cyan-700 uppercase dark:text-cyan-300">
              {focus.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {focus.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {focus.intro}
            </p>
          </div>

          {themes.length > 0 && (
            <div className="grid gap-6 md:grid-cols-3">
              {themes.map((theme, index) => (
                <article
                  key={theme.title}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.6)] dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{theme.title}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {theme.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
