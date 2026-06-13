import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'

interface LeadFormData {
  name: string
  company: string
  email: string
  phone: string
  storageNeed: string
  location: string
  volume: string
}

const inputClass =
  'w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors'
const labelClass = 'block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5'

const empty: LeadFormData = {
  name: '', company: '', email: '', phone: '', storageNeed: '', location: '', volume: '',
}

export default function LeadCaptureForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<LeadFormData>(empty)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead capture form submission:', form)
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-navy" aria-label="Request a storage quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-glass rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Get Started Today</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-3">
              Request an Oil Storage Quote
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Tell us your requirements and our Rotterdam storage specialists will prepare a
              tailored proposal within 24 hours.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle className="text-[#2ECC71] mx-auto mb-4" size={56} />
                <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-text-muted">
                  Our storage specialists will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                noValidate
              >
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className={labelClass}>Company *</label>
                  <input
                    name="company"
                    required
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Acme Energy Ltd."
                  />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className={labelClass}>Storage Need *</label>
                  <select
                    name="storageNeed"
                    required
                    value={form.storageNeed}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select storage type...</option>
                    <option>Crude Oil Storage</option>
                    <option>Diesel EN 590 Storage</option>
                    <option>Jet A1 Aviation Fuel Storage</option>
                    <option>D6 Fuel Oil Storage</option>
                    <option>Petrochemical Storage</option>
                    <option>Blended Product Storage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Terminal</label>
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select location...</option>
                    <option>Rotterdam (Primary)</option>
                    <option>Houston, USA</option>
                    <option>Jurong, Singapore</option>
                    <option>Fujairah, UAE</option>
                    <option>No preference</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Estimated Volume &amp; Duration</label>
                  <input
                    name="volume"
                    value={form.volume}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 10,000 m³ for 6 months"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center shimmer-btn py-4 text-base"
                  >
                    <Send size={18} />
                    Send Enquiry — Response Within 24 Hours
                  </button>
                  <p className="text-text-muted text-xs text-center mt-3">
                    Or call us directly:{' '}
                    <a href="tel:+3197010257780" className="text-gold hover:underline">
                      +31 970 102 57780
                    </a>{' '}
                    |{' '}
                    <a
                      href="mailto:info@tankspeedterminals.eu"
                      className="text-gold hover:underline"
                    >
                      info@tankspeedterminals.eu
                    </a>
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
