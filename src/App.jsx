import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import LearningPathSection from "./components/LearningPathSection";
import ProjectsSection from "./components/ProjectsSection";
import ProgramSection from "./components/ProgramSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LearningPathSection />
        <ProjectsSection />
        <ProgramSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;