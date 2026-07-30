import Projects from "../../components/Projects";
import CTABand from "../../components/CTABand";
import BackNavigation from "../../components/BackNavigation";

export const metadata = {
  title: "Our Projects | Fiysam Energy Services",
  description:
    "Explore our completed energy infrastructure projects across Nigeria, including flow station upgrades, power plants, and pipeline installations.",
};

export default function ProjectsPage() {
  return (
    <>
       <section className="px-5 md:px-[60px] pt-32 pb-16 md:pt-30 md:pb-10 bg-deep">
        <div className="mb-6">
          <BackNavigation />
        </div>
        <Projects />
      </section>
      <CTABand />
    </>
  );
}
