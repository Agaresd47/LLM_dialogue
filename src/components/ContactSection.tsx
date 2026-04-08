import { getProfileSection, type Locale } from "@/utils/profileData";
import { withBasePath } from "@/utils/formatters";

export default function ContactSection({ locale = "en" }: { locale?: Locale }) {
  const contact = getProfileSection("contact", locale);
  const ui = getProfileSection("ui", locale);

  return (
    <section id="contact" className="py-20">
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          {contact.title}
        </h2>
        <div className="max-w-md mx-auto">
          <p className="mb-8 text-center">{contact.description}</p>
          <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
            <a
              href={withBasePath(contact.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-center rounded-full btn-primary"
            >
              {ui.viewResume}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="px-6 py-3 text-center rounded-full btn-secondary"
            >
              {ui.emailMe}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
