import { getProfileSection, type Locale } from "@/utils/profileData";
import Image from "next/image";

export default function ProjectsSection({ locale = "en" }: { locale?: Locale }) {
  const projects = getProfileSection("projects", locale);
  const isZh = locale === "zh";

  if (!projects || projects.length === 0) {
    return null; // Return null if no projects are found
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container px-6 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">
          {locale === "zh" ? "核心项目" : "Core Projects"}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300">
          {isZh
            ? "我把项目整理成可讨论的产品材料，而不只是作品展示：问题是什么，如何结构化评估，最后能为助手设计、模型策略与评测方法带来什么判断。"
            : "I frame projects as product evidence rather than portfolio screenshots: what interaction problem was studied, how it was evaluated, and what the work says about assistant design."}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const hasImage = !!project.image;

            return (
              <div
                key={project.name}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.65)] transition-transform hover:scale-[1.01] dark:border-slate-800 dark:bg-neutral-800"
              >
                <div
                  className={`flex h-48 items-end justify-start ${
                    !hasImage ? `bg-gradient-to-r ${project.color}` : ""
                  } px-6 py-5 text-white`}
                >
                  {hasImage ? (
                    <Image
                      src={project.image!}
                      alt={project.name}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                        {isZh ? "项目主题" : "Project Focus"}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight">
                        {project.name}
                      </h3>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {project.duration && (
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                      {project.duration}
                    </p>
                  )}

                  <h3 className="mb-3 text-xl font-semibold leading-snug">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {project.stats && project.stats.length > 0 && (
                    <div className="mb-5 grid grid-cols-3 gap-3">
                      {project.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="rounded-2xl bg-slate-950 px-3 py-4 text-white dark:bg-slate-800"
                        >
                          <p className="text-2xl font-semibold leading-none">
                            {stat.value}
                          </p>
                          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/65">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-5 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {isZh ? "项目产出" : "What This Produced"}
                    </p>
                    <ul className="space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-900 dark:border-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        +{project.technologies.length - 5}{" "}
                        {isZh ? "项" : "more"}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm font-medium">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 hover:underline dark:text-cyan-300"
                      >
                        {project.linkLabel ||
                          (isZh ? "外部链接" : "External Link")}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 hover:underline dark:text-cyan-300"
                      >
                        {project.githubLabel || "GitHub"}
                      </a>
                    )}
                    {project.documentation && (
                      <a
                        href={project.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 hover:underline dark:text-cyan-300"
                      >
                        {project.documentationLabel ||
                          (isZh ? "项目文档" : "Documentation")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
