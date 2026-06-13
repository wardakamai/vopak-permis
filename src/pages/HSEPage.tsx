import { motion } from 'framer-motion'
import { ShieldCheck, AlertTriangle, BookOpen, Award, Users, BarChart2 } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Breadcrumb from '../components/shared/Breadcrumb'
import PageHero from '../components/shared/PageHero'
import hseHero from '../assets/hse-hero.png'
import SectionHeader from '../components/shared/SectionHeader'

const standards = [
  { code: 'ISO 45001', name: 'Occupational Health & Safety', description: 'Certified management system ensuring systematic identification and control of occupational health and safety risks across all terminal operations.' },
  { code: 'ISO 14001', name: 'Environmental Management', description: 'Certified environmental management system covering waste management, emissions monitoring, and environmental performance improvement.' },
  { code: 'ISPS Code', name: 'Port Facility Security', description: 'International Ship and Port Facility Security Code compliance — mandatory for all petroleum terminals handling international vessel traffic.' },
  { code: 'ISGOTT', name: 'Tanker & Terminal Safety', description: 'Full compliance with the International Safety Guide for Oil Tankers and Terminals, covering all aspects of petroleum transfer operations.' },
  { code: 'MARPOL', name: 'Marine Pollution Prevention', description: 'Compliance with MARPOL Annex I and II, covering marine pollution prevention measures for oil terminals and vessel interface operations.' },
  { code: 'API RP 2350', name: 'Overfill Prevention', description: 'American Petroleum Institute Recommended Practice for overfill protection — implemented on all storage tanks with high-level alarms and automatic shutdowns.' },
]

const safetyStats = [
  { value: '0', label: 'Lost Time Incidents (LTI)', sub: '12-month rolling' },
  { value: '100%', label: 'Personnel Trained', sub: 'Annual HSE refresher' },
  { value: '365', label: 'Days/Year', sub: '24/7 emergency response' },
  { value: '15min', label: 'Emergency Response', sub: 'Target activation time' },
]

const hseFeatures = [
  { Icon: AlertTriangle, title: 'Emergency Response', description: 'Fully trained on-site emergency response team available 24/7. Coordinated response plans with Port of Rotterdam Fire Service and DCMR Environmental Services.' },
  { Icon: BookOpen, title: 'Incident Reporting', description: 'Zero-tolerance approach to unreported incidents. Near-miss reporting culture actively encouraged with anonymous reporting channels available.' },
  { Icon: Users, title: 'Training & Certification', description: 'All personnel receive mandatory HSE induction training and annual refresher courses. Specialist certifications for confined space, hot work, and hazardous material handling.' },
  { Icon: BarChart2, title: 'Safety Performance Monitoring', description: 'Real-time safety KPI tracking and quarterly HSE performance reviews. Transparent reporting to port authorities and regulatory bodies.' },
]

export default function HSEPage() {
  return (
    <>
      <SEOHead
        title="HSE Policy | Health, Safety & Environment at TankSpeed Terminals"
        description="TankSpeed Terminals' ISO 45001, ISO 14001, ISPS, ISGOTT compliant HSE policy. Zero harm commitment across all terminal operations in Rotterdam."
        keywords="oil terminal HSE Rotterdam, ISO 45001 oil terminal, petroleum terminal safety, Rotterdam terminal environmental policy"
        path="/hse"
      />

      <Breadcrumb items={[{ label: 'HSE', to: '/hse' }]} />

      <PageHero
        label="Health, Safety & Environment"
        title="Safety Is Not a Priority — It Is a Prerequisite"
        subtitle="At TankSpeed Terminals, no operational objective overrides the safety of our people, the environment, or the communities around our facilities. Our HSE management system is certified to international standards and continuously improved."
        image={hseHero}
      />

      {/* Policy statement */}
      <section className="py-16 bg-navy border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-text-primary text-lg lg:text-xl leading-relaxed italic font-light">
            "TankSpeed Terminals is committed to operating all facilities in a manner that protects the
            health and safety of our employees, contractors, customers, and the public, while minimising
            our environmental impact and complying with all applicable laws and regulations."
          </blockquote>
          <p className="text-text-muted text-sm mt-4">— TankSpeed Terminals HSE Policy Statement</p>
        </div>
      </section>

      {/* Safety stats */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass rounded-xl p-6 text-center"
              >
                <div className="font-heading font-bold text-3xl sm:text-4xl text-gold mb-2">{stat.value}</div>
                <div className="text-text-primary text-sm font-semibold">{stat.label}</div>
                <div className="text-text-muted text-xs mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Certifications & Standards" title="HSE Standards We Operate To" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {standards.map((std, i) => (
              <motion.div
                key={std.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading font-bold text-gold text-lg">{std.code}</span>
                  <Award size={16} className="text-gold/50" />
                </div>
                <h3 className="font-heading font-bold text-text-primary mb-2">{std.name}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{std.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE features */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Programs" title="Safety Management in Practice" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            {hseFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glass rounded-xl p-8"
              >
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <feat.Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-text-primary text-xl mb-3">{feat.title}</h3>
                <p className="text-text-muted leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency procedures overview */}
      <section className="py-20 bg-navy border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Emergency Response" title="Ready for Any Scenario" center />
          <div className="mt-8 space-y-4">
            {[
              { title: 'Spill Response', description: 'Trained oil spill response team with containment equipment pre-positioned at all terminals. Port authority oil spill response plan coordination.' },
              { title: 'Fire & Explosion', description: 'Fixed firefighting systems on all tanks and loading areas. Regular joint fire drills with Port of Rotterdam Fire Service.' },
              { title: 'Toxic Gas Release', description: 'H2S and VOC gas detection systems with evacuation protocols. Personnel equipped with personal gas monitors in risk areas.' },
              { title: 'Medical Emergency', description: '24/7 first aid capability on-site. Paramedic-level first responders trained in chemical exposure treatment.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-lg p-5 flex gap-4"
              >
                <ShieldCheck size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-text-primary mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
