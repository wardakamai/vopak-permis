import { motion } from 'framer-motion'
import { Thermometer, Wind, Droplets, Boxes, Settings, CheckCircle } from 'lucide-react'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import heroBg from '../../assets/hero-bg.png'
import CTABanner from '../../components/shared/CTABanner'
import Breadcrumb from '../../components/shared/Breadcrumb'
import FAQAccordion from '../../components/shared/FAQAccordion'
import LeadCaptureForm from '../../components/shared/LeadCaptureForm'
import type { FAQItem } from '../../components/shared/FAQAccordion'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const storageFAQs: FAQItem[] = [
  {
    question: 'How do I rent an oil storage tank in Rotterdam?',
    answer:
      'Contact our Rotterdam storage team via the quote form on this page, email info@tankspeedterminals.eu, or call +31 970 102 57780. We offer spot rental from 30 days and long-term dedicated tank leases. Our commercial team will respond within 24 hours with a tailored proposal.',
  },
  {
    question: 'What is the minimum tank volume available for lease?',
    answer:
      'Tank rental at our Rotterdam terminal starts from approximately 10,000 m³ for spot contracts. Larger dedicated tank leasing arrangements range from 50,000 m³ to full tank clusters. We can accommodate clients requiring short-term or long-term bulk liquid storage in Rotterdam.',
  },
  {
    question: 'What products can be stored at your Rotterdam tank farm?',
    answer:
      'Our Rotterdam oil tank farm handles crude oil, diesel EN 590, Jet A1 aviation fuel, D6 fuel oil, biofuels, petrochemicals, and blended products. Tanks are equipped with heating, nitrogen blanketing, and vapor recovery to meet product-specific storage requirements.',
  },
  {
    question: 'Do you offer tank storage in Houston, Jurong, Fujairah or Ningbo-Zhoushan?',
    answer:
      'Yes. In addition to our primary Rotterdam oil tank farm, we provide bulk liquid storage through subleased terminals in Houston (Gulf Coast), Jurong Island (Singapore), Fujairah (UAE), and Ningbo-Zhoushan Port (China). Contact us specifying your preferred location and we will match you with the right facility.',
  },
  {
    question: 'How quickly can I get a storage quote?',
    answer:
      'Our commercial team responds to all storage enquiries within 24 business hours. For urgent requirements, call +31 970 102 57780 directly. We can typically confirm spot availability and indicative pricing within the same business day for standard petroleum products.',
  },
]

const storageFeatures = [
  { Icon: Boxes, title: 'Tank Rental & Leasing', description: 'Short-term spot rental and long-term dedicated tank leasing arrangements. Flexible contract terms from 30 days to multi-year agreements.' },
  { Icon: Settings, title: 'Product Blending', description: 'On-site blending capabilities to meet client-specific product specifications. Inline and in-tank blending with metered accuracy.' },
  { Icon: Thermometer, title: 'Tank Heating', description: 'Steam and electrical heating systems for high-viscosity products. Precise temperature maintenance for waxes, bitumen, and heavy fuel oils.' },
  { Icon: Wind, title: 'Nitrogen Blanketing', description: 'Nitrogen blanket systems to prevent oxidation and moisture ingress. Critical for aviation fuel, biofuels, and reactive products.' },
  { Icon: Droplets, title: 'Vapor Recovery', description: 'High-efficiency vapor recovery units (VRU) on all tanks to minimize VOC emissions and comply with environmental regulations.' },
  { Icon: CheckCircle, title: 'Custom Solutions', description: 'Engineered storage solutions for non-standard products, blending ratios, or specialized handling requirements.' },
]

const whyUs = [
  'Direct berth access at Rotterdam Maasvlakte — no lightering required',
  'Full pipeline connectivity to major Dutch refineries and export terminals',
  'ISO 9001 certified operations with traceable quality management',
  '24/7 operational monitoring and dedicated client portal access',
  'Independent inspection facilitation — we work with any approved surveyor',
  'Customs bonded warehouse status — optimize duty deferral for import/export',
]

export default function StoragePage() {
  return (
    <>
      <SEOHead
        title="Oil Storage Tank Leasing & Rental in Rotterdam | TankSpeed Terminals"
        description="Rent and lease oil storage tanks at the Port of Rotterdam. Flexible bulk liquid storage, blending and heating. Request a tank leasing quote in 24 hours."
        keywords="tank terminal leasing Rotterdam, rent storage tank Rotterdam, bulk liquid storage Rotterdam, oil storage tank rental, lease oil storage tank, petroleum storage Rotterdam"
        path="/services/storage"
      />

      <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: 'Storage Services', to: '/services/storage' }]} />

      <PageHero
        label="Storage Services"
        title="World-Class Bulk Liquid Storage at Port of Rotterdam"
        subtitle="From short-term spot rental to multi-year dedicated leasing — our Rotterdam Maasvlakte terminal provides secure, compliant, and operationally excellent storage for the full spectrum of petroleum products."
        image={heroBg}
      />

      {/* Description */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader label="About Our Storage Services" title="Reliable Storage You Can Build Your Business On" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  TankSpeed Terminals operates one of the most strategically located bulk liquid storage facilities
                  in Europe at Rotterdam's Maasvlakte. Our terminal provides dedicated storage capacity for
                  petroleum products including crude oil, refined products, biofuels, and specialty chemicals.
                  Every tank is equipped with modern instrumentation, safety systems, and environmental controls
                  to ensure product integrity and regulatory compliance.
                </p>
                <p>
                  Our storage contracts are designed with commercial flexibility in mind. Whether you require a
                  single tank for a spot cargo, a multi-tank arrangement for a seasonal trading position, or a
                  long-term dedicated lease for operational inventory management, our commercial team will
                  structure an agreement that matches your specific business needs and timeline.
                </p>
                <p>
                  Value-added services such as product blending, heating, nitrogen blanketing, and vapor
                  recovery are available as integrated components of your storage contract. This eliminates
                  the complexity of managing multiple service providers and ensures seamless coordination
                  of all terminal activities on your behalf.
                </p>
                <p>
                  Our subleased terminals in Houston, Jurong (Singapore), and Fujairah (UAE) operate to
                  the same service standards as our Rotterdam primary facility, providing global clients
                  with consistent, reliable storage wherever they need it in the supply chain.
                </p>
              </div>
            </div>

            {/* Quick stats sidebar */}
            <div className="space-y-4">
              {[
                { label: 'Total Capacity', value: '2.5M+ m³' },
                { label: 'Tank Types', value: 'Floating, Fixed Roof, Cone Roof' },
                { label: 'Products', value: 'Crude, Refined, Biofuels, Chemicals' },
                { label: 'Contract Minimum', value: '30 Days' },
                { label: 'Inspection Support', value: 'All Major Agencies' },
                { label: 'Certifications', value: 'ISO 9001, ISO 14001, ISO 45001' },
              ].map((stat) => (
                <div key={stat.label} className="card-glass rounded-lg px-4 py-3 flex justify-between items-center">
                  <span className="text-text-muted text-sm">{stat.label}</span>
                  <span className="text-gold font-heading font-semibold text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Service Features" title="Full-Spectrum Storage Capabilities" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {storageFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-6"
              >
                <feat.Icon size={24} className="text-gold mb-3" />
                <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{feat.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="Why Choose Us" title="The TankSpeed Storage Advantage" />
              <ul className="mt-8 space-y-4">
                {whyUs.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-text-muted text-sm leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <InquiryForm productName="Storage Services" />
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={storageFAQs}
        title="Oil Storage Tank Leasing — Common Questions"
        label="Storage FAQ"
      />
      <LeadCaptureForm />
      <CTABanner ctaText="Request Storage Quote" ctaTo="/request-quote" />
    </>
  )
}
