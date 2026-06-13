import { motion } from 'framer-motion'
import { AlertCircle, Download, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import crudeOilImg from '../../assets/crudeoil-card.png'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const specs = [
  { parameter: 'API Gravity (Light Crude)', value: '35–45°', method: 'ASTM D287' },
  { parameter: 'API Gravity (Medium Crude)', value: '25–35°', method: 'ASTM D287' },
  { parameter: 'API Gravity (Heavy Crude)', value: '< 25°', method: 'ASTM D287' },
  { parameter: 'Sulphur Content (Sweet)', value: '< 0.5% m/m', method: 'ASTM D4294' },
  { parameter: 'Sulphur Content (Sour)', value: '0.5–3.5% m/m', method: 'ASTM D4294' },
  { parameter: 'Reid Vapour Pressure', value: '0.3–0.9 bar (grade dependent)', method: 'ASTM D323' },
  { parameter: 'Water Content (BSW)', value: '≤ 0.5% v/v (delivered)', method: 'ASTM D4006' },
  { parameter: 'Salt Content', value: '≤ 10 ptb (delivered)', method: 'ASTM D6470' },
  { parameter: 'Pour Point', value: 'Grade dependent (-20 to +30°C)', method: 'ASTM D97' },
  { parameter: 'Total Acid Number', value: '< 0.5 mg KOH/g (typical)', method: 'ASTM D664' },
]

export default function CrudeOilPage() {
  return (
    <>
      <SEOHead
        title="Crude Oil Storage Terminal Rotterdam | Bulk Oil Storage Europe"
        description="Crude oil bulk storage at our Rotterdam terminal for refinery feedstock and upstream trade. API 20-45. Contact us for crude oil storage in Europe."
        keywords="crude oil storage Rotterdam, crude oil storage Europe, crude oil terminal Rotterdam, bulk oil storage Netherlands, refinery feedstock storage"
        path="/products/crude-oil"
      />

      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: 'Crude Oil', to: '/products/crude-oil' }]} />

      <PageHero
        label="Product — Crude Oil"
        title="Crude Oil — All Grades, All Routes"
        subtitle="Light, medium, and heavy crude oil storage at Rotterdam, Houston, and Fujairah. Full custody transfer metering, inspection coordination, and vessel chartering integration."
        image={crudeOilImg}
      />

      <div className="bg-steel/10 border-y border-steel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <AlertCircle size={14} className="text-steel shrink-0" />
          <p className="text-text-muted text-xs">We store this product — we do not trade it. All crude oil inventory remains the property of the client.</p>
        </div>
      </div>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader label="Product Overview" title="About Crude Oil Storage" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Crude oil is the raw, unrefined petroleum extracted from geological formations.
                  It forms the basis of the global energy economy, serving as the primary feedstock
                  for petroleum refineries worldwide. Crude grades vary significantly in their
                  physical and chemical properties — primarily API gravity (a measure of density)
                  and sulphur content — which determine their value, handling requirements, and
                  suitability for different refinery configurations.
                </p>
                <p>
                  Our terminal infrastructure accommodates all crude grades — from light sweet
                  crudes (high API, low sulphur) such as North Sea Brent and WTI, to medium
                  and heavy sour grades (lower API, higher sulphur) such as Urals, Arab Medium/Heavy,
                  and Mexican Maya. Each grade has distinct storage requirements relating to
                  temperature, mixing, and vapour management, all of which our facilities are
                  designed to handle safely.
                </p>
                <p>
                  Rotterdam is Europe's primary crude oil import and blending hub. Our Maasvlakte
                  location provides direct deep-water berth access for VLCC class tankers — the
                  largest crude carriers in the world — enabling direct discharge from major
                  crude tanker routes from the Middle East Gulf, West Africa, and the Americas.
                  Pipeline connectivity then enables efficient onward movement to the Pernis
                  refinery complex or export via smaller tankers into the Rhine waterway system.
                </p>
                <p>
                  All crude oil transfers at our terminal are conducted with custody-transfer grade
                  metering and independent inspection. Our laboratory provides full crude assay
                  sampling coordination, and we work with all major third-party inspection agencies
                  to ensure transparent, agreed quantity and quality determination at each transfer point.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-4">Typical Specification Range</h3>
                <div className="overflow-x-auto rounded-xl border border-gold/10">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gold/5 border-b border-gold/20">
                        {['Parameter', 'Typical Range', 'Test Method'].map((h) => (
                          <th key={h} className="text-left py-3 px-4 text-gold text-xs font-heading font-semibold uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {specs.map((row, i) => (
                        <motion.tr
                          key={row.parameter}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                          className="border-b border-gold/10 hover:bg-gold/5 transition-colors"
                        >
                          <td className="py-3 px-4 text-text-primary text-sm font-medium">{row.parameter}</td>
                          <td className="py-3 px-4 text-gold font-heading font-semibold text-sm">{row.value}</td>
                          <td className="py-3 px-4 text-text-muted text-xs">{row.method}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <button className="mt-6 btn-secondary text-sm flex items-center gap-2">
                <Download size={15} />
                Download Specification Sheet (PDF)
              </button>
            </div>

            <div className="space-y-6">
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Custody Transfer</h4>
                <ul className="space-y-2">
                  {['API MPMS custody metering', 'Independent inspector coordination', 'Draft survey capability', 'Full crude assay sampling', 'Metered VEF applied'].map((pt) => (
                    <li key={pt} className="text-text-muted text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Vessel Integration</h4>
                <ul className="space-y-2">
                  {['VLCC deep-water berth access', 'Suezmax / Aframax capability', 'Vessel chartering through GTS BV', 'Concurrent loading/discharge'].map((pt) => (
                    <li key={pt} className="text-text-muted text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Related Services</h4>
                <ul className="space-y-2">
                  {[
                    { to: '/services/storage', label: 'Storage Services' },
                    { to: '/services/vessel-chartering', label: 'VLCC / Suezmax Charter' },
                    { to: '/inspection', label: 'Inspection Services' },
                  ].map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-gold text-xs hover:underline flex items-center gap-1">
                        <LinkIcon size={11} />{l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm productName="Crude Oil" />
        </div>
      </section>

      <CTABanner ctaText="Request Crude Oil Storage Quote" ctaTo="/request-quote" />
    </>
  )
}
