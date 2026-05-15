'use client';

import { useState } from 'react';

const contactDetails = [
  { icon: '📍', label: 'Office', value: 'Port Harcourt, Rivers State, Nigeria' },
  { icon: '📞', label: 'Phone', value: '+234 800 000 0000' },
  { icon: '✉️', label: 'Email', value: 'info@fiysamenergyservices.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri, 8AM – 6PM WAT' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will respond within 24 hours.');
  };

  return (
    <section id="contact" className="px-5 md:px-[60px] py-16 md:py-[100px]">
      <div className="section-label">Get in Touch</div>
      <h2 className="section-title">Let&apos;s Work Together</h2>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-20 items-start mt-8 md:mt-[60px]">
        {/* Contact Info */}
        <div className="order-2 md:order-1">
          <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold mb-3 md:mb-4">Have a project in mind?</h3>
          <p className="text-[0.85rem] md:text-[0.9rem] text-grey-energy leading-[1.6] md:leading-[1.7] mb-6 md:mb-10">
            Fill in the form and our team will respond within 24 hours. We handle projects of all scales across Nigeria and West Africa.
          </p>

          <div className="flex flex-col gap-4 md:gap-5">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex gap-3 md:gap-4 items-start">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-amber-energy/5 border border-amber-energy/20 rounded flex items-center justify-center text-[0.9rem] flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <strong className="block text-[0.75rem] md:text-[0.8rem] text-grey-energy font-medium mb-0.5">{detail.label}</strong>
                  <span className="text-[0.85rem] md:text-[0.9rem] text-light-energy">{detail.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card-bg border border-border-dark rounded-lg p-6 md:p-10 order-1 md:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="John"
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="john@company.com"
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="+234 ..."
                required
              />
            </div>
          </div>

          <div className="form-group mb-3 md:mb-4">
            <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Service Required</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
              required
            >
              <option value="">Select a service...</option>
              <option>Engineering & Design</option>
              <option>EPC Contracting</option>
              <option>Pipeline Services</option>
              <option>Power Solutions</option>
              <option>HSE & Compliance</option>
              <option>Procurement & Logistics</option>
            </select>
          </div>

          <div className="form-group mb-5 md:mb-6">
            <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Project Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors h-[100px] md:h-[120px] resize-none"
              placeholder="Briefly describe your project, location, and timeline..."
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full border-none cursor-pointer text-[0.9rem] md:text-[0.95rem] py-3 md:py-4">
            Send Enquiry →
          </button>
        </form>
      </div>
    </section>
  );
}