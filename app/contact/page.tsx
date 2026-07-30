import Contact from '../../components/Contact';
import BackNavigation from '../../components/BackNavigation';

export const metadata = {
  title: 'Contact Us | Fiysam Energy Services',
  description: 'Get in touch with Fiysam Energy for your energy infrastructure projects.',
};

export default function ContactPage() {
  return (
    <>
      <section className="px-5 md:px-[60px] pt-32 pb-16 md:pt-30 md:pb-20 bg-deep">
        <div className="mb-1">
          <BackNavigation />
        </div>
        <Contact />
      </section>
    </>
  );
}