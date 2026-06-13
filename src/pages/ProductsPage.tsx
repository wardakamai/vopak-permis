import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, AlertCircle } from 'lucide-react'
import SEOHead from '../components/shared/SEOHead'
import Breadcrumb from '../components/shared/Breadcrumb'
import PageHero from '../components/shared/PageHero'
import CTABanner from '../components/shared/CTABanner'
import SectionHeader from '../components/shared/SectionHeader'

const products = [
  {
    name: 'Virgin Fuel Oil D6',
    grade: 'D6',
    to: '/products/d6-fuel-oil',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    summary: 'Heavy residual fuel oil used in power generation, marine applications, and industrial heating. Stored at Rotterdam, Houston, and Fujairah terminals.',
    keySpecs: ['API Gravity: 20–25', 'Viscosity: 300–400 cSt @ 50°C', 'Sulphur: Up to 3.5%'],
  },
  {
    name: 'Jet A1 Aviation Fuel',
    grade: 'JET A1',
    to: '/products/jet-a1',
    image: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=800&q=80',
    summary: 'Aviation turbine fuel meeting AFQRJOS and DEF STAN 91-091 specifications. Handled under strict quality and safety protocols at Rotterdam.',
    keySpecs: ['Flash Point: +38°C min', 'Freeze Point: -47°C max', 'Aromatic: 25% max'],
  },
  {
    name: 'Diesel EN 590',
    grade: 'EN 590',
    to: '/products/diesel-en590',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    summary: 'Ultra-low sulphur diesel (ULSD) meeting European EN 590 standard with 10ppm max sulphur. Blending and distribution capabilities at Rotterdam.',
    keySpecs: ['Sulphur: 10 ppm max', 'Cetane: 51 min', 'Density: 820–845 kg/m³'],
  },
  {
    name: 'Crude Oil',
    grade: 'CRUDE',
    to: '/products/crude-oil',
    image: 'https://images.unsplash.com/photo-1582638931293-0b1b6be8edbc?auto=format&fit=crop&w=800&q=80',
    summary: 'Light, medium, and heavy crude grades. Custody transfer and metering services with full upstream/downstream pipeline connectivity at Rotterdam.',
    keySpecs: ['API: 20–45 (grade dependent)', 'Sulphur: 0.1–3.5%', 'Custody transfer metering'],
  },
]

export default function ProductsPage() {
  return (
    <>
      <SEOHead
        title="Petroleum Products Stored at Rotterdam Terminal | TankSpeed Terminals"
        description="Bulk storage for crude oil, diesel EN590, Jet A1 aviation fuel, and D6 fuel oil at our Rotterdam terminal and global facilities. Request a storage quote."
        keywords="petroleum products Rotterdam storage, crude oil storage Europe, diesel EN590 bulk storage, jet fuel storage terminal Rotterdam, D6 fuel oil storage"
        path="/products"
      />

      <Breadcrumb items={[{ label: 'Products', to: '/products' }]} />

      <PageHero
        label="Products We Store"
        title="Bulk Liquid Products — Storage & Handling Expertise"
        subtitle="We provide secure, compliant storage for the full spectrum of petroleum products at our global terminals. Our operations are storage-focused — we do not trade or broker the products we handle."
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Disclaimer */}
      <div className="bg-steel/10 border-y border-steel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <AlertCircle size={16} className="text-steel shrink-0" />
          <p className="text-text-muted text-sm">
            <span className="font-semibold text-text-primary">Storage disclaimer:</span> TankSpeed Terminals stores these products on behalf of clients — we are a terminal operator, not a commodity trader. All products remain the property of the client.
          </p>
        </div>
      </div>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Product Range"
            title="Four Product Categories, One Terminal Network"
            subtitle="Our terminals are equipped with specialized storage infrastructure, heating, cooling, and nitrogen blanketing systems to accommodate the distinct handling requirements of each product type."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={product.to}
                  className="group block card-glass rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} — bulk storage terminal`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-light/90 to-navy/30" />
                    <span className="absolute top-4 left-4 text-xs font-heading font-bold bg-gold text-navy px-3 py-1 rounded">
                      {product.grade}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading font-bold text-text-primary text-2xl mb-2">{product.name}</h2>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{product.summary}</p>
                    <ul className="space-y-1 mb-4">
                      {product.keySpecs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-text-muted text-xs">
                          <span className="w-1 h-1 bg-gold rounded-full" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 text-gold font-heading font-semibold text-sm group-hover:gap-2 transition-all">
                      View Full Specifications <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Need Storage for Your Product?" ctaText="Request a Storage Quote" ctaTo="/request-quote" />
    </>
  )
}
