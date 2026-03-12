import { motion } from "framer-motion";
import {
  HiOutlineDesktopComputer,
  HiOutlinePuzzle,
  HiOutlineTemplate,
  HiOutlineUsers,
} from "react-icons/hi";
import SectionIntro from "./SectionIntro";

const features = [
  {
    icon: <HiOutlineDesktopComputer />,
    title: "Создание настоящих сайтов",
    description: "Ученики делают страницы, которые можно открыть, протестировать и улучшать как в реальной разработке.",
  },
  {
    icon: <HiOutlineTemplate />,
    title: "Креативные цифровые навыки",
    description: "Дизайн, композиция и визуальная подача встроены в каждый проект.",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Подходит новичкам",
    description: "Материал выстроен понятно даже для тех, кто раньше никогда не программировал.",
  },
  {
    icon: <HiOutlinePuzzle />,
    title: "Обучение через проекты",
    description: "Каждая тема приводит к практическому результату: от простых страниц до финального сайта.",
  },
];

function FeaturesSection() {
  return (
    <section className="section" id="why-learn">
      <div className="container">
        <SectionIntro
          badge="Почему этот курс"
          title="Почему стоит изучать веб-разработку"
          description="Это сильный первый шаг в технологии для учеников, которым нужны полезные цифровые навыки, творческая уверенность и понятный вход в программирование."
          centered
        />

        <div className="feature-grid">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="feature-card__icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;