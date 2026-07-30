import WhyUs from '../../components/WhyUs';
import StatsBar from '../../components/StatsBar';
import Testimonials from '../../components/Testimonials';
import CTABand from '../../components/CTABand';
import BackNavigation from '../../components/BackNavigation';

export const metadata = {
  title: 'About Us | Fiysam Energy Services',
  description: 'Learn about Fiysam Energy - Nigeria\'s premier energy services company.',
};

export default function AboutPage() {
  return (
    <>
      <section className="px-5 md:px-[60px] pt-32 pb-16 md:pt-30 md:pb-20 bg-deep">
        <div className="mb-6">
          <BackNavigation />
        </div>
        <WhyUs />
        <StatsBar />
        <Testimonials />
      </section>
      <CTABand />
    </>
  );
}