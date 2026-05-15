import Services from '../../components/Services';
import CTABand from '../../components/CTABand';

export const metadata = {
  title: 'Our Services | Fiysam Energy Services',
  description: 'Comprehensive energy services including engineering, EPC contracting, pipeline services, power solutions, HSE compliance, and procurement.',
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CTABand />
    </>
  );
}