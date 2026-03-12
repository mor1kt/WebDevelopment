import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { label: "Почему", href: "#why-learn" },
  { label: "Карта курса", href: "#learn" },
  { label: "Проекты", href: "#projects" },
  { label: "Программа", href: "#program" },
  { label: "Отзывы", href: "#testimonials" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="brand-mark" href="#hero" aria-label="Главная страница курса «Веб-разработка для начинающих»">
          <span className="brand-mark__logo">WD</span>
          <div>
            <strong>Веб-разработка</strong>
            <span>для начинающих</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a className="button button--primary button--small" href="#cta">
            Записаться
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            <nav aria-label="Мобильная навигация">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              ))}
              <a className="button button--primary" href="#cta" onClick={handleLinkClick}>
                Записаться
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Header;