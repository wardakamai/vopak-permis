import { motion } from 'framer-motion'
import { FlaskConical, ClipboardCheck, Award, Search } from 'lucide-react'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const testMethods = [
  { product: 'Crude Oil', tests: ['API Gravity (ASTM D287)', 'Sulphur Content (ASTM D4294)', 'Reid Vapour Pressure (ASTM D323)', 'Basic Sediment & Water (ASTM D4006)', 'Salt Content (ASTM D6470)', 'Pour Point (ASTM D97)'] },
  { product: 'Diesel EN 590', tests: ['Cetane Number (EN ISO 5165)', 'Density (EN ISO 12185)', 'Flash Point (EN ISO 2719)', 'Sulphur (EN ISO 20846)', 'CFPP (EN 116)', 'Viscosity (EN ISO 3104)'] },
  { product: 'Jet A1 (AFQRJOS)', tests: ['Density (ASTM D4052)', 'Flash Point (ASTM D56)', 'Freeze Point (ASTM D2386)', 'Aromatic Content (ASTM D1319)', 'Thermal Stability (ASTM D3241)', 'Conductivity (ASTM D2624)'] },
  { product: 'Fuel Oil D6', tests: ['Kinematic Viscosity (ASTM D445)', 'Flash Point (ASTM D93)', 'Pour Point (ASTM D97)', 'Sulphur (ASTM D4294)', 'Water Content (ASTM D95)', 'Calorific Value (ASTM D240)'] },
]

const labFeatures = [
  { Icon: FlaskConical, title: 'Accredited Laboratory', description: 'On-site laboratory accredited under ISO/IEC 17025. All test results are traceable, documented, and issued with official test certificates.' },
  { Icon: ClipboardCheck, title: 'Custody Transfer Analysis', description: 'Independent quality and quantity verification at tank loading and discharge. Compliant with IP, ASTM, and EN measurement standards.' },
  { Icon: Award, title: 'Independent Inspection Coordination', description: 'We coordinate with all major independent inspection agencies including SGS, Bureau Veritas, Intertek, and SAYBOLT.' },
  { Icon: Search, title: 'Product Sampling', description: 'Representative sampling protocols for vessel tanks, shore tanks, and pipeline streams. Retained reference samples maintained for dispute resolution.' },
]

export default function LaboratoryPage() {
  return (
    <>
      <SEOHead
        title="Petroleum Laboratory Testing Services Rotterdam | ISO/IEC 17025"
        description="ISO/IEC 17025 accredited petroleum laboratory at our Rotterdam terminal. Crude oil, diesel EN590, jet fuel and fuel oil quality testing."
        keywords="petroleum laboratory Rotterdam, ISO 17025 oil testing, diesel EN590 testing, jet fuel laboratory Rotterdam, custody transfer analysis"
        path="/services/laboratory"
      />

      <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: 'Laboratory Services', to: '/services/laboratory' }]} />

      <PageHero
        label="Laboratory Services"
        title="Accredited Product Testing & Quality Assurance"
        subtitle="Our on-site ISO/IEC 17025 accredited laboratory provides comprehensive product testing, custody transfer verification, and independent inspection coordination for all petroleum products stored at our terminals."
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="Laboratory Services" title="Precision Testing for Every Product" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Product quality is non-negotiable in the petroleum industry. Our on-site laboratory
                  at Rotterdam provides real-time testing capabilities that eliminate the delays
                  associated with sending samples to external laboratories. Every product received
                  into or dispatched from our terminal is subject to quality verification against
                  agreed specifications.
                </p>
                <p>
                  Our laboratory is equipped with modern analytical instruments capable of performing
                  the full range of ASTM and EN test methods relevant to crude oil, refined petroleum
                  products, biofuels, and specialty chemicals. All instruments are regularly calibrated
                  against certified reference standards.
                </p>
                <p>
                  For custody transfer operations — whether vessel-to-shore, shore-to-vessel, or
                  pipeline transfers — our laboratory provides independent quantity and quality
                  determination. We coordinate with independent inspection agencies of the client's
                  choice to provide third-party verification where required by trade contracts or
                  letters of credit.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {labFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card-glass rounded-xl p-5"
                >
                  <feat.Icon size={22} className="text-gold mb-3" />
                  <h3 className="font-heading font-bold text-text-primary mb-1">{feat.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Test methods */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Test Methods" title="ASTM & ISO Accredited Testing" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {testMethods.map((group, i) => (
              <motion.div
                key={group.product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass rounded-xl p-5"
              >
                <h3 className="font-heading font-bold text-gold text-base mb-4 pb-2 border-b border-gold/20">
                  {group.product}
                </h3>
                <ul className="space-y-2">
                  {group.tests.map((t) => (
                    <li key={t} className="text-text-muted text-xs leading-relaxed flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold/50 rounded-full mt-1.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Request Testing" title="Laboratory Service Enquiry" center />
          <div className="mt-8">
            <InquiryForm productName="Laboratory Services" />
          </div>
        </div>
      </section>

      <CTABanner ctaText="Request Laboratory Services" ctaTo="/request-quote" />
    </>
  )
}
