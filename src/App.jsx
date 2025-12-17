import About from "./components/sections/About.jsx";
import CTA from "./components/sections/CTA.jsx";
import Footer from "./components/sections/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Services from "./components/sections/Services.jsx";
import WhyVirtus from "./components/sections/WhyVirtus.jsx";
import { I18nProvider } from "./i18n.jsx";

export default function App() {
  return (
    <I18nProvider>
      <Hero />
      <About />
      <Services />
      <WhyVirtus />
      <CTA />
      <Footer />
    </I18nProvider>
  );
}
