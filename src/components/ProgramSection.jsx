import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import SectionIntro from "./SectionIntro";

const modules = [
  "Введение в веб",
  "Основы HTML",
  "CSS: макеты и оформление",
  "Интерактивность на JavaScript",
  "Финальный проект",
];

function ProgramSection() {
  return (
    <section className="section section--tinted" id="program">
      <div className="container program-layout">
        <SectionIntro
          badge="Обзор программы"
          title="Программа курса"
          description="Понятная и профессионально выстроенная последовательность, которая ведет новичка от первых понятий к собственному итоговому сайту."
        />

        <div className="timeline">
          {modules.map((module, index) => (
            <motion.article
              key={module}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="timeline-item__marker">
                <HiOutlineAcademicCap />
              </div>
              <div className="timeline-item__content">
                <span className="timeline-item__eyebrow">Модуль {index + 1}</span>
                <h3>{module}</h3>
                <p>
                  Сфокусированные уроки, практические задания и понятные упражнения, адаптированные
                  для младших учеников без потери качества и серьезности подхода.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;