import { motion } from 'framer-motion'
import { Leaf, Wind, Droplets, Recycle, Sun, TreePine, Download, TrendingDown } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Breadcrumb from '../components/shared/Breadcrumb'
import PageHero from '../components/shared/PageHero'
import SectionHeader from '../components/shared/SectionHeader'

const initiatives = [
  { Icon: Wind, title: 'Vapor Recovery Units', description: 'High-efficiency vapour recovery units (VRU) on all floating roof and fixed roof tanks with vapour connections. Captures up to 99% of VOC emissions during product receipt and dispatch.' },
  { Icon: Droplets, title: 'Wastewater Management', description: 'Advanced three-stage wastewater treatment system treating all tank drains and bunded area drainage before discharge. Discharge quality monitored against DCMR environmental authority limits.' },
  { Icon: Sun, title: 'Renewable Energy Targets', description: 'Committed to sourcing 50% of terminal electricity from renewable sources by 2027, rising to 100% by 2030. Solar panels on all terminal buildings and office facilities.' },
  { Icon: TrendingDown, title: 'Carbon Footprint Reduction', description: 'Scope 1 and 2 emissions baseline established and annually reported. Target of 40% reduction in absolute GHG emissions by 2030 against 2020 baseline.' },
  { Icon: TreePine, title: 'Biodiversity & Ecosystem', description: 'Active participation in Port of Rotterdam biodiversity programmes. Native vegetation management on terminal boundaries and support for Maasvlakte ecosystem restoration.' },
  { Icon: Recycle, title: 'Circular Economy', description: 'Terminal waste segregation and recycling programme. Recovered product from tank cleaning returned to refinery for processing rather than disposed of as waste.' },
]

const kpis = [
  { metric: 'VOC Reduction', value: '-62%', period: 'vs 2015 baseline' },
  { metric: 'Water Reuse', value: '45%', period: 'of treated wastewater' },
  { metric: 'Renewable Electricity', value: '28%', period: 'current coverage' },
  { metric: 'Waste Recycled', value: '78%', period: 'of total terminal waste' },
]

export default function SustainabilityPage() {
  return (
    <>
      <SEOHead
        title="Sustainability at TankSpeed Terminals | Rotterdam Green Terminal"
        description="Our sustainability programme includes vapor recovery, renewable energy targets, and carbon reduction at our Rotterdam oil terminal. ISO 14001 certified."
        keywords="sustainable oil terminal Rotterdam, green petroleum terminal, vapor recovery Rotterdam, carbon reduction oil terminal, ISO 14001 Rotterdam"
        path="/sustainability"
      />

      <Breadcrumb items={[{ label: 'Sustainability', to: '/sustainability' }]} />

      <PageHero
        label="Sustainability"
        title="Operating Today. Protecting Tomorrow."
        subtitle="Our environmental commitments go beyond regulatory compliance. We are actively working to reduce the environmental footprint of our terminal operations as part of the global energy transition."
        image="https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Environmental commitment */}
      <section className="py-16 bg-navy border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Our Commitment</p>
          <p className="text-text-primary text-lg lg:text-xl leading-relaxed">
            TankSpeed Terminals is committed to operating in an environmentally responsible manner —
            reducing emissions, managing waste responsibly, protecting water quality, and supporting
            the communities in which we operate, while continuing to provide essential infrastructure
            for global energy supply.
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass rounded-xl p-6 text-center"
              >
                <div className="font-heading font-bold text-3xl sm:text-4xl text-gold mb-2">{kpi.value}</div>
                <div className="text-text-primary text-sm font-semibold">{kpi.metric}</div>
                <div className="text-text-muted text-xs mt-1">{kpi.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 14001 */}
      <section className="py-16 bg-navy border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-gold/10 border border-gold/30 rounded-2xl flex items-center justify-center shrink-0 mx-auto lg:mx-0">
              <Leaf size={36} className="text-gold" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">ISO 14001 Certified Environmental Management</h2>
              <p className="text-text-muted leading-relaxed">
                Our environmental management system is certified to ISO 14001:2015. This certification
                requires systematic identification of environmental aspects, legal compliance tracking,
                objective-setting for environmental improvement, and independent third-party audit
                verification. Our certificate is renewed every three years with annual surveillance audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Environmental Initiatives" title="What We Are Doing" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {initiatives.map((init, i) => (
              <motion.div
                key={init.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <init.Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{init.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{init.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Targets */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="2030 Targets" title="Our Environmental Roadmap" center />
          <div className="space-y-4 mt-12">
            {[
              { year: '2025', target: 'Zero flaring of vapour during normal operations at Rotterdam terminal', status: 'On track' },
              { year: '2026', target: 'ISO 14001 certification extended to Houston and Jurong subleased terminals', status: 'In progress' },
              { year: '2027', target: '50% renewable electricity across all operations', status: 'Planned' },
              { year: '2028', target: '100% terminal wastewater treated to recycle grade', status: 'Planned' },
              { year: '2030', target: '40% absolute reduction in Scope 1 & 2 GHG emissions (vs 2020 baseline)', status: 'Planned' },
              { year: '2030', target: '100% renewable electricity sourcing', status: 'Planned' },
            ].map((item, i) => (
              <motion.div
                key={`${item.year}-${item.target}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-glass rounded-lg p-4 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="font-heading font-bold text-gold text-lg shrink-0">{item.year}</span>
                  <span className="text-text-muted text-sm leading-relaxed">{item.target}</span>
                </div>
                <span className={`text-xs font-heading font-semibold px-2 py-0.5 rounded shrink-0 ${
                  item.status === 'On track' ? 'bg-green-500/10 text-green-400' :
                  item.status === 'In progress' ? 'bg-blue-500/10 text-blue-400' :
                  'bg-gold/10 text-gold'
                }`}>
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-16 bg-navy border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader label="Reports" title="Sustainability Reporting" center />
          <p className="text-text-muted mt-4 mb-8 max-w-xl mx-auto">
            We publish an annual sustainability report covering our environmental performance, safety statistics, and progress against targets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['2024 Sustainability Report', '2023 Sustainability Report', 'HSE Policy Document'].map((doc) => (
              <button key={doc} className="btn-secondary flex items-center gap-2">
                <Download size={15} />
                {doc}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
