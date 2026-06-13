import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Warehouse, Ship, GitBranch, FlaskConical, ArrowRight } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Breadcrumb from '../components/shared/Breadcrumb'
import PageHero from '../components/shared/PageHero'
import CTABanner from '../components/shared/CTABanner'
import SectionHeader from '../components/shared/SectionHeader'

const services = [
  {
    Icon: Warehouse,
    title: 'Storage Services',
    to: '/services/storage',
    description: 'Comprehensive bulk liquid storage solutions including tank rental, long-term leasing, product blending, heating, and nitrogen blanketing at our Rotterdam Maasvlakte facility and global terminals.',
    features: ['Tank Rental & Long-Term Leasing', 'Product Blending', 'Heating & Cooling', 'Nitrogen Blanketing', 'Custom Solutions'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
  },
  {
    Icon: Ship,
    title: 'Vessel Chartering',
    to: '/services/vessel-chartering',
    description: 'Full-spectrum vessel chartering from VLCCs and Suezmax tankers to Aframax and chemical tankers. We manage the full charter process from nomination to completion.',
    features: ['VLCC Chartering', 'Suezmax / Aframax', 'Chemical Tankers', 'Spot & Time Charters', 'Full Charter Management'],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80',
  },
  {
    Icon: GitBranch,
    title: 'Pipeline Services',
    to: '/services/pipeline',
    description: 'Direct pipeline connectivity at Rotterdam terminal enabling high-throughput product transfers, cross-terminal access, and efficient distribution to downstream customers.',
    features: ['Direct Pipeline Access', 'Cross-Terminal Connectivity', 'Product Transfer Management', 'Flow Metering', 'Pipeline Quality Control'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
  {
    Icon: FlaskConical,
    title: 'Laboratory Services',
    to: '/services/laboratory',
    description: 'Accredited on-site laboratory for product quality testing, custody transfer analysis, independent inspection coordination, and full ASTM/ISO test method compliance.',
    features: ['ASTM/ISO Accredited Testing', 'Custody Transfer Analysis', 'Product Sampling', 'Third-Party Inspection', 'Quality Certificates'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Oil Terminal Services Rotterdam | Storage, Chartering & Logistics"
        description="Full-service oil terminal solutions in Rotterdam: tank storage rental, vessel chartering, pipeline services, and laboratory testing. Enquire today."
        keywords="oil terminal services Rotterdam, vessel chartering oil gas, pipeline services Rotterdam, laboratory testing petroleum, tank terminal leasing Rotterdam"
        path="/services"
      />

      <Breadcrumb items={[{ label: 'Services', to: '/services' }]} />

      <PageHero
        label="Our Services"
        title="End-to-End Terminal & Logistics Services"
        subtitle="From the moment product arrives at our terminal to final delivery at destination, TankSpeed Terminals provides integrated services that cover every stage of the bulk liquid supply chain."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Offer"
            title="Four Core Service Areas"
            subtitle="Each service is delivered to the highest operational standards with full HSE compliance, real-time reporting, and dedicated account management."
            center
          />

          <div className="space-y-16 mt-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <svc.Icon size={22} className="text-gold" />
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-text-primary mb-4">{svc.title}</h2>
                  <p className="text-text-muted leading-relaxed mb-6">{svc.description}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-text-muted text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={svc.to} className="btn-primary">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img
                      src={svc.image}
                      alt={`${svc.title} — TankSpeed Terminals`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-transparent opacity-60" />
                  </div>
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
