import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BackToTop from "../components/BackToTop";
import PacmanScrollBanner from "../components/PacmanScrollBanner";

const AboutSection = lazy(() => import("../components/AboutSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const SkillsSection = lazy(() => import("../components/SkillsSection"));
const ExperienceSection = lazy(() => import("../components/ExperienceSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/Footer"));

const SectionFallback = () => (
  <div className="min-h-[200px]" />
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <Suspense fallback={<SectionFallback />}>
      <AboutSection />
    </Suspense>
    <PacmanScrollBanner direction="ltr" />
    <Suspense fallback={<SectionFallback />}>
      <ServicesSection />
    </Suspense>
    <PacmanScrollBanner direction="rtl" />
    <Suspense fallback={<SectionFallback />}>
      <SkillsSection />
    </Suspense>
    <PacmanScrollBanner direction="ltr" />
    <Suspense fallback={<SectionFallback />}>
      <ExperienceSection />
    </Suspense>
    <PacmanScrollBanner direction="rtl" />
    <Suspense fallback={<SectionFallback />}>
      <ContactSection />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <Footer />
    </Suspense>
    <BackToTop />
  </div>
);

export default Index;
