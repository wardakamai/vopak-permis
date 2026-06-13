import { motion } from 'framer-motion'
import { Target, Eye, Heart, MapPin, Warehouse, Truck, Globe } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Breadcrumb from '../components/shared/Breadcrumb'
import PageHero from '../components/shared/PageHero'
import CTABanner from '../components/shared/CTABanner'
import SectionHeader from '../components/shared/SectionHeader'

const timeline = [
  {
    year: '1983',
    title: 'Vopak Rotterdam Founded',
    description: 'Vopak establishes its first dedicated bulk liquid storage terminal at Port of Rotterdam, Maasvlakte, laying the foundation for decades of specialized storage expertise.',
  },
  {
    year: '1995',
    title: 'Houston Expansion',
    description: 'Strategic entry into the US Gulf Coast market through a subleased terminal at the Port of Houston, enabling access to North American petroleum markets.',
  },
  {
    year: '2003',
    title: 'Singapore — Jurong Island',
    description: 'Terminal operations established at Jurong Island, Singapore, positioning the company as a key player in the Asia-Pacific energy trading hub.',
  },
  {
    year: '2010',
    title: 'Fujairah — Middle East',
    description: 'Entry into the UAE bunker fuel market with subleased storage at Port of Fujairah, one of the world\'s most important bunkering centers.',
  },
  {
    year: '2015',
    title: 'ISO 14001 & ISO 45001 Certification',
    description: 'Formal certification of environmental and occupational health & safety management systems across all terminal operations.',
  },
  {
    year: '2019',
    title: 'General Tank Speed Joint Venture',
    description: 'Formation of the strategic joint venture with General Tank Speed BV, integrating courier, freight, and vessel chartering capabilities into a comprehensive logistics offering.',
  },
  {
    year: '2024',
    title: 'TankSpeed Terminals Brand Launch',
    description: 'Unified brand identity launched under the TankSpeed Terminals name, consolidating global operations under a single customer-facing platform.',
  },
]

const values = [
  {
    Icon: Target,
    title: 'Operational Excellence',
    description: 'We hold ourselves to the highest operational standards — zero incidents, reliable throughput, and consistent product quality are non-negotiable commitments to our clients.',
  },
  {
    Icon: Eye,
    title: 'Transparency',
    description: 'Clear, real-time communication on tank levels, product quality, and operational status. Our clients always know exactly what is happening with their stored assets.',
  },
  {
    Icon: Heart,
    title: 'Long-Term Partnership',
    description: 'We think in decades, not quarters. Our goal is to become a trusted, long-term storage and logistics partner — growing alongside our clients\' businesses.',
  },
]

const leadershipPlaceholders = [
  { name: 'Jan van der Berg', title: 'Managing Director, Vopak Logistics Services Permis', initials: 'JB' },
  { name: 'Michael de Vries', title: 'Director of Operations', initials: 'MV' },
  { name: 'Sarah Okonkwo', title: 'Commercial Director', initials: 'SO' },
  { name: 'Ahmed Al-Rashid', title: 'Director, Middle East & Asia Operations', initials: 'AR' },
]

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About TankSpeed Terminals | Rotterdam Oil Storage Joint Venture"
        description="Learn about TankSpeed Terminals — a joint venture between Vopak Logistics Services Permis & General Tank Speed BV operating oil storage terminals globally."
        keywords="about TankSpeed Terminals, Vopak Logistics Services Permis, General Tank Speed BV, Rotterdam oil terminal company, Rotterdam storage company"
        path="/about"
      />

      <Breadcrumb items={[{ label: 'About', to: '/about' }]} />

      <PageHero
        label="About TankSpeed Terminals"
        title="Decades of Expertise. Global Terminal Network."
        subtitle="We are the joint venture of two industry specialists committed to making bulk liquid storage easier for oil and gas buyers and sellers worldwide."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Joint venture explanation */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="The Joint Venture"
                title="Two Specialists. One Platform."
              />
              <div className="space-y-4 mt-6">
                <p className="text-text-muted leading-relaxed">
                  TankSpeed Terminals is the operating brand of a strategic joint venture formed
                  between <span className="text-gold font-semibold">Vopak Logistics Services Permis</span> and{' '}
                  <span className="text-gold font-semibold">General Tank Speed BV</span>. Both companies
                  share a singular goal: to make storage and logistics operations in the Port of Rotterdam,
                  Houston, Jurong (Singapore), and Fujairah (UAE) seamless for oil and gas buyers and sellers.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Vopak Logistics Services Permis acts as the primary terminal operator, managing the
                  day-to-day operations of storage tanks, quality control, pipeline connectivity, and
                  regulatory compliance at each terminal location. With a primary base at the
                  Maasvlakte, Rotterdam, the company subleases terminal capacity at Houston, Jurong, and
                  Fujairah to ensure clients receive consistent service standards globally.
                </p>
                <p className="text-text-muted leading-relaxed">
                  General Tank Speed BV complements the offering through specialized courier delivery
                  services and close collaboration on storage rental, vessel chartering, freight logistics,
                  and the facilitation of tank leasing arrangements. The combined entity delivers a
                  truly integrated supply chain solution from production origin to final destination.
                </p>
              </div>
            </div>

            {/* Company cards */}
            <div className="space-y-6">
              {[
                {
                  Icon: Warehouse,
                  name: 'Vopak Logistics Services Permis',
                  role: 'Primary Terminal Operator',
                  points: [
                    'Primary storage operations, Port of Rotterdam',
                    'Subleased terminals: Houston, Jurong, Fujairah',
                    'Pipeline connectivity and product transfer',
                    'Quality control, blending and heating services',
                    'Regulatory compliance and HSE management',
                  ],
                  color: 'gold',
                },
                {
                  Icon: Truck,
                  name: 'General Tank Speed BV',
                  role: 'Logistics & Delivery Partner',
                  points: [
                    'Courier and last-mile delivery services',
                    'Vessel chartering (VLCC to chemical tankers)',
                    'Freight brokering and forwarding',
                    'Tank leasing facilitation',
                    'Commercial logistics coordination',
                  ],
                  color: 'steel',
                },
              ].map((co, i) => (
                <motion.div
                  key={co.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`card-glass rounded-xl p-6 border-l-2 ${co.color === 'gold' ? 'border-l-gold' : 'border-l-steel'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <co.Icon size={20} className={co.color === 'gold' ? 'text-gold' : 'text-steel'} />
                    <div>
                      <h3 className="font-heading font-bold text-text-primary">{co.name}</h3>
                      <p className={`text-xs font-heading font-semibold uppercase tracking-wider ${co.color === 'gold' ? 'text-gold' : 'text-steel'}`}>{co.role}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {co.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-text-muted text-sm">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${co.color === 'gold' ? 'bg-gold' : 'bg-steel'}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our History" title="40+ Years of Terminal Excellence" center />

          <div className="mt-14 rounded-2xl overflow-hidden card-glow">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] group hover:bg-gold/5 transition-colors duration-300 ${
                  i < timeline.length - 1 ? 'border-b border-gold/10' : ''
                }`}
              >
                {/* Year panel */}
                <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 px-6 py-5 sm:py-7 bg-gold/5 sm:border-r border-gold/10">
                  <span className="font-heading font-bold text-gold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none">
                    {item.year}
                  </span>
                  <div className="hidden sm:block w-8 h-0.5 bg-gold/30 mt-2" />
                  <span className="text-text-muted text-xs font-heading font-semibold uppercase tracking-widest sm:mt-2">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 py-5 sm:py-7 flex flex-col justify-center">
                  <h3 className="font-heading font-bold text-text-primary text-base sm:text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Foundation" title="Mission, Vision & Values" center />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-glass rounded-xl p-8 text-center"
            >
              <Target size={36} className="text-gold mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">Our Mission</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                To provide the world's most reliable, efficient, and environmentally responsible bulk
                liquid storage and logistics services — enabling our clients to trade and move energy
                products with complete confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-glass rounded-xl p-8 text-center border-gold/30"
            >
              <Eye size={36} className="text-gold mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">Our Vision</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                To be the preferred terminal partner for oil and gas operators across Europe, the Americas,
                Asia-Pacific, and the Middle East — recognized for operational excellence, safety leadership,
                and innovative logistics solutions that adapt to the evolving energy transition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-glass rounded-xl p-8 text-center"
            >
              <Globe size={36} className="text-gold mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">Our Reach</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Four strategic terminals on three continents ensure that wherever our clients operate
                in the global energy supply chain, TankSpeed Terminals can provide local expertise
                backed by global resources and consistent service standards.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                  <v.Icon size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-text-primary mb-1">{v.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our People" title="Leadership Team" center />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {leadershipPlaceholders.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-gold text-xl">{person.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-text-primary text-sm mb-1">{person.name}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{person.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Global Presence" title="Strategically Located Terminals" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { city: 'Rotterdam', country: 'Netherlands', flag: '🇳🇱', role: 'Primary', note: 'Maasvlakte, Haven 300' },
              { city: 'Houston', country: 'United States', flag: '🇺🇸', role: 'Sublease', note: 'Gulf Coast operations' },
              { city: 'Jurong', country: 'Singapore', flag: '🇸🇬', role: 'Sublease', note: 'Asia-Pacific hub' },
              { city: 'Fujairah', country: 'UAE', flag: '🇦🇪', role: 'Sublease', note: 'Middle East bunkering' },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-glass rounded-xl p-6 flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-3" role="img" aria-label={loc.country}>{loc.flag}</span>
                <h3 className="font-heading font-bold text-text-primary text-xl mb-1">{loc.city}</h3>
                <p className="text-text-muted text-xs mb-2">{loc.country}</p>
                <span className="text-xs bg-gold/10 text-gold border border-gold/20 rounded px-2 py-0.5 mb-2">{loc.role}</span>
                <p className="text-text-muted text-xs">{loc.note}</p>
                <div className="mt-2">
                  <MapPin size={14} className="text-gold/50 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
