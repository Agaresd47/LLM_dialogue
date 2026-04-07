import { getProfileSection, type Locale } from "@/utils/profileData";

export default function TechnicalBackgroundSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const technicalBackground = getProfileSection(
    "technicalBackground",
    locale
  ) as {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };

  if (
    !technicalBackground ||
    !technicalBackground.items ||
    technicalBackground.items.length === 0
  ) {
    return null;
  }

  return (
    <section id="technical-background" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-3xl font-bold text-center">
          {technicalBackground.title}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300">
          {technicalBackground.intro}
        </p>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {technicalBackground.items.map((item, index) => (
            <article
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.65)] dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
