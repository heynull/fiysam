import WhyUs from '../../components/WhyUs';
import StatsBar from '../../components/StatsBar';
import Testimonials from '../../components/Testimonials';
import CTABand from '../../components/CTABand';

export const metadata = {
  title: 'About Us | Fiysam Energy Services',
  description: 'Learn about Fiysam Energy - Nigeria\'s premier energy services company with 15+ years of experience in engineering, procurement, and construction.',
};

export default function AboutPage() {
  return (
    <>
      <WhyUs />
      <StatsBar />
      <Testimonials />
      <CTABand />
    </>
  );
}