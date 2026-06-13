import { motion } from 'framer-motion'
import { ClipboardCheck, Scale, Ruler, Droplets, Award, Users } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Breadcrumb from '../components/shared/Breadcrumb'
import PageHero from '../components/shared/PageHero'
import CTABanner from '../components/shared/CTABanner'
import InquiryForm from '../components/shared/InquiryForm'
import SectionHeader from '../components/shared/SectionHeader'

const inspectionServices = [
  { Icon: ClipboardCheck, title: 'Custody Transfer Inspection', description: 'Independent verification of quantity and quality at every product transfer point. Shore tank and vessel figure reconciliation, ullage reports, and loss/gain analysis.' },
  { Icon: Scale, title: 'Draft Surveys', description: 'Precision draft survey calculations for bulk liquid cargo on vessel arrival and departure. Hydrostatic table analysis and trim/list correction applied by certified surveyors.' },
  { Icon: Ruler, title: 'Tank Calibration & Gauging', description: 'Calibrated tank gauging using automatic tank gauges (ATG), manual dipping, and level measurement. All gauging against certified tank calibration tables.' },
  { Icon: Droplets, title: 'Product Sampling', description: 'Representative product sampling from shore tanks, vessel tanks, and pipeline streams. Sample retention service with sealed samples held for dispute resolution.' },
  { Icon: Award, title: 'Quality Testing Coordination', description: 'Coordination of quality testing with our on-site ISO/IEC 17025 accredited laboratory. Third-party testing coordination with SGS, Bureau Veritas, and Intertek.' },
  { Icon: Users, title: 'Independent Inspection Agencies', description: 'We facilitate and accommodate all major independent inspection agencies. Our terminal is fully equipped for joint inspections between buyer, seller, and independent parties.' },
]

const agencies = ['SGS', 'Bureau Veritas', 'Intertek / Caleb Brett', 'SAYBOLT', 'Core Laboratories', 'Alex Stewart International']

export default function InspectionPage() {
  return (
    <>
      <SEOHead
        title="Petroleum Inspection Services Rotterdam | Custody Transfer & Surveys"
        description="Independent petroleum inspection services at Rotterdam: custody transfer, draft surveys, tank calibration, and product sampling by certified inspectors."
        keywords="petroleum inspection Rotterdam, custody transfer inspection, draft survey Rotterdam, tank calibration Netherlands, independent inspection oil terminal"
        path="/inspection"
      />

      <Breadcrumb items={[{ label: 'Inspection', to: '/inspection' }]} />

      <PageHero
        label="Inspection Services"
        title="Independent Inspection & Custody Transfer"
        subtitle="Transparent, accurate, and fully independent inspection services at all TankSpeed Terminals locations — ensuring your product quantity and quality is verified to your exact requirements."
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader label="Our Approach" title="Inspection You Can Rely On" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Accurate, independent product inspection is critical to every custody transfer
                  transaction in the petroleum industry. Disputes over product quantity or quality
                  at the terminal can result in significant financial losses and operational
                  delays. Our approach is to eliminate ambiguity through rigorous inspection
                  procedures, certified instrumentation, and transparent documentation.
                </p>
                <p>
                  TankSpeed Terminals operates a fully open-access inspection regime. We actively
                  welcome independent inspectors on behalf of buyers, sellers, banks, and insurers
                  at all stages of product receipt, storage, and delivery. Our facilities are
                  designed to accommodate concurrent multi-party inspections safely and efficiently.
                </p>
                <p>
                  Our team of trained terminal operators works alongside independent inspectors to
                  provide all necessary access, documentation, and cooperation. Tank gauging
                  records, pump meter readings, temperature data, and laboratory test results are
                  all made available to authorised parties in real time.
                </p>
              </div>
            </div>
            <div>
              <div className="card-glass rounded-xl p-6 mb-6">
                <h3 className="font-heading font-bold text-text-primary mb-4">Approved Inspection Agencies</h3>
                <p className="text-text-muted text-sm mb-4">We work with all major internationally recognised inspection agencies. Current approved agency list includes:</p>
                <div className="grid grid-cols-2 gap-3">
                  {agencies.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-text-muted text-sm">
                      <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
                <p className="text-text-muted text-xs mt-4">Other recognised inspection agencies can be approved upon request.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {inspectionServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-6"
              >
                <svc.Icon size={24} className="text-gold mb-3" />
                <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{svc.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Request Inspection" title="Schedule an Inspection" center />
          <div className="mt-8">
            <InquiryForm productName="Inspection Services" />
          </div>
        </div>
      </section>

      <CTABanner ctaText="Request Inspection Services" ctaTo="/request-quote" />
    </>
  )
}
