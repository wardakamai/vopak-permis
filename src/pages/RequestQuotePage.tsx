import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, Phone, Mail, Shield, Clock, Globe, Award } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'

const step1Schema = z.object({
  name: z.string().min(2, 'Name required'),
  company: z.string().min(2, 'Company required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(5, 'Phone required'),
  country: z.string().min(2, 'Country required'),
})

const step2Schema = z.object({
  services: z.array(z.string()).min(1, 'Select at least one service'),
  product: z.string().min(1, 'Select a product'),
  volume: z.string().min(1, 'Volume/quantity required'),
  terminal: z.string().min(1, 'Select a preferred terminal'),
})

const step3Schema = z.object({
  timeline: z.string().min(1, 'Select a timeline'),
  requirements: z.string().optional(),
  source: z.string().optional(),
})

type Step1 = z.infer<typeof step1Schema>
type Step2 = z.infer<typeof step2Schema>
type Step3 = z.infer<typeof step3Schema>

const whyUs = [
  { Icon: Globe, text: 'Four global terminal locations — Rotterdam, Houston, Jurong, Fujairah' },
  { Icon: Shield, text: 'ISO 9001, ISO 14001, ISO 45001 certified operations' },
  { Icon: Clock, text: '24/7 terminal operations with dedicated client account management' },
  { Icon: Award, text: 'ISPS and ISGOTT compliant — all vessels and products welcome' },
  { Icon: CheckCircle, text: 'Flexible contract terms from 30-day spot to multi-year leases' },
]

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2 flex-1">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 ${
            s < step ? 'bg-gold text-navy' :
            s === step ? 'bg-gold text-navy ring-4 ring-gold/30' :
            'bg-navy-light border border-gold/20 text-text-muted'
          }`}>
            {s < step ? <CheckCircle size={16} /> : s}
          </div>
          <div className={`h-px flex-1 transition-all duration-300 ${s < step ? 'bg-gold' : 'bg-gold/20'}`} />
        </div>
      ))}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm transition-all duration-300 ${
        step > 3 ? 'bg-gold text-navy' : 'bg-navy-light border border-gold/20 text-text-muted'
      }`}>✓</div>
    </div>
  )
}

export default function RequestQuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<Step1 & Step2 & Step3>>({})
  const [submitted, setSubmitted] = useState(false)

  const form1 = useForm<Step1>({ resolver: zodResolver(step1Schema), defaultValues: formData })
  const form2 = useForm<Step2>({ resolver: zodResolver(step2Schema), defaultValues: { ...formData, services: (formData as Step2).services ?? [] } })
  const form3 = useForm<Step3>({ resolver: zodResolver(step3Schema), defaultValues: formData })

  const handleStep1 = (data: Step1) => { setFormData((p) => ({ ...p, ...data })); setStep(2) }
  const handleStep2 = (data: Step2) => { setFormData((p) => ({ ...p, ...data })); setStep(3) }
  const handleStep3 = (data: Step3) => {
    const final = { ...formData, ...data }
    console.log('Quote request submitted:', final)
    setSubmitted(true)
  }

  const inputClass = "w-full bg-navy border border-gold/20 rounded-lg px-4 py-3 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
  const labelClass = "block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1.5"

  return (
    <>
      <SEOHead
        title="Request a Storage Quote — Bulk Liquid Storage"
        description="Request a storage and logistics quote from TankSpeed Terminals. Multi-step form for storage rental, vessel chartering, freight services, and pipeline access at Rotterdam and global terminals."
        keywords="request oil storage quote Rotterdam, tank rental quote Netherlands, petroleum storage price, vessel chartering quote"
        path="/request-quote"
      />

      <div className="min-h-screen pt-24 pb-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="section-label mb-2">Free Consultation</p>
                <h1 className="font-heading font-bold text-4xl sm:text-5xl text-text-primary mb-3">
                  Request a Storage Quote
                </h1>
                <p className="text-text-muted">
                  Complete the form below and our team will prepare a tailored proposal within 24 hours.
                </p>
              </div>

              <ProgressBar step={step} />

              <div className="card-glass rounded-xl p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="text-[#2ECC71] mx-auto mb-4" size={64} />
                      <h2 className="font-heading font-bold text-3xl text-text-primary mb-3">Quote Request Received!</h2>
                      <p className="text-text-muted text-lg mb-2">We'll respond within 24 hours.</p>
                      <p className="text-text-muted text-sm">
                        A member of our commercial team will contact you at{' '}
                        <span className="text-gold">{formData.email}</span> to discuss your requirements.
                      </p>
                    </motion.div>
                  ) : step === 1 ? (
                    <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">Step 1: Contact Information</h2>
                      <form onSubmit={form1.handleSubmit(handleStep1)} className="space-y-5" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="rq-name" className={labelClass}>Full Name *</label>
                            <input id="rq-name" {...form1.register('name')} className={inputClass} placeholder="John Smith" />
                            {form1.formState.errors.name && <p className="text-red-400 text-xs mt-1">{form1.formState.errors.name.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="rq-company" className={labelClass}>Company *</label>
                            <input id="rq-company" {...form1.register('company')} className={inputClass} placeholder="Acme Energy Ltd." />
                            {form1.formState.errors.company && <p className="text-red-400 text-xs mt-1">{form1.formState.errors.company.message}</p>}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="rq-email" className={labelClass}>Email *</label>
                            <input id="rq-email" type="email" {...form1.register('email')} className={inputClass} placeholder="you@company.com" />
                            {form1.formState.errors.email && <p className="text-red-400 text-xs mt-1">{form1.formState.errors.email.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="rq-phone" className={labelClass}>Phone *</label>
                            <input id="rq-phone" type="tel" {...form1.register('phone')} className={inputClass} placeholder="+1 (555) 000-0000" />
                            {form1.formState.errors.phone && <p className="text-red-400 text-xs mt-1">{form1.formState.errors.phone.message}</p>}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="rq-country" className={labelClass}>Country *</label>
                          <input id="rq-country" {...form1.register('country')} className={inputClass} placeholder="Netherlands" />
                          {form1.formState.errors.country && <p className="text-red-400 text-xs mt-1">{form1.formState.errors.country.message}</p>}
                        </div>
                        <button type="submit" className="btn-primary w-full justify-center py-4">
                          Continue to Service Details <ArrowRight size={18} />
                        </button>
                      </form>
                    </motion.div>
                  ) : step === 2 ? (
                    <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">Step 2: Service Requirements</h2>
                      <form onSubmit={form2.handleSubmit(handleStep2)} className="space-y-5" noValidate>
                        <div>
                          <label className={labelClass}>Services Required *</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Storage Rental', 'Tank Leasing', 'Vessel Chartering', 'Freight Services', 'Pipeline Access', 'Laboratory Testing'].map((svc) => (
                              <label key={svc} className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" value={svc} {...form2.register('services')} className="accent-[#0EA5E9] w-4 h-4" />
                                <span className="text-text-muted text-sm group-hover:text-text-primary transition-colors">{svc}</span>
                              </label>
                            ))}
                          </div>
                          {form2.formState.errors.services && <p className="text-red-400 text-xs mt-1">{form2.formState.errors.services.message}</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="rq-product" className={labelClass}>Product Type *</label>
                            <select id="rq-product" {...form2.register('product')} className={inputClass}>
                              <option value="">Select product...</option>
                              <option>Crude Oil</option>
                              <option>Diesel EN 590</option>
                              <option>Jet A1 Aviation Fuel</option>
                              <option>D6 Fuel Oil</option>
                              <option>Biofuels</option>
                              <option>Petrochemicals</option>
                              <option>Other</option>
                            </select>
                            {form2.formState.errors.product && <p className="text-red-400 text-xs mt-1">{form2.formState.errors.product.message}</p>}
                          </div>
                          <div>
                            <label htmlFor="rq-terminal" className={labelClass}>Preferred Terminal *</label>
                            <select id="rq-terminal" {...form2.register('terminal')} className={inputClass}>
                              <option value="">Select terminal...</option>
                              <option>Rotterdam (Primary)</option>
                              <option>Houston</option>
                              <option>Jurong, Singapore</option>
                              <option>Fujairah, UAE</option>
                              <option>No preference</option>
                            </select>
                            {form2.formState.errors.terminal && <p className="text-red-400 text-xs mt-1">{form2.formState.errors.terminal.message}</p>}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="rq-volume" className={labelClass}>Volume / Quantity *</label>
                          <input id="rq-volume" {...form2.register('volume')} className={inputClass} placeholder="e.g. 50,000 MT / 100,000 m³ / 3 tanks" />
                          {form2.formState.errors.volume && <p className="text-red-400 text-xs mt-1">{form2.formState.errors.volume.message}</p>}
                        </div>
                        <div className="flex gap-4">
                          <button type="button" onClick={() => setStep(1)} className="btn-secondary flex items-center gap-2">
                            <ArrowLeft size={16} /> Back
                          </button>
                          <button type="submit" className="btn-primary flex-1 justify-center py-4">
                            Continue to Timeline <ArrowRight size={18} />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <h2 className="font-heading font-bold text-2xl text-text-primary mb-6">Step 3: Timeline & Details</h2>
                      <form onSubmit={form3.handleSubmit(handleStep3)} className="space-y-5" noValidate>
                        <div>
                          <label htmlFor="rq-timeline" className={labelClass}>Required Start Date / Timeline *</label>
                          <select id="rq-timeline" {...form3.register('timeline')} className={inputClass}>
                            <option value="">Select timeline...</option>
                            <option>Immediately / ASAP</option>
                            <option>Within 1 month</option>
                            <option>1–3 months</option>
                            <option>3–6 months</option>
                            <option>6–12 months</option>
                            <option>Planning phase (12+ months)</option>
                          </select>
                          {form3.formState.errors.timeline && <p className="text-red-400 text-xs mt-1">{form3.formState.errors.timeline.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="rq-reqs" className={labelClass}>Special Requirements or Notes</label>
                          <textarea id="rq-reqs" {...form3.register('requirements')} rows={4} className={`${inputClass} resize-none`}
                            placeholder="Any specific handling requirements, product specs, temperature requirements, inspection instructions..." />
                        </div>
                        <div>
                          <label htmlFor="rq-source" className={labelClass}>How did you hear about us?</label>
                          <select id="rq-source" {...form3.register('source')} className={inputClass}>
                            <option value="">Select...</option>
                            <option>Search engine (Google, Bing)</option>
                            <option>Industry colleague / referral</option>
                            <option>Trade publication</option>
                            <option>Conference / trade show</option>
                            <option>LinkedIn</option>
                            <option>Vopak / General Tank Speed BV directly</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="flex gap-4">
                          <button type="button" onClick={() => setStep(2)} className="btn-secondary flex items-center gap-2">
                            <ArrowLeft size={16} /> Back
                          </button>
                          <button type="submit" className="btn-primary flex-1 justify-center py-4 shimmer-btn text-base">
                            Submit Quote Request <CheckCircle size={18} />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading font-bold text-text-primary text-lg mb-5">Why Choose TankSpeed Terminals?</h3>
                <ul className="space-y-4">
                  {whyUs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <item.Icon size={15} className="text-gold" />
                      </div>
                      <span className="text-text-muted text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-glass rounded-xl p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4">Prefer to call?</h3>
                <div className="space-y-3">
                  <a href="tel:+3197010257780" className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors">
                    <Phone size={16} className="text-gold" />
                    <div>
                      <p className="text-xs text-gold/70">Vopak Logistics Services</p>
                      <p className="text-sm">+31 970 102 57780</p>
                    </div>
                  </a>
                  <a href="tel:+31685386858" className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors">
                    <Phone size={16} className="text-gold" />
                    <div>
                      <p className="text-xs text-gold/70">General Tank Speed BV</p>
                      <p className="text-sm">+31 68 538 6858</p>
                    </div>
                  </a>
                  <a href="mailto:info@tankspeedterminals.eu" className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors">
                    <Mail size={16} className="text-gold" />
                    <p className="text-sm">info@tankspeedterminals.eu</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
