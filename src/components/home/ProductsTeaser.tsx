import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import d6Img from '../../assets/D6-card.png'
import jetA1Img from '../../assets/jeta1-card.png'
import en590Img from '../../assets/en590-card.png'
import crudeOilImg from '../../assets/crudeoil-card.png'

const products = [
  {
    name: 'Virgin Fuel Oil D6',
    grade: 'D6',
    specs: 'API 20–25 | Viscosity 300–400 cSt',
    uses: 'Power generation, marine fuel, industrial heating',
    to: '/products/d6-fuel-oil',
    image: d6Img,
  },
  {
    name: 'Jet A1 Aviation Fuel',
    grade: 'JET A1',
    specs: 'Flash Point +38°C min | Freeze Point -47°C max',
    uses: 'Commercial aviation, military aviation',
    to: '/products/jet-a1',
    image: jetA1Img,
  },
  {
    name: 'Diesel EN 590',
    grade: 'EN 590',
    specs: 'Sulphur 10ppm max | Cetane 51 min',
    uses: 'Road transport, industrial diesel',
    to: '/products/diesel-en590',
    image: en590Img,
  },
  {
    name: 'Crude Oil',
    grade: 'CRUDE',
    specs: 'API 20–45 | Sulphur 0.1–3.5%',
    uses: 'Refinery feedstock, upstream trade',
    to: '/products/crude-oil',
    image: crudeOilImg,
  },
]

export default function ProductsTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-navy-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader
            label="Products We Store"
            title="Bulk Liquid Products"
            subtitle="We handle and store a comprehensive range of refined and unrefined petroleum products."
          />
          <Link to="/products" className="btn-secondary text-sm shrink-0">
            All Products <ArrowRight size={14} />
          </Link>
        </div>

        {/* Horizontal scroll strip */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] snap-start"
            >
              <Link
                to={product.to}
                className="group block card-glass rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} storage — bulk petroleum product`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light/90 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-heading font-bold bg-gold text-navy px-2 py-1 rounded">
                    {product.grade}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-text-primary text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gold/70 text-xs font-heading mb-2">{product.specs}</p>
                  <p className="text-text-muted text-sm mb-4">{product.uses}</p>
                  <div className="flex items-center gap-1 text-gold text-sm font-heading font-semibold group-hover:gap-2 transition-all">
                    View Specifications <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
