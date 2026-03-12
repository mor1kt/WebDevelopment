import { motion } from "framer-motion";

function FinalCtaSection() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <motion.div
          className="cta-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="cta-panel__copy">
            <span className="section-badge section-badge--light">Набор в новую группу</span>
            <h2>Начните путь в веб-разработке уже сегодня</h2>
            <p>
              Дайте ученикам практичный и творческий старт в программировании с курсом, который
              с первого занятия ощущается современным, понятным и увлекательным.
            </p>
          </div>

          <div className="cta-panel__actions">
            <a className="button button--light" href="#hero">
              Записаться
            </a>
            <a className="button button--ghost-light" href="https://wa.me/77757988712">
              Написать в WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCtaSection;