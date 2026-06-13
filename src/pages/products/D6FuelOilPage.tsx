import { motion } from 'framer-motion'
import { AlertCircle, Download, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import d6Img from '../../assets/D6-card.png'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const specs = [
  { parameter: 'API Gravity', value: '20–25°', method: 'ASTM D287' },
  { parameter: 'Kinematic Viscosity @ 50°C', value: '300–400 cSt', method: 'ASTM D445' },
  { parameter: 'Flash Point (PMCC)', value: '60°C min', method: 'ASTM D93' },
  { parameter: 'Sulphur Content', value: '≤ 3.5% m/m', method: 'ASTM D4294' },
  { parameter: 'Pour Point', value: '+15°C max', method: 'ASTM D97' },
  { parameter: 'Density @ 15°C', value: '920–970 kg/m³', method: 'ASTM D4052' },
  { parameter: 'Gross Calorific Value', value: '39,500–40,500 kJ/kg', method: 'ASTM D240' },
  { parameter: 'Water Content', value: '≤ 0.5% v/v', method: 'ASTM D95' },
  { parameter: 'Ash Content', value: '≤ 0.10% m/m', method: 'ASTM D482' },
  { parameter: 'Sediment (IP470)', value: '≤ 0.10% m/m', method: 'IP 470' },
]

export default function D6FuelOilPage() {
  return (
    <>
      <SEOHead
        title="Virgin Fuel Oil D6 Storage & Supply | Rotterdam Terminal"
        description="Bulk D6 fuel oil storage at Rotterdam, Houston, and Fujairah. API 20-25, viscosity 300-400 cSt. Contact us for D6 storage and supply enquiries."
        keywords="D6 fuel oil storage Rotterdam, virgin fuel oil D6, bulk fuel oil storage, diesel D6 petroleum terminal, heavy fuel oil Rotterdam"
        path="/products/d6-fuel-oil"
      />

      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: 'D6 Fuel Oil', to: '/products/d6-fuel-oil' }]} />

      <PageHero
        label="Product — Fuel Oil"
        title="Virgin Fuel Oil D6"
        subtitle="Heavy residual fuel oil — stored at Rotterdam, Houston, and Fujairah terminals. Comprehensive tank options with heating and blending capabilities."
        image={d6Img}
      />

      {/* Disclaimer */}
      <div className="bg-steel/10 border-y border-steel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <AlertCircle size={14} className="text-steel shrink-0" />
          <p className="text-text-muted text-xs">We store this product — we do not trade it. All D6 Fuel Oil remains the property of the client.</p>
        </div>
      </div>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader label="Product Overview" title="About Fuel Oil D6" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Virgin Fuel Oil D6, also known as Distillate Fuel Oil No. 6 or Bunker C, is a
                  heavy residual fuel oil — the thickest fraction remaining after crude oil is
                  refined and lighter products have been extracted. It is characterised by its
                  high viscosity, dark colour, and relatively high sulphur content, which requires
                  desulphurisation for use in emission-controlled environments.
                </p>
                <p>
                  D6 is used extensively in large industrial applications including power generation
                  at heavy fuel oil (HFO) power plants, marine bunker fuel for older or long-haul
                  vessels, industrial boilers, and large-scale heating applications. It is valued
                  for its high calorific value per unit volume and its cost competitiveness relative
                  to lighter distillate fuels.
                </p>
                <p>
                  Storage of D6 requires heated tanks to maintain product fluidity for pumping,
                  as the high pour point can cause the product to solidify at ambient temperatures.
                  Our Rotterdam terminal provides steam-traced and electrically heated storage tanks
                  with precise temperature control, ensuring the product remains pumpable and
                  homogeneous throughout the storage period.
                </p>
                <p>
                  Transport is typically by vessel (bulk tanker), large road tanker, or barge
                  on inland waterways. Our Rotterdam Maasvlakte location provides direct deep-water
                  berth access for VLCC and Suezmax class tankers, as well as barge access for
                  distribution into the Rhine river system.
                </p>
              </div>

              {/* Spec table */}
              <div className="mt-10">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-4">Technical Specifications</h3>
                <div className="overflow-x-auto rounded-xl border border-gold/10">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gold/5 border-b border-gold/20">
                        {['Parameter', 'Typical Value', 'Test Method'].map((h) => (
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

              {/* Download */}
              <button className="mt-6 btn-secondary text-sm flex items-center gap-2">
                <Download size={15} />
                Download Specification Sheet (PDF)
              </button>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Storage Conditions</h4>
                <ul className="space-y-2">
                  {['Heated tanks (40–65°C operating)', 'Fixed roof tanks with floating blanket', 'Steam-traced pipework', 'Tank mixing provisions', 'Continuous temperature monitoring'].map((pt) => (
                    <li key={pt} className="text-text-muted text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-glass rounded-xl p-5">
                <h4 className="font-heading font-bold text-text-primary mb-3 text-sm uppercase tracking-wider">Transport Options</h4>
                <ul className="space-y-2">
                  {['Vessel charter (VLCC, Suezmax)', 'Coastal barge', 'Road tanker (heated)', 'Rail tanker (where applicable)'].map((pt) => (
                    <li key={pt} className="text-text-muted text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full mt-1.5 shrink-0" />
                      {pt}
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
                    { to: '/services/laboratory', label: 'Laboratory Testing' },
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
          <InquiryForm productName="Virgin Fuel Oil D6" />
        </div>
      </section>

      <CTABanner ctaText="Request D6 Storage Quote" ctaTo="/request-quote" />
    </>
  )
}
