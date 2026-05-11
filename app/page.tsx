import Hero from './components/Hero';
import Ticker from './components/Ticker';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <StatsBar />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <CTABand />
      <Contact />
      <Footer />
    </>
  );
}