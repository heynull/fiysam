"use client";

import { useState, useMemo } from "react";
import CTABand from "../../components/CTABand";
import BackNavigation from '../../components/BackNavigation';
import { X, Search, ChevronDown, ChevronUp } from 'lucide-react';

// Full services list with categories
const allServices = [
  // Power Services
  {
    id: 1,
    icon: "⚡",
    title: "Independent Power Production (IPP)",
    description:
      "Development and operation of gas-fired and hybrid power plants for industrial, commercial, and utility clients.",
    category: "Power",
    fullDescription:
      "We design, finance, build, and operate independent power plants ranging from 5MW to 100MW. Our IPP solutions include gas-fired, hybrid, and renewable energy systems tailored to client needs. We manage the entire project lifecycle from feasibility studies to commercial operations.",
    benefits: [
      "24/7 reliable power supply",
      "Reduced dependency on national grid",
      "Cost-effective energy solutions",
      "Environmental compliance",
    ],
  },
  {
    id: 2,
    icon: "⚡",
    title: "Embedded & Captive Power",
    description:
      "Custom power solutions for industrial parks, manufacturing facilities, and residential estates.",
    category: "Power",
    fullDescription:
      "We deliver embedded power generation within industrial clusters and captive power plants for single large consumers. These solutions provide energy security and reduce exposure to grid instability and tariff fluctuations.",
    benefits: [
      "Energy independence",
      "Stable power for operations",
      "Lower energy costs",
      "Backup power capabilities",
    ],
  },
  {
    id: 3,
    icon: "⚡",
    title: "Renewable Energy Integration",
    description:
      "Solar and hybrid energy systems designed to complement existing power infrastructure.",
    category: "Power",
    fullDescription:
      "We design and install solar PV systems, solar-diesel hybrids, and solar-battery storage solutions. Our renewable integration services help clients reduce carbon footprint and operational costs while ensuring reliable power supply.",
    benefits: [
      "Reduced carbon emissions",
      "Lower fuel costs",
      "Energy independence",
      "Government incentives eligible",
    ],
  },
  {
    id: 4,
    icon: "⚡",
    title: "Power Infrastructure Development",
    description:
      "Design, construction, and maintenance of power distribution networks and substations.",
    category: "Power",
    fullDescription:
      "We build and upgrade power distribution infrastructure including substations, transmission lines, and distribution networks. Our team handles everything from engineering design to construction and commissioning.",
    benefits: [
      "Improved power reliability",
      "Reduced transmission losses",
      "Scalable infrastructure",
      "Regulatory compliance",
    ],
  },
  // Water Services
  {
    id: 5,
    icon: "💧",
    title: "Potable Water Treatment",
    description:
      "Design and operation of water treatment plants for drinking water and municipal supply.",
    category: "Water",
    fullDescription:
      "We design, build, and operate water treatment plants that deliver clean, safe drinking water to communities and municipalities. Our solutions use advanced filtration, chemical treatment, and UV disinfection technologies.",
    benefits: [
      "Safe drinking water",
      "Regulatory compliance",
      "Community health improvement",
      "Sustainable operations",
    ],
  },
  {
    id: 6,
    icon: "💧",
    title: "Industrial Water Systems",
    description:
      "Process water treatment and distribution for manufacturing, oil & gas, and industrial applications.",
    category: "Water",
    fullDescription:
      "We provide specialized water treatment solutions for industrial processes including boiler feed water, cooling water, and process water for manufacturing, oil & gas, and chemical industries.",
    benefits: [
      "Process efficiency improvement",
      "Equipment longevity",
      "Reduced downtime",
      "Cost savings",
    ],
  },
  {
    id: 7,
    icon: "💧",
    title: "Desalination & Water Recycling",
    description:
      "Advanced desalination and water recycling solutions for water-scarce regions.",
    category: "Water",
    fullDescription:
      "We implement desalination plants using reverse osmosis and thermal technologies to convert seawater and brackish water into fresh water. Our water recycling solutions treat wastewater for industrial reuse.",
    benefits: [
      "Water security",
      "Reduced water scarcity",
      "Industrial water reuse",
      "Environmental sustainability",
    ],
  },
  {
    id: 8,
    icon: "💧",
    title: "Wastewater Treatment",
    description:
      "Treatment, recycling, and reuse of wastewater for industrial and municipal clients.",
    category: "Water",
    fullDescription:
      "We design and operate wastewater treatment plants for municipal, industrial, and commercial clients. Our solutions include primary, secondary, and tertiary treatment processes with water recycling capabilities.",
    benefits: [
      "Regulatory compliance",
      "Water conservation",
      "Environmental protection",
      "Revenue from water reuse",
    ],
  },
  // Gas Services
  {
    id: 9,
    icon: "🔥",
    title: "Natural Gas Supply & Aggregation",
    description:
      "Reliable gas supply and aggregation services for industrial and power generation clients.",
    category: "Gas",
    fullDescription:
      "We aggregate gas supply from multiple producers to provide reliable, cost-effective natural gas to industrial and power generation clients. Our supply chain management ensures consistent delivery.",
    benefits: [
      "Reliable gas supply",
      "Competitive pricing",
      "Flexible contract terms",
      "Supply chain management",
    ],
  },
  {
    id: 10,
    icon: "🔥",
    title: "CNG & LNG Solutions",
    description:
      "Compressed and liquefied natural gas solutions for transportation, industrial, and power applications.",
    category: "Gas",
    fullDescription:
      "We provide CNG and LNG solutions for transportation fleets, industrial facilities, and power generation. Our solutions include compression, liquefaction, storage, and distribution infrastructure.",
    benefits: [
      "Cleaner fuel alternative",
      "Lower emissions",
      "Cost-effective energy",
      "Infrastructure development",
    ],
  },
  {
    id: 11,
    icon: "🔥",
    title: "Gas-to-Power Projects",
    description:
      "End-to-end gas-to-power infrastructure development and project management.",
    category: "Gas",
    fullDescription:
      "We develop complete gas-to-power projects including gas supply agreements, pipeline infrastructure, power plant construction, and power purchase agreements. We manage the entire value chain.",
    benefits: [
      "Integrated solution",
      "Single point responsibility",
      "Project financing support",
      "Operational excellence",
    ],
  },
  {
    id: 12,
    icon: "🔥",
    title: "Gas Infrastructure Development",
    description:
      "Pipeline, metering, storage, and distribution infrastructure for natural gas.",
    category: "Gas",
    fullDescription:
      "We design and construct natural gas infrastructure including pipelines, metering stations, storage facilities, and distribution networks. Our solutions ensure safe and efficient gas delivery.",
    benefits: [
      "Safe gas delivery",
      "Regulatory compliance",
      "Infrastructure expansion",
      "Community impact",
    ],
  },
  // Other Services
  {
    id: 13,
    icon: "🏗️",
    title: "EPC Contracting",
    description:
      "End-to-end engineering, procurement, and construction for infrastructure projects.",
    category: "EPC",
    fullDescription:
      "We provide full EPC (Engineering, Procurement, and Construction) services for power, water, and gas infrastructure projects. We manage everything from design to commissioning with quality and safety assurance.",
    benefits: [
      "Single point responsibility",
      "Quality assurance",
      "Timely project delivery",
      "Cost control",
    ],
  },
  {
    id: 14,
    icon: "🔧",
    title: "Operations & Maintenance",
    description:
      "24/7 operations, maintenance, and asset management for power, water, and gas facilities.",
    category: "O&M",
    fullDescription:
      "We provide comprehensive O&M services for power plants, water treatment facilities, gas infrastructure, and industrial utilities. Our team ensures optimal performance, safety, and reliability.",
    benefits: [
      "24/7 operational support",
      "Asset optimization",
      "Safety compliance",
      "Extended equipment life",
    ],
  },
  {
    id: 15,
    icon: "📦",
    title: "Procurement & Logistics",
    description:
      "Global sourcing, procurement, and supply chain management for infrastructure equipment.",
    category: "Other",
    fullDescription:
      "We provide end-to-end procurement and logistics services for infrastructure projects including equipment sourcing, supply chain management, customs clearance, and local delivery.",
    benefits: [
      "Global supplier network",
      "Cost optimization",
      "Timely delivery",
      "Supply chain efficiency",
    ],
  },
];

// Get unique categories for filter buttons
const categories = ["All", ...new Set(allServices.map((s) => s.category))];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<
    (typeof allServices)[0] | null
  >(null);

  // Filter services based on category and search query
  const filteredServices = useMemo(() => {
    let services = allServices;

    // Apply category filter
    if (selectedCategory !== "All") {
      services = services.filter((s) => s.category === selectedCategory);
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      services = services.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query) ||
          s.category.toLowerCase().includes(query),
      );
    }

    return services;
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <section className="px-5 md:px-[60px] pt-32 pb-16 md:pt-30 md:pb-20 bg-deep min-h-screen">
          {/* Back Navigation - ADD THIS */}
        <div className="mb-6">
          <BackNavigation />
        </div>
        <div className="mb-12">
          <div className="section-label">Our Services</div>
          <h1 className="section-title">
            Comprehensive Infrastructure Solutions
          </h1>
          <p className="section-sub text-sm md:text-base max-w-2xl">
            We deliver integrated power, water, and gas solutions across Nigeria
            and West Africa — from development and financing to construction and
            operations.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-energy w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card-bg border border-border-dark rounded-lg pl-10 pr-4 py-3 text-white-warm placeholder:text-grey-energy outline-none focus:border-amber-energy transition-colors"
            />
          </div>

          {/* Filter Buttons - wrap on mobile */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded font-medium text-sm transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-amber-energy text-obsidian"
                    : "bg-card-bg text-grey-energy border border-border-dark hover:border-amber-energy hover:text-white-warm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-card-bg border border-border-dark rounded-lg p-6 md:p-8 hover:border-amber-energy/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-amber-energy/5 border border-amber-energy/20 rounded-md flex items-center justify-center mb-4 text-[1.4rem]">
                {service.icon}
              </div>
              <h3 className="text-[1rem] md:text-[1.1rem] font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-[0.85rem] text-grey-energy leading-[1.6]">
                {service.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-amber-energy">
                {service.category}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-grey-energy">
              No services found matching your search.
            </p>
          </div>
        )}
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-card-bg border border-border-dark rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-grey-energy hover:text-white-warm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Service Detail Content */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-energy/5 border border-amber-energy/20 rounded-xl flex items-center justify-center text-3xl">
                {selectedService.icon}
              </div>
              <div>
                <span className="text-xs font-semibold tracking-wide uppercase text-amber-energy">
                  {selectedService.category}
                </span>
                <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-grey-energy uppercase tracking-wide mb-2">
                  Overview
                </h4>
                <p className="text-white-warm leading-relaxed">
                  {selectedService.fullDescription ||
                    selectedService.description}
                </p>
              </div>

              {selectedService.benefits && (
                <div>
                  <h4 className="text-sm font-semibold text-grey-energy uppercase tracking-wide mb-3">
                    Key Benefits
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-light-energy"
                      >
                        <span className="text-amber-energy">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-border-dark">
                <button
                  onClick={() => setSelectedService(null)}
                  className="btn-primary w-full text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTABand />
    </>
  );
}
