import { getProfileSection, type Locale } from "@/utils/profileData";

export default function ExperienceSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const experiences = getProfileSection("experience", locale);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-3xl font-bold text-center">
          {locale === "zh" ? "研究方向" : "Research Directions"}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300">
          {locale === "zh"
            ? "这一部分不再重复列项目，而是概括我持续关注的研究问题、评测视角与产品判断框架。"
            : "This section summarizes the research questions I keep returning to, rather than repeating project descriptions."}
        </p>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {experiences.map((item, index) => (
            <article
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.65)] dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                {item.label}
              </p>
              <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
              <ul className="space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
