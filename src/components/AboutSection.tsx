import { getProfileSection, type Locale } from "@/utils/profileData";

export default function AboutSection({ locale = "en" }: { locale?: Locale }) {
  const about = getProfileSection("about", locale);
  const ui = getProfileSection("ui", locale);

  return (
    <section id="about" className="bg-white dark:bg-neutral-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {ui.aboutSectionTitle}
        </h2>
        <div className="max-w-3xl mx-auto">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg ${
                index !== about.paragraphs.length - 1 ? "mb-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
