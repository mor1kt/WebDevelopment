import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import SectionIntro from "./SectionIntro";

const testimonials = [
  {
    name: "Амина, 13 лет",
    quote: "Мне понравилось, что мы каждую неделю делали настоящие страницы. В конце у меня уже был свой сайт, и я реально понимала, как работает код.",
  },
  {
    name: "Даниэль, 15 лет",
    quote: "Уроки были понятными и не скучными. JavaScript сначала казался сложным, но через проекты все быстро стало ясно.",
  },
  {
    name: "Мама Софии, 11 лет",
    quote: "Курс выглядит структурированным и профессиональным. Дочь была вовлечена и с гордостью показывала сайт, который собрала сама.",
  },
];

function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionIntro
          badge="Доверие родителей и учеников"
          title="Отзывы"
          description="Ученики сохраняют мотивацию, потому что делают реальные проекты, а родители ценят сочетание структуры, творчества и полезных цифровых навыков."
          centered
        />

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="testimonial-card__top">
                <div className="avatar-placeholder" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <div className="star-row" aria-label="Оценка 5 из 5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <HiStar key={starIndex} />
                    ))}
                  </div>
                </div>
              </div>
              <p>{testimonial.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;