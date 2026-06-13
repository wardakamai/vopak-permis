import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Warehouse, Truck } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

export default function AboutSnapshot() {
  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <SectionHeader
              label="About the Joint Venture"
              title="Two Companies. One Mission. Global Storage."
              subtitle="Vopak Logistics Services Permis and General Tank Speed BV have joined forces to deliver best-in-class storage and logistics solutions to oil and gas buyers and sellers worldwide."
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-muted leading-relaxed mt-4 mb-8"
            >
              Headquartered at the Port of Rotterdam — Europe's largest and busiest port —
              our joint venture operates primary storage at Maasvlakte with subleased terminals
              in Houston (Gulf Coast), Jurong (Singapore), Fujairah (UAE), and Ningbo-Zhoushan (China). Together, we
              offer seamless end-to-end service from tank rental and product blending to
              vessel chartering and cross-terminal freight logistics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              <Link to="/about" className="btn-secondary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Two cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                Icon: Warehouse,
                name: 'Vopak Logistics Services Permis',
                role: 'Primary Terminal Operator',
                description:
                  'Specialist storage and terminal operator at Port of Rotterdam. Manages primary storage tanks and coordinates subleased terminals in Houston, Jurong, Fujairah, and Ningbo-Zhoushan (China).',
                accent: true,
              },
              {
                Icon: Truck,
                name: 'General Tank Speed BV',
                role: 'Logistics & Courier Partner',
                description:
                  'Focuses on courier delivery services, freight logistics, vessel chartering coordination, and facilitating tank leasing across our global network.',
                accent: false,
              },
            ].map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-glass rounded-xl p-6 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    card.accent
                      ? 'bg-gold/10 border border-gold/30'
                      : 'bg-steel/10 border border-steel/30'
                  }`}
                >
                  <card.Icon
                    size={22}
                    className={card.accent ? 'text-gold' : 'text-steel'}
                  />
                </div>
                <h3 className="font-heading font-bold text-text-primary text-lg leading-tight mb-1">
                  {card.name}
                </h3>
                <p className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-3">
                  {card.role}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
