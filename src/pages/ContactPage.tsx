import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TankSpeed Terminals — Vopak Logistics Services Permis',
  url: 'https://www.tankspeedterminals.eu',
  telephone: '+3197010257780',
  email: 'info@tankspeedterminals.eu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Buraanweg Haven 300',
    postalCode: '3195 ZH',
    addressLocality: 'Rotterdam',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '51.9225',
    longitude: '4.4792',
  },
  openingHours: ['Mo-Fr 08:00-18:00'],
}

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  company: z.string().min(2, 'Company required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log('Contact form submission:', data)
    setSubmitted(true)
  }

  return (
    <>
      <SEOHead
        title="Contact for Oil Tank Farm & Storage Leasing | TankSpeed Terminals Rotterdam"
        description="Contact our Rotterdam oil tank farm for storage rental, leasing and terminal services. Call +3197010257780 or email info@tankspeedterminals.eu."
        keywords="contact oil tank farm Rotterdam, oil storage enquiry, TankSpeed Terminals contact, petroleum terminal Netherlands, rent storage tank Rotterdam"
        path="/contact"
        schema={localBusinessSchema}
      />

      <PageHero
        label="Get In Touch"
        title="Contact TankSpeed Terminals"
        subtitle="Our team responds to all enquiries within 24 hours. For urgent operational matters, please call our direct line."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact details */}
            <div className="space-y-6">
              <SectionHeader label="Our Offices" title="Reach Us Directly" />

              {/* Vopak */}
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading font-bold text-gold text-sm uppercase tracking-widest mb-4">
                  Vopak Logistics Services Permis
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-primary text-sm">17 Buraanweg Haven 300</p>
                      <p className="text-text-muted text-sm">3195 ZH Rotterdam, Netherlands</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-gold shrink-0" />
                    <a href="tel:+3197010257780" className="text-text-muted text-sm hover:text-gold transition-colors">
                      +31 970 102 57780
                    </a>
                  </div>
                </div>
              </div>

              {/* GTS */}
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading font-bold text-gold text-sm uppercase tracking-widest mb-4">
                  General Tank Speed BV
                </h3>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:+31685386858" className="text-text-muted text-sm hover:text-gold transition-colors">
                    +31 68 538 6858
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading font-bold text-gold text-sm uppercase tracking-widest mb-4">
                  Email Addresses
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'General enquiries', email: 'info@tankspeedterminals.eu' },
                    { label: 'Bookings & chartering', email: 'booking@tankspeedterminals.eu' },
                    { label: 'Logistics enquiries', email: 'logistics@tankspeedterminals.eu' },
                  ].map((e) => (
                    <div key={e.email} className="flex items-start gap-3">
                      <Mail size={15} className="text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="text-text-muted text-xs mb-0.5">{e.label}</p>
                        <a href={`mailto:${e.email}`} className="text-text-primary text-sm hover:text-gold transition-colors break-all">
                          {e.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading font-bold text-gold text-sm uppercase tracking-widest mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gold" />
                    <span className="text-text-muted text-sm">Monday – Friday: 08:00 – 18:00 CET</span>
                  </div>
                  <p className="text-text-muted text-xs pl-5">
                    24/7 terminal emergency line available — ask for duty manager
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="card-glass rounded-xl p-6 lg:p-8">
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">Send Us a Message</h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <CheckCircle className="text-[#2ECC71] mx-auto mb-4" size={56} />
                      <h3 className="font-heading font-bold text-2xl text-text-primary mb-3">Message Sent!</h3>
                      <p className="text-text-muted text-lg">We'll respond within 24 hours.</p>
                      <p className="text-text-muted text-sm mt-2">Our storage specialists will be in touch shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="ct-name" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5">Full Name *</label>
                          <input id="ct-name" {...register('name')}
                            className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                            placeholder="John Smith" />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="ct-company" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5">Company *</label>
                          <input id="ct-company" {...register('company')}
                            className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                            placeholder="Acme Energy Ltd." />
                          {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="ct-email" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5">Email *</label>
                          <input id="ct-email" type="email" {...register('email')}
                            className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                            placeholder="you@company.com" />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="ct-phone" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5">Phone</label>
                          <input id="ct-phone" type="tel" {...register('phone')}
                            className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                            placeholder="+1 (555) 000-0000" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="ct-service" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5">Service Interest *</label>
                        <select id="ct-service" {...register('service')}
                          className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors appearance-none">
                          <option value="">Select a service...</option>
                          <option value="storage">Storage & Tank Rental</option>
                          <option value="chartering">Vessel Chartering</option>
                          <option value="freight">Freight Services</option>
                          <option value="laboratory">Laboratory Testing</option>
                          <option value="pipeline">Pipeline Services</option>
                          <option value="inspection">Inspection Services</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="ct-message" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5">Message *</label>
                        <textarea id="ct-message" {...register('message')} rows={5}
                          className="w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                          placeholder="Please describe your requirements in detail..." />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                      </div>
                      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center shimmer-btn py-4 text-base">
                        <Send size={18} />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-text-muted text-xs text-center">We respond to all enquiries within 24 business hours.</p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 rounded-xl overflow-hidden border border-gold/10">
            <div className="bg-navy-light p-4 border-b border-gold/10">
              <p className="text-text-muted text-xs font-heading font-semibold uppercase tracking-wider flex items-center gap-2">
                <MapPin size={13} className="text-gold" />
                Rotterdam Maasvlakte — 17 Buraanweg Haven 300, 3195 ZH
              </p>
            </div>
            <iframe
              title="TankSpeed Terminals Rotterdam location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.0%2C51.85%2C4.5%2C52.0&layer=mapnik&marker=51.9225%2C4.1234"
              width="100%"
              height="300"
              className="w-full opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
