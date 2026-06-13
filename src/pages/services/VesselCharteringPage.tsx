import { motion } from 'framer-motion'
import { Ship, Anchor, Globe, Clock, FileText, CheckCircle } from 'lucide-react'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import vesselHero from '../../assets/vessel-chartering-services-page-hero.png'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const vesselTypes = [
  {
    type: 'VLCC',
    fullName: 'Very Large Crude Carrier',
    dwt: '200,000 – 320,000 DWT',
    capacity: '2,000,000+ barrels',
    routes: 'Long-haul crude oil trades (Middle East Gulf, West Africa, Americas)',
    suitable: 'Crude oil, heavy fuel oil, dirty products',
  },
  {
    type: 'Suezmax',
    fullName: 'Suezmax Tanker',
    dwt: '120,000 – 200,000 DWT',
    capacity: 'Up to 1,000,000 barrels',
    routes: 'Europe–West Africa, Europe–Americas, Med trades',
    suitable: 'Crude oil, dirty petroleum products',
  },
  {
    type: 'Aframax',
    fullName: 'Aframax Tanker',
    dwt: '80,000 – 120,000 DWT',
    capacity: 'Up to 750,000 barrels',
    routes: 'North Sea, Caribbean, Southeast Asia, Mediterranean',
    suitable: 'Crude oil, fuel oil, refined products',
  },
  {
    type: 'MR/LR',
    fullName: 'Medium / Long Range Product Tanker',
    dwt: '25,000 – 80,000 DWT',
    capacity: 'Up to 500,000 barrels',
    routes: 'Clean and dirty product trades globally',
    suitable: 'Diesel, jet fuel, gasoline, naphtha',
  },
  {
    type: 'Chemical',
    fullName: 'Chemical Tanker',
    dwt: '3,000 – 40,000 DWT',
    capacity: 'Coated / stainless steel tanks',
    routes: 'All major petrochemical trade lanes',
    suitable: 'Specialty chemicals, biofuels, vegetable oils, acids',
  },
]

const charterFeatures = [
  { Icon: Globe, title: 'Global Coverage', description: 'Access to a broad network of shipowners and brokers covering all major seaborne oil and gas trading routes.' },
  { Icon: Clock, title: 'Spot & Time Charters', description: 'Flexible charter structures — from single voyage spot fixtures to multi-month or annual time charter arrangements.' },
  { Icon: Anchor, title: 'Full Fixture Management', description: 'We handle the complete charter process: vessel nomination, vetting, fixture confirmation, laytime calculations, and demurrage.' },
  { Icon: FileText, title: 'Documentation', description: 'Complete freight documentation including charter party agreements, bills of lading coordination, notice of readiness, and statement of facts.' },
  { Icon: Ship, title: 'Vessel Vetting', description: 'All vessels nominated through our SIRE/CDI vetting review. We only recommend vessels that meet or exceed our clients\' safety and quality requirements.' },
  { Icon: CheckCircle, title: 'Post-Fixture Support', description: 'Proactive laytime monitoring, port agent coordination, and dispute resolution support throughout the voyage execution.' },
]

export default function VesselCharteringPage() {
  return (
    <>
      <SEOHead
        title="Vessel Chartering Services | VLCC & Tanker Charter Rotterdam"
        description="Charter VLCC, Suezmax, Aframax and chemical tankers from Rotterdam. Expert vessel chartering for oil and gas with full charter management."
        keywords="vessel chartering oil gas, VLCC charter Rotterdam, tanker charter Rotterdam, ship chartering petroleum, Suezmax Aframax charter"
        path="/services/vessel-chartering"
      />

      <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: 'Vessel Chartering', to: '/services/vessel-chartering' }]} />

      <PageHero
        label="Vessel Chartering"
        title="Full-Spectrum Vessel Chartering for Oil & Gas Cargoes"
        subtitle="From VLCC crude oil voyages to chemical tanker specialty trades — TankSpeed Terminals provides expert vessel chartering services integrated with our terminal storage operations."
        image={vesselHero}
      />

      {/* Description */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="About Vessel Chartering" title="Connecting Cargoes to the Right Vessel" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  General Tank Speed BV, the logistics arm of TankSpeed Terminals, provides comprehensive
                  vessel chartering services for oil and gas clients transporting crude oil, petroleum
                  products, biofuels, and specialty chemicals. Our chartering team has deep relationships
                  with shipowners, operators, and brokers across the global tanker market.
                </p>
                <p>
                  Whether you need a single voyage spot charter to move a cargo out of Rotterdam, a
                  time charter to cover a seasonal position, or a Contract of Affreightment (COA) for
                  recurring shipments, we structure fixtures that align with your commercial timeline
                  and risk management requirements.
                </p>
                <p>
                  Our chartering services integrate seamlessly with our terminal storage operations.
                  Cargoes stored at our Rotterdam, Houston, Jurong, Fujairah, or Ningbo-Zhoushan terminals can be
                  directly loaded onto chartered vessels from our dedicated berths — eliminating the
                  time and cost of additional lightering or multi-party coordination.
                </p>
              </div>
            </div>
            <InquiryForm productName="Vessel Chartering" />
          </div>
        </div>
      </section>

      {/* Vessel types table */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Vessel Types" title="Charter Options for Every Cargo" center />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-gold/20">
                  {['Vessel Type', 'DWT Range', 'Typical Capacity', 'Main Routes', 'Suitable For'].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-gold text-xs font-heading font-semibold uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vesselTypes.map((v, i) => (
                  <motion.tr
                    key={v.type}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="border-b border-gold/10 hover:bg-gold/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-heading font-bold text-gold">{v.type}</span>
                      <br />
                      <span className="text-text-muted text-xs">{v.fullName}</span>
                    </td>
                    <td className="py-4 px-4 text-text-muted text-sm">{v.dwt}</td>
                    <td className="py-4 px-4 text-text-muted text-sm">{v.capacity}</td>
                    <td className="py-4 px-4 text-text-muted text-sm">{v.routes}</td>
                    <td className="py-4 px-4 text-text-muted text-sm">{v.suitable}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Charter features */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Process" title="End-to-End Charter Management" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {charterFeatures.map((feat, i) => (
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

      <CTABanner title="Ready to Charter a Vessel?" ctaText="Request Charter Quote" ctaTo="/request-quote" />
    </>
  )
}
