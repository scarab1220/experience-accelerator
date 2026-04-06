import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
