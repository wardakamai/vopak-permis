import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../shared/SectionHeader'

const terminals = [
  {
    id: 'rotterdam',
    name: 'Rotterdam',
    country: 'Netherlands',
    region: 'Europe',
    role: 'Primary Terminal',
    capacity: '850,000+ m³',
    products: ['D6 Fuel Oil', 'Diesel EN590', 'Jet A1', 'Crude Oil', 'Biofuels'],
    address: '17 Buraanweg Haven 300, 3195 ZH Rotterdam',
    connectivity: 'Pipeline, Vessel, Road, Rail',
    x: '47%',
    y: '22%',
  },
  {
    id: 'houston',
    name: 'Houston',
    country: 'United States',
    region: 'Gulf Coast',
    role: 'Subleased Terminal',
    capacity: '500,000+ m³',
    products: ['Crude Oil', 'Fuel Oil', 'Refined Products'],
    address: 'Port of Houston, Texas',
    connectivity: 'Pipeline, Vessel, Road, Rail',
    x: '22%',
    y: '35%',
  },
  {
    id: 'jurong',
    name: 'Jurong',
    country: 'Singapore',
    region: 'Asia-Pacific',
    role: 'Subleased Terminal',
    capacity: '600,000+ m³',
    products: ['Fuel Oil', 'Diesel', 'Jet A1', 'Chemicals'],
    address: 'Jurong Island, Singapore',
    connectivity: 'Pipeline, Vessel',
    x: '76%',
    y: '55%',
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    country: 'UAE',
    region: 'Middle East',
    role: 'Subleased Terminal',
    capacity: '550,000+ m³',
    products: ['Fuel Oil', 'Crude Oil', 'Diesel', 'Bunker Fuel'],
    address: 'Port of Fujairah, UAE',
    connectivity: 'Pipeline, Vessel',
    x: '62%',
    y: '40%',
  },
]

export default function TerminalsMap() {
  const [selected, setSelected] = useState<typeof terminals[0] | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Global Network"
          title="Four Strategic Terminal Locations"
          subtitle="Our terminal network spans four of the world's most critical energy hubs, giving clients access to storage, blending, and logistics services in Europe, the Americas, Asia-Pacific, and the Middle East."
        />

        <div className="mt-12 relative">
          {/* Map Container */}
          <div
            className="relative w-full rounded-xl overflow-hidden border border-gold/10"
            style={{ paddingBottom: '50%' }}
          >
            {/* SVG world map background */}
            <div className="absolute inset-0 bg-navy-light">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-30"
                aria-hidden="true"
              >
                {/* Simplified continent outlines */}
                <path
                  d="M 150 120 C 160 110 200 100 220 120 C 240 140 230 180 210 190 C 190 200 155 190 145 170 Z"
                  fill="#1E6B9E"
                  opacity="0.5"
                />
                {/* North America */}
                <path d="M 120 80 L 250 70 L 280 100 L 270 160 L 240 200 L 200 210 L 170 180 L 130 150 L 100 120 Z" fill="#1E6B9E" opacity="0.5" />
                {/* South America */}
                <path d="M 200 220 L 260 210 L 280 260 L 270 330 L 240 370 L 210 350 L 190 300 L 185 250 Z" fill="#1E6B9E" opacity="0.5" />
                {/* Europe */}
                <path d="M 440 60 L 510 55 L 530 85 L 520 120 L 480 130 L 445 110 L 430 85 Z" fill="#1E6B9E" opacity="0.5" />
                {/* Africa */}
                <path d="M 450 130 L 540 120 L 570 160 L 560 260 L 530 320 L 490 330 L 455 290 L 440 220 L 435 160 Z" fill="#1E6B9E" opacity="0.5" />
                {/* Asia */}
                <path d="M 530 50 L 800 45 L 840 90 L 820 150 L 760 180 L 680 170 L 610 140 L 570 100 L 535 70 Z" fill="#1E6B9E" opacity="0.5" />
                {/* Australia */}
                <path d="M 750 280 L 840 270 L 870 310 L 855 360 L 800 380 L 750 360 L 730 320 Z" fill="#1E6B9E" opacity="0.5" />
              </svg>
              {/* Grid overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }} />
            </div>

            {/* Terminal markers */}
            {terminals.map((t) => (
              <button
                key={t.id}
                className="absolute z-10 group"
                style={{ left: t.x, top: t.y, transform: 'translate(-50%, -50%)' }}
                onClick={() => setSelected(selected?.id === t.id ? null : t)}
                aria-label={`View ${t.name} terminal details`}
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" style={{ animationDuration: '2s' }} />
                <span
                  className={`relative flex h-5 w-5 rounded-full border-2 items-center justify-center transition-all duration-300 ${
                    selected?.id === t.id
                      ? 'bg-gold border-gold scale-125'
                      : 'bg-navy border-gold group-hover:scale-125'
                  }`}
                >
                  <MapPin size={10} className={selected?.id === t.id ? 'text-navy' : 'text-gold'} />
                </span>
                {/* Label */}
                <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap text-xs font-heading font-semibold px-2 py-0.5 rounded transition-all duration-200 ${
                  selected?.id === t.id ? 'bg-gold text-navy opacity-100' : 'bg-navy/90 text-gold opacity-0 group-hover:opacity-100'
                }`}>
                  {t.name}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="mt-6 card-glass rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="section-label text-xs">{selected.region} · {selected.role}</span>
                    <h3 className="font-heading font-bold text-2xl text-text-primary mt-1">
                      {selected.name}, {selected.country}
                    </h3>
                    <p className="text-text-muted text-sm mt-1">{selected.address}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-text-muted hover:text-gold transition-colors"
                    aria-label="Close terminal details"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-text-muted text-xs font-heading font-semibold uppercase tracking-wider mb-1">Capacity</p>
                    <p className="text-gold font-heading font-bold text-xl">{selected.capacity}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-heading font-semibold uppercase tracking-wider mb-1">Connectivity</p>
                    <p className="text-text-primary text-sm">{selected.connectivity}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-heading font-semibold uppercase tracking-wider mb-2">Products Handled</p>
                    <div className="flex flex-wrap gap-1">
                      {selected.products.map((p) => (
                        <span key={p} className="text-xs bg-gold/10 text-gold border border-gold/20 rounded px-2 py-0.5">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to="/terminals" className="inline-flex items-center gap-1 text-gold text-sm font-heading font-semibold mt-4 hover:gap-2 transition-all">
                  Full terminal details <ArrowRight size={14} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
