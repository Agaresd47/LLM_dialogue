import { getProfileSection, type Locale } from "@/utils/profileData";

export default function EducationSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const education = getProfileSection("education", locale);

  return (
    <section id="education" className="bg-white dark:bg-neutral-900 py-18">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          {locale === "zh" ? "教育背景" : "Education"}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-xl font-bold mr-2">{edu.degree}</h3>
                <span className="text-blue-600 dark:text-blue-400 text-sm sm:text-base mt-1 sm:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {edu.institution}
              </p>
              <p className="mt-1 text-gray-600 dark:text-gray-400 italic">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
