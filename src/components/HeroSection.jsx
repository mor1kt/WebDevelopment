import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles } from "react-icons/hi";

const floatingCards = [
  {
    icon: <HiOutlineCode />,
    title: "Практика на реальном коде",
    text: "Ученики пишут HTML, CSS и JavaScript с первых занятий.",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Творческая уверенность",
    text: "Каждый урок превращает идеи в аккуратные мини-сайты.",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Проекты для портфолио",
    text: "Получаются страницы, которые хочется показать родителям и друзьям.",
  },
];

function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        <span className="hero-orb hero-orb--blue" />
        <span className="hero-orb hero-orb--purple" />
        <span className="hero-grid" />
      </div>

      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Онлайн-курс для детей и подростков 10–16 лет</span>
          <h1>Научитесь создавать сайты</h1>
          <h2>HTML • CSS • JavaScript для начинающих</h2>
          <p>
            Понятный и структурированный курс, где ученики с нуля учатся собирать реальные
            сайты. Четкие уроки, практика на проектах и современный формат обучения.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#cta">
              Начать обучение
            </a>
            <a className="button button--secondary" href="#program">
              Смотреть программу
            </a>
          </div>

          <div className="hero-metrics" aria-label="Преимущества курса">
            <div>
              <strong>12 недель</strong>
              <span>пошагового обучения</span>
            </div>
            <div>
              <strong>4 проекта</strong>
              <span>для практики и портфолио</span>
            </div>
            <div>
              <strong>Мини-группы</strong>
              <span>с обратной связью преподавателя</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <div className="browser-card glass-card">
            <div className="browser-card__top">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-card__body">
              <div className="code-lines">
                <span className="line line--short" />
                <span className="line line--html" />
                <span className="line line--css" />
                <span className="line line--js" />
                <span className="line line--medium" />
              </div>
              <div className="preview-card">
                <div className="preview-card__header" />
                <div className="preview-card__content">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          {floatingCards.map((card, index) => (
            <motion.article
              key={card.title}
              className={`floating-card floating-card--${index + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 + 0.2, duration: 0.45 }}
            >
              <span className="floating-card__icon">{card.icon}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;