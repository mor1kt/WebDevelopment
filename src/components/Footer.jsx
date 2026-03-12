import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const footerLinks = [
  { label: "Почему курс", href: "#why-learn" },
  { label: "Проекты", href: "#projects" },
  { label: "Программа", href: "#program" },
  { label: "Запись", href: "#cta" },
];

const socialLinks = [
  { icon: <FiInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FiLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FiMail />, href: "mailto:hello@webdevbeginners.com", label: "Email" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div className="footer-brand">
          <a className="brand-mark" href="#hero">
            <span className="brand-mark__logo">WD</span>
            <div>
              <strong>Веб-разработка</strong>
              <span>для начинающих</span>
            </div>
          </a>
          <p>
            Современный курс по программированию для начинающих 10–16 лет, где ученики изучают
            HTML, CSS и JavaScript через создание реальных проектов.
          </p>
        </div>

        <div>
          <h3>Быстрые ссылки</h3>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Контакты</h3>
          <ul className="footer-links">
            <li>
              <a href="mailto:hello@webdevbeginners.com">hello@webdevbeginners.com</a>
            </li>
            <li>
              <a href="tel:+77757988712">+7 (775) 798-81 12</a>
            </li>
            <li>Онлайн-занятия из любой точки мира</li>
          </ul>
        </div>

        <div>
          <h3>Соцсети</h3>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;