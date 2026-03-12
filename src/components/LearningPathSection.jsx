import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineCursorClick,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import SectionIntro from "./SectionIntro";

const steps = [
  {
    icon: <HiOutlineCode />,
    title: "Шаг 1: Основы HTML",
    description: "Изучаем структуру страницы, заголовки, изображения, ссылки, списки и устройство сайта.",
  },
  {
    icon: <HiOutlineColorSwatch />,
    title: "Шаг 2: Оформление с CSS",
    description: "Добавляем цвет, отступы, сетки, типографику и адаптивность, чтобы сайт выглядел современно.",
  },
  {
    icon: <HiOutlineCursorClick />,
    title: "Шаг 3: Интерактивность на JavaScript",
    description: "Подключаем логику, кнопки, переключатели и простые эффекты, которые оживляют страницы.",
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: "Шаг 4: Собственный сайт",
    description: "Объединяем все навыки в финальный проект, который можно уверенно показать другим.",
  },
];

function LearningPathSection() {
  return (
    <section className="section section--tinted" id="learn">
      <div className="container">
        <SectionIntro
          badge="План обучения"
          title="Что изучат ученики"
          description="Курс идет по понятной последовательности, чтобы новичок уверенно проходил каждый этап и в итоге собрал собственный полноценный сайт."
        />

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="step-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="step-card__number">0{index + 1}</div>
              <span className="step-card__icon">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningPathSection;