import { motion } from 'framer-motion'
import { ShieldCheck, Leaf, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    Icon: ShieldCheck,
    title: 'Health & Safety',
    description:
      'ISO 45001 certified operations with rigorous safety protocols, ISPS compliance, ISGOTT procedures, and a zero-incident culture across all terminal facilities.',
    to: '/hse',
  },
  {
    Icon: Leaf,
    title: 'Environmental Commitment',
    description:
      'ISO 14001 certified environmental management. Vapor recovery systems, advanced wastewater treatment, MARPOL compliance, and active carbon footprint reduction programs.',
    to: '/sustainability',
  },
  {
    Icon: Users,
    title: 'Community & Compliance',
    description:
      'Transparent reporting, proactive engagement with port authorities, and ongoing investment in training and certification for all terminal personnel.',
    to: '/hse',
  },
]

export default function HSEStrip() {
  return (
    <section className="py-20 bg-navy border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">HSE &amp; Sustainability</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary">
            Safety, Environment &amp; Responsibility
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <pillar.Icon size={28} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              <Link
                to={pillar.to}
                className="text-gold text-sm font-heading font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
