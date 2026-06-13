import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Warehouse, Ship, GitBranch, FlaskConical, Container, Truck, ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const services = [
  {
    icon: Warehouse,
    title: 'Storage Services',
    description: 'Tank rental, long-term leasing, product blending, heating, nitrogen blanketing, and custom storage solutions at our Rotterdam facility.',
    to: '/services/storage',
    color: 'text-gold',
    border: 'border-gold/20 hover:border-gold/50',
  },
  {
    icon: Ship,
    title: 'Vessel Chartering',
    description: 'Full vessel chartering capabilities — VLCC, Suezmax, Aframax, and chemical tankers for global cargo movements.',
    to: '/services/vessel-chartering',
    color: 'text-steel',
    border: 'border-steel/20 hover:border-steel/50',
  },
  {
    icon: GitBranch,
    title: 'Pipeline Services',
    description: 'Direct pipeline connectivity at Rotterdam Maasvlakte, cross-terminal access, and full product transfer specification management.',
    to: '/services/pipeline',
    color: 'text-gold',
    border: 'border-gold/20 hover:border-gold/50',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Services',
    description: 'Quality control testing, product sampling, custody transfer verification, and independent inspection coordination using ASTM/ISO methods.',
    to: '/services/laboratory',
    color: 'text-steel',
    border: 'border-steel/20 hover:border-steel/50',
  },
  {
    icon: Container,
    title: 'Freight Services',
    description: 'Comprehensive freight brokering and forwarding for bulk liquid cargo across sea, rail, road, and pipeline transport modes.',
    to: '/services',
    color: 'text-gold',
    border: 'border-gold/20 hover:border-gold/50',
  },
  {
    icon: Truck,
    title: 'Courier Delivery',
    description: 'General Tank Speed BV provides specialist courier and last-mile delivery services integrated with our terminal operations.',
    to: '/services',
    color: 'text-steel',
    border: 'border-steel/20 hover:border-steel/50',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Comprehensive Terminal & Logistics Services"
          subtitle="From tank leasing and blending to vessel chartering and independent inspection — we deliver end-to-end solutions for the global oil and gas supply chain."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={svc.to}
                className="group flex flex-col h-full bg-navy card-glow rounded-xl p-6"
              >
                <div className={`w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center mb-4 ${svc.color}`}>
                  <svc.icon size={22} />
                </div>
                <h3 className="font-heading font-bold text-text-primary text-xl mb-3">
                  {svc.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {svc.description}
                </p>
                <div className={`flex items-center gap-1 mt-4 text-sm font-heading font-semibold ${svc.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
