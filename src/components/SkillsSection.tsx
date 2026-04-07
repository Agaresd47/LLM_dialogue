import { getProfileSection, type Locale } from "@/utils/profileData";

export default function SkillsSection({ locale = "en" }: { locale?: Locale }) {
  const skills = getProfileSection("skills", locale);

  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    return null; // or some fallback UI
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {locale === "zh" ? "方法与工具" : "Methods and Tools"}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300">
          {locale === "zh"
            ? "把研究方法和实际工具分开写，方便招聘方快速判断我在做什么分析，以及我是靠什么把它落地。"
            : "I separate research method from implementation tooling so the work reads less like a keyword cloud and more like an operating stack."}
        </p>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-52px_rgba(15,23,42,0.65)] dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-950 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
