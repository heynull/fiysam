'use client';

import { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, label: 'Office', value: 'Plot 4&5 NERDC Road, Lagos, Nigeria' },
  { icon: Phone, label: 'Phone', value: '+234 800 000 0000' },
  { icon: Mail, label: 'Email', value: 'fiysamenergy@gmail.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri, 8AM – 6PM WAT' },
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Thank you! We will respond within 24 hours.' });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <div key={index} className="flex gap-3 md:gap-4 items-start">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-amber-energy/5 border border-amber-energy/20 rounded flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <strong className="block text-[0.75rem] md:text-[0.8rem] text-grey-energy font-medium mb-0.5">{detail.label}</strong>
                    <span className="text-[0.85rem] md:text-[0.9rem] text-light-energy">{detail.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card-bg border border-border-dark rounded-lg p-6 md:p-10 order-1 md:order-2">
          {/* Success/Error Message */}
          {submitStatus.type && (
            <div className={`mb-4 p-3 rounded text-sm ${
              submitStatus.type === 'success' 
                ? 'bg-green-900/30 text-green-400 border border-green-700' 
                : 'bg-red-900/30 text-red-400 border border-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="John"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="Doe"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="john@company.com"
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
                placeholder="+234 ..."
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group mb-3 md:mb-4">
            <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Service Required *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors"
              required
              disabled={isSubmitting}
            >
              <option value="">Select a service...</option>
              <option>Power Solutions</option>
              <option>Water Solutions</option>
              <option>Gas Solutions</option>
              <option>EPC Contracting</option>
              <option>Operations & Maintenance</option>
              <option>Procurement & Logistics</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group mb-5 md:mb-6">
            <label className="block text-[0.7rem] md:text-[0.78rem] font-medium tracking-[0.06em] uppercase text-grey-energy mb-1 md:mb-2">Project Details *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-deep border border-border-dark rounded px-3 md:px-4 py-2 md:py-3 text-white-warm font-dm-sans text-[0.8rem] md:text-[0.875rem] outline-none focus:border-amber-energy transition-colors h-[100px] md:h-[120px] resize-none"
              placeholder="Briefly describe your project, location, and timeline..."
              required
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full border-none cursor-pointer text-[0.9rem] md:text-[0.95rem] py-3 md:py-4 flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              'Send Enquiry →'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
