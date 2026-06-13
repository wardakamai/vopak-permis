import { motion } from 'framer-motion'
import { AlertCircle, Download, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import jetA1Img from '../../assets/jeta1-card.png'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const specs = [
  { parameter: 'Flash Point', value: '+38°C min', method: 'ASTM D56' },
  { parameter: 'Density @ 15°C', value: '775–840 kg/m³', method: 'ASTM D4052' },
  { parameter: 'Freeze Point', value: '-47°C max', method: 'ASTM D2386' },
  { parameter: 'Aromatic Content', value: '≤ 25.0% v/v', method: 'ASTM D1319' },
  { parameter: 'Net Heat of Combustion', value: '≥ 42.8 MJ/kg', method: 'ASTM D4529' },
  { parameter: 'Kinematic Viscosity @ -20°C', value: '≤ 8.0 mm²/s', method: 'ASTM D445' },
  { parameter: 'Sulphur Content', value: '≤ 3000 mg/kg', method: 'ASTM D5453' },
  { parameter: 'Thermal Stability (JFTOT)', value: '≥ 260°C', method: 'ASTM D3241' },
  { parameter: 'Electrical Conductivity', value: '50–450 pS/m', method: 'ASTM D2624' },
  { parameter: 'Existent Gum', value: '≤ 7 mg/100 mL', method: 'ASTM D381' },
]

export default function JetA1Page() {
  return (
    <>
      <SEOHead
        title="Jet A1 Aviation Fuel Storage | Rotterdam Airport Fuel Terminal"
        description="Jet A1 aviation fuel bulk storage at our Rotterdam terminal. AFQRJOS compliant, flash point +38°C min. Enquire about aviation fuel storage today."
        keywords="Jet A1 aviation fuel storage Rotterdam, aviation fuel terminal, jet fuel bulk storage, AFQRJOS aviation fuel, kerosene storage Rotterdam"
        path="/products/jet-a1"
      />

      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: 'Jet A1 Aviation Fuel', to: '/products/jet-a1' }]} />

      <PageHero
        label="Product — Aviation Fuel"
        title="Jet A1 Aviation Turbine Fuel"
        subtitle="AFQRJOS and DEF STAN 91-091 compliant Jet A1 storage at Rotterdam. Nitrogen blanketing, dedicated clean product tanks, and strict quality segregation protocols."
        image={jetA1Img}
      />

      <div className="bg-steel/10 border-y border-steel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <AlertCircle size={14} className="text-steel shrink-0" />
          <p className="text-text-muted text-xs">We store this product — we do not trade it. All Jet A1 inventory remains the property of the client.</p>
        </div>
      </div>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader label="Product Overview" title="About Jet A1 Aviation Fuel" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Jet A1 is the international standard aviation kerosene fuel used in virtually all
                  commercial jet aircraft operations globally. It is a refined petroleum product with
                  a precisely controlled specification governed by the Aviation Fuel Quality
                  Requirements for Jointly Operated Systems (AFQRJOS) and DEF STAN 91-091, ensuring
                  consistent performance across all aircraft types and operating environments.
                </p>
                <p>
                  The product's most critical properties — freeze point, thermal stability, flash point,
                  and conductivity — are tightly controlled to ensure safe performance at the extreme
                  altitudes and temperatures experienced during flight. Our storage operations are
                  specifically designed to maintain these properties throughout the entire storage period.
                </p>
                <p>
                  Our Rotterdam terminal provides dedicated clean-product tanks for Jet A1, completely
                  segregated from darker or dirty petroleum products. All Jet A1 tanks are equipped
                  with nitrogen blanketing to prevent moisture ingress and oxidation, which would
                  compromise the product's thermal stability rating.
                </p>
                <p>
                  Product delivery from our terminal can be via direct pipeline to Schiphol Airport
                  supply system, by vessel charter for export, or by road tanker for domestic
                  distribution. All movements are accompanied by release certificates issued by our
                  on-site AFQRJOS-compliant laboratory.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-4">Technical Specifications (AFQRJOS)</h3>
                <div className="overflow-x-auto rounded-xl border border-gold/10">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gold/5 border-b border-gold/20">
                        {['Parameter', 'Limit', 'Test Method'].map((h) => (
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
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Storage & Handling</h4>
                <ul className="space-y-2">
                  {['Dedicated clean product tanks', 'Nitrogen blanketing (mandatory)', 'No cross-contamination policy', 'AFQRJOS release procedure', 'Continuous water separators'].map((pt) => (
                    <li key={pt} className="text-text-muted text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Delivery Options</h4>
                <ul className="space-y-2">
                  {['Pipeline to airport supply network', 'Vessel charter (product tanker)', 'Road tanker (approved clean tanks)', 'Barge (river/coastal distribution)'].map((pt) => (
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
                    { to: '/services/laboratory', label: 'AFQRJOS Lab Testing' },
                    { to: '/services/vessel-chartering', label: 'Product Tanker Charter' },
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
          <InquiryForm productName="Jet A1 Aviation Fuel" />
        </div>
      </section>

      <CTABanner ctaText="Request Jet A1 Storage Quote" ctaTo="/request-quote" />
    </>
  )
}
