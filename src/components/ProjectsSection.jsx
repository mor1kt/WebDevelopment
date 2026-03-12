import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";

const projects = [
  {
    title: "Персональный сайт",
    description: "Стартовый проект с рассказом о себе, увлечениях, изображениями и собственным стилем.",
    tag: "Первый проект",
  },
  {
    title: "Портфолио-страница",
    description: "Аккуратный макет для демонстрации работ, достижений и личных целей.",
    tag: "Рост уверенности",
  },
  {
    title: "Сайт для малого бизнеса",
    description: "Многоэкранная страница с услугами, контактами и визуальным оформлением бренда.",
    tag: "Практика на реальном кейсе",
  },
  {
    title: "Лендинг",
    description: "Современная промо-страница с сильной композицией, CTA-блоками и интерактивными деталями.",
    tag: "Готово для портфолио",
  },
];

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionIntro
          badge="Результаты обучения"
          title="Проекты учеников"
          description="К концу курса у учеников есть практические сайты, которые выглядят аккуратно, современно и наглядно показывают реальный прогресс."
          centered
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="project-card__mockup" aria-hidden="true">
                <div className="project-card__screen">
                  <span className="mockup-bar" />
                  <span className="mockup-block mockup-block--large" />
                  <span className="mockup-block" />
                  <span className="mockup-block mockup-block--small" />
                </div>
              </div>
              <div className="project-card__content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;