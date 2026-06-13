import { motion } from 'framer-motion'
import { AlertCircle, Download, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import en590Img from '../../assets/en590-card.png'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const specs = [
  { parameter: 'Cetane Number', value: '≥ 51', method: 'EN ISO 5165' },
  { parameter: 'Cetane Index', value: '≥ 46', method: 'EN ISO 4264' },
  { parameter: 'Density @ 15°C', value: '820–845 kg/m³', method: 'EN ISO 12185' },
  { parameter: 'Sulphur Content', value: '≤ 10 mg/kg (10 ppm)', method: 'EN ISO 20846' },
  { parameter: 'Flash Point', value: '> 55°C', method: 'EN ISO 2719' },
  { parameter: 'Kinematic Viscosity @ 40°C', value: '2.0–4.5 mm²/s', method: 'EN ISO 3104' },
  { parameter: 'Cloud Point', value: 'Grade dependent', method: 'EN 23015' },
  { parameter: 'Cold Filter Plugging Point (CFPP)', value: 'Grade dependent (A to F)', method: 'EN 116' },
  { parameter: 'Polycyclic Aromatic Hydrocarbons', value: '≤ 8% m/m', method: 'EN 12916' },
  { parameter: 'Water Content', value: '≤ 200 mg/kg', method: 'EN ISO 12937' },
]

export default function DieselEN590Page() {
  return (
    <>
      <SEOHead
        title="Diesel EN 590 Bulk Storage Rotterdam | EN590 Terminal"
        description="Diesel EN 590 bulk storage at Rotterdam port terminal. 10ppm sulphur max, cetane 51 min. Lease diesel storage tanks — get a quote in 24 hours."
        keywords="diesel EN590 storage Rotterdam, EN590 bulk storage, diesel storage terminal Rotterdam, road transport diesel storage, ULSD Rotterdam"
        path="/products/diesel-en590"
      />

      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: 'Diesel EN 590', to: '/products/diesel-en590' }]} />

      <PageHero
        label="Product — Diesel"
        title="Diesel Fuel EN 590 — 10ppm Ultra-Low Sulphur"
        subtitle="European standard diesel EN 590 with 10ppm maximum sulphur. Blending and seasonal grade preparation capabilities at our Rotterdam Maasvlakte terminal."
        image={en590Img}
      />

      <div className="bg-steel/10 border-y border-steel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <AlertCircle size={14} className="text-steel shrink-0" />
          <p className="text-text-muted text-xs">We store this product — we do not trade it. All Diesel EN 590 inventory remains the property of the client.</p>
        </div>
      </div>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader label="Product Overview" title="About Diesel Fuel EN 590" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Diesel Fuel EN 590 is the European standard specification for automotive diesel fuel,
                  defined by the European Standard EN 590. The current specification mandates a
                  maximum sulphur content of 10 mg/kg (10 ppm), classifying it as Ultra-Low Sulphur
                  Diesel (ULSD). This specification has been mandatory in the European Union since 2009
                  and is now the global benchmark for automotive diesel quality.
                </p>
                <p>
                  EN 590 diesel is used in all modern diesel passenger cars, trucks, buses, agricultural
                  machinery, and off-road equipment equipped with advanced emission control systems
                  (DPF, SCR). The low sulphur content is essential for the proper function of
                  particulate filters and NOx reduction catalysts.
                </p>
                <p>
                  The EN 590 standard defines multiple seasonal and climatic grades (Grade A through F
                  for summer/winter performance) differentiated by their Cold Filter Plugging Point (CFPP)
                  and cloud point. Our Rotterdam terminal's blending capabilities allow us to produce
                  specific seasonal grades by blending EN 590 base product with kerosene
                  (for winterisation) or other approved additives.
                </p>
                <p>
                  Rotterdam is Europe's primary diesel import, export, and blending hub. Our terminal's
                  strategic location, pipeline connectivity, and deep-water berths make it the preferred
                  choice for diesel traders looking to optimize their European distribution and blending
                  operations. We serve export trades to Africa, the Americas, and the Middle East, as
                  well as intra-European distribution.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-4">Technical Specifications (EN 590)</h3>
                <div className="overflow-x-auto rounded-xl border border-gold/10">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gold/5 border-b border-gold/20">
                        {['Parameter', 'Specification', 'Test Method'].map((h) => (
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
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Blending Capabilities</h4>
                <ul className="space-y-2">
                  {['Summer/winter grade preparation', 'CFPP adjustment (kerosene blending)', 'Cetane improver dosing', 'Flow improver addition', 'FAME (biodiesel) blending to B7'].map((pt) => (
                    <li key={pt} className="text-text-muted text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Export Markets</h4>
                <ul className="space-y-2">
                  {['West Africa (primary export)', 'Americas (bulk export)', 'Middle East', 'Intra-European distribution', 'Airport/defence supply'].map((pt) => (
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
                    { to: '/services/vessel-chartering', label: 'Vessel Chartering' },
                    { to: '/services/laboratory', label: 'EN ISO Testing' },
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
          <InquiryForm productName="Diesel EN 590" />
        </div>
      </section>

      <CTABanner ctaText="Request Diesel Storage Quote" ctaTo="/request-quote" />
    </>
  )
}
