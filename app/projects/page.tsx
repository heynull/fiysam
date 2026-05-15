import Projects from '../../components/Projects';
import CTABand from '../../components/CTABand';

export const metadata = {
  title: 'Our Projects | Fiysam Energy Services',
  description: 'Explore our completed energy infrastructure projects across Nigeria, including flow station upgrades, power plants, and pipeline installations.',
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <CTABand />
    </>
  );
}