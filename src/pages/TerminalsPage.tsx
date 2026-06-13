import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Ship, GitBranch, Truck, Train, Phone, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/shared/SEOHead'
import PageHero from '../components/shared/PageHero'
import CTABanner from '../components/shared/CTABanner'
import SectionHeader from '../components/shared/SectionHeader'
import FAQAccordion from '../components/shared/FAQAccordion'
import Breadcrumb from '../components/shared/Breadcrumb'
import LeadCaptureForm from '../components/shared/LeadCaptureForm'
import type { FAQItem } from '../components/shared/FAQAccordion'
import rotterdamImg from '../assets/rotterdam-terminal.png'
import houstonImg from '../assets/houston-terminal.png'
import jurongImg from '../assets/jurong-terminal.png'
import fujairahImg from '../assets/fujariah-terminal.jpg'

const terminals = [
  {
    id: 'rotterdam',
    name: 'Rotterdam',
    country: 'Netherlands',
    flag: '🇳🇱',
    role: 'Primary Terminal',
    address: '17 Buraanweg Haven 300, 3195 ZH Rotterdam',
    region: 'Port of Rotterdam, Maasvlakte',
    capacity: '850,000+ m³',
    berths: '4 berths (VLCC capable)',
    products: ['Crude Oil', 'Diesel EN590', 'Jet A1', 'D6 Fuel Oil', 'Biofuels', 'Chemicals'],
    connectivity: ['Deep-water vessel berths (VLCC/Suezmax)', 'Pipeline to Pernis refinery', 'Rotterdam-Rhine Pipeline (RRP)', 'Road tanker loading bays', 'Barge loading/discharge'],
    services: ['Storage & Leasing', 'Product Blending', 'Tank Heating', 'Nitrogen Blanketing', 'Lab Testing', 'Pipeline Transfer', 'Vessel Chartering'],
    image: rotterdamImg,
    contact: { phone: '+3197010257780', email: 'info@tankspeedterminals.eu' },
    icons: [Ship, GitBranch, Truck, Train],
  },
  {
    id: 'houston',
    name: 'Houston',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Subleased Terminal',
    address: 'Port of Houston, Gulf Coast, Texas',
    region: 'Gulf Coast Operations Hub',
    capacity: '500,000+ m³',
    berths: '2 berths (Aframax capable)',
    products: ['Crude Oil', 'Fuel Oil', 'Refined Products', 'Petrochemicals'],
    connectivity: ['Gulf Coast tanker berths', 'Local pipeline grid access', 'Road tanker loading bays'],
    services: ['Storage Rental', 'Product Blending', 'Pipeline Transfer', 'Inspection Services'],
    image: houstonImg,
    contact: { phone: '+3197010257780', email: 'info@tankspeedterminals.eu' },
    icons: [Ship, GitBranch, Truck],
  },
  {
    id: 'jurong',
    name: 'Jurong',
    country: 'Singapore',
    flag: '🇸🇬',
    role: 'Subleased Terminal',
    address: 'Jurong Island, Singapore 627965',
    region: 'Asia-Pacific Energy Hub',
    capacity: '600,000+ m³',
    berths: '3 berths (Suezmax capable)',
    products: ['Fuel Oil', 'Diesel', 'Jet A1', 'Naphtha', 'Chemicals'],
    connectivity: ['Deep-water vessel berths', 'Jurong Island pipeline network', 'Barge access'],
    services: ['Storage Rental', 'Tank Heating', 'Blending', 'Inspection Services'],
    image: jurongImg,
    contact: { phone: '+3197010257780', email: 'logistics@tankspeedterminals.eu' },
    icons: [Ship, GitBranch, Truck],
  },
  {
    id: 'fujairah',
    name: 'Fujairah',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'Subleased Terminal',
    address: 'Port of Fujairah, UAE',
    region: 'Middle East Bunkering Centre',
    capacity: '550,000+ m³',
    berths: '2 berths (VLCC capable)',
    products: ['Bunker Fuel (VLSFO, HSFO)', 'Crude Oil', 'Diesel', 'Fuel Oil'],
    connectivity: ['Deep-water VLCC berths', 'Fujairah port pipeline', 'Vessel bunkering direct'],
    services: ['Bunker Storage', 'Vessel Bunkering', 'Blending', 'Inspection Services'],
    image: fujairahImg,
    contact: { phone: '+3197010257780', email: 'booking@tankspeedterminals.eu' },
    icons: [Ship, Truck],
  },
  {
    id: 'ningbo',
    name: 'Ningbo-Zhoushan',
    country: 'China',
    flag: '🇨🇳',
    role: 'Subleased Terminal',
    address: 'Ningbo-Zhoushan Port, Zhejiang Province, China',
    region: "World's Busiest Port by Cargo",
    capacity: '450,000+ m³',
    berths: '3 berths (VLCC capable)',
    products: ['Crude Oil', 'Fuel Oil', 'Diesel', 'LNG', 'Petrochemicals', 'Bitumen'],
    connectivity: ['VLCC deep-water berths', 'Zhoushan crude oil pipeline network', 'Coastal feeder & barge access', 'Road tanker loading bays'],
    services: ['Crude Oil Storage', 'Product Blending', 'Pipeline Transfer', 'Inspection Services'],
    image: jurongImg,
    contact: { phone: '+3197010257780', email: 'logistics@tankspeedterminals.eu' },
    icons: [Ship, GitBranch, Truck],
  },
]

const terminalFAQs: FAQItem[] = [
  {
    question: 'Do you have oil tank farms in Rotterdam?',
    answer:
      'Yes. Our primary oil tank farm is located at Port of Rotterdam Maasvlakte — 17 Buraanweg Haven 300, 3195 ZH Rotterdam. We offer 850,000+ m³ of bulk liquid storage capacity for crude oil, diesel EN 590, Jet A1, D6 fuel oil, biofuels, and petrochemicals. Contact us to lease a storage tank in Rotterdam.',
  },
  {
    question: 'Do you have oil tank farms in Houston?',
    answer:
      'Yes. We operate a subleased terminal at the Port of Houston, Gulf Coast, Texas with 500,000+ m³ storage capacity. The Houston terminal handles crude oil, fuel oil, refined products, and petrochemicals with Aframax-capable berths and direct Gulf Coast pipeline grid access.',
  },
  {
    question: 'Do you have an oil storage company in Jurong, Singapore?',
    answer:
      'Yes. Our Jurong terminal on Jurong Island, Singapore serves the Asia-Pacific petroleum market with 600,000+ m³ capacity. It handles fuel oil, diesel, Jet A1, naphtha, and chemicals with deep-water berths and access to the Jurong Island pipeline network.',
  },
  {
    question: 'Do you have an oil storage company in Fujairah, UAE?',
    answer:
      'Yes. Our Fujairah terminal is a key Middle East bunkering and storage hub with 550,000+ m³ capacity. Located at Port of Fujairah, UAE, it specialises in VLSFO, HSFO bunker fuel, crude oil, and diesel with VLCC-capable deep-water berths.',
  },
  {
    question: 'Do you have oil storage in Ningbo-Zhoushan, China?',
    answer:
      'Yes. Our Ningbo-Zhoushan terminal operates at the world\'s busiest port by cargo throughput in Zhejiang Province, China. We offer 450,000+ m³ of subleased bulk liquid storage capacity for crude oil, fuel oil, diesel, LNG, petrochemicals, and bitumen, with VLCC-capable deep-water berths and direct access to the Zhoushan crude oil pipeline network. Contact logistics@tankspeedterminals.eu for China storage enquiries.',
  },
  {
    question: 'How do I contact your oil tank farm for a storage quote?',
    answer:
      'Call +31 970 102 57780 (Vopak Logistics Services Permis) or +31 68 538 6858 (General Tank Speed BV), or email info@tankspeedterminals.eu. You can also use the quote form on this page. Our commercial team responds within 24 hours with capacity availability and indicative pricing.',
  },
  {
    question: 'What is the total storage capacity across your terminal network?',
    answer:
      'Our combined terminal network offers over 3 million m³ of bulk liquid storage across Rotterdam (850,000+ m³), Jurong (600,000+ m³), Fujairah (550,000+ m³), Houston (500,000+ m³), and Ningbo-Zhoushan (450,000+ m³). We can accommodate large-volume, multi-location storage agreements.',
  },
]

const terminalsFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: terminalFAQs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const localBusinessesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'TankSpeed Terminals — Oil Tank Farm Locations',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'LocalBusiness',
        name: 'TankSpeed Terminals Rotterdam — Oil Tank Farm',
        address: { '@type': 'PostalAddress', streetAddress: '17 Buraanweg Haven 300', postalCode: '3195 ZH', addressLocality: 'Rotterdam', addressCountry: 'NL' },
        geo: { '@type': 'GeoCoordinates', latitude: '51.9507', longitude: '4.0516' },
        telephone: '+3197010257780',
        url: 'https://www.tankspeedterminals.eu/terminals',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'LocalBusiness',
        name: 'TankSpeed Terminals Houston — Oil Terminal',
        address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
        geo: { '@type': 'GeoCoordinates', latitude: '29.7604', longitude: '-95.3698' },
        url: 'https://www.tankspeedterminals.eu/terminals',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'LocalBusiness',
        name: 'TankSpeed Terminals Jurong — Oil Storage Company',
        address: { '@type': 'PostalAddress', addressLocality: 'Jurong Island', addressCountry: 'SG' },
        geo: { '@type': 'GeoCoordinates', latitude: '1.2650', longitude: '103.6950' },
        url: 'https://www.tankspeedterminals.eu/terminals',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'LocalBusiness',
        name: 'TankSpeed Terminals Fujairah — Oil Storage Company',
        address: { '@type': 'PostalAddress', addressLocality: 'Fujairah', addressCountry: 'AE' },
        geo: { '@type': 'GeoCoordinates', latitude: '25.1288', longitude: '56.3265' },
        url: 'https://www.tankspeedterminals.eu/terminals',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'LocalBusiness',
        name: 'TankSpeed Terminals Ningbo-Zhoushan — Oil Storage China',
        address: { '@type': 'PostalAddress', addressLocality: 'Ningbo-Zhoushan', addressRegion: 'Zhejiang', addressCountry: 'CN' },
        geo: { '@type': 'GeoCoordinates', latitude: '29.8683', longitude: '122.1697' },
        url: 'https://www.tankspeedterminals.eu/terminals',
      },
    },
  ],
}

export default function TerminalsPage() {
  const [active, setActive] = useState('rotterdam')
  const terminal = terminals.find((t) => t.id === active)!

  return (
    <>
      <SEOHead
        title="Oil Terminals in Rotterdam, Houston, Jurong, Fujairah & Ningbo-Zhoushan | TankSpeed Terminals"
        description="Explore our oil tank farms in Rotterdam, Houston, Jurong, Fujairah and Ningbo-Zhoushan Port. View tank capacity, products handled and connectivity. Reserve storage now."
        keywords="oil terminal Rotterdam, list of oil tank farms Rotterdam, oil tank farm Houston, oil storage company Jurong, oil storage company Fujairah, oil storage Ningbo-Zhoushan, China oil terminal, Ningbo oil storage, oil terminal China"
        path="/terminals"
        schema={[terminalsFAQSchema, localBusinessesSchema]}
      />

      <Breadcrumb items={[{ label: 'Terminals', to: '/terminals' }]} />

      <PageHero
        label="Our Global Network"
        title="Oil Tank Farms in Rotterdam, Houston, Jurong, Fujairah & Ningbo-Zhoushan"
        subtitle="Primary terminal operations at Port of Rotterdam with subleased facilities in Houston, Jurong, Fujairah, and Ningbo-Zhoushan — covering every major petroleum trading corridor worldwide."
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Terminal Network"
            title="Select a Terminal Location"
            center
          />

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
            {terminals.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  active === t.id
                    ? 'bg-gold text-navy'
                    : 'border border-gold/20 text-text-muted hover:border-gold/50 hover:text-gold'
                }`}
              >
                <span role="img" aria-label={t.country}>{t.flag}</span>
                {t.name}
              </button>
            ))}
          </div>

          {/* Terminal detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden aspect-video lg:aspect-auto lg:min-h-[400px]">
                <img
                  src={terminal.image}
                  alt={`${terminal.name} terminal — bulk liquid storage`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-gold text-navy font-heading font-bold px-3 py-1 rounded">{terminal.role}</span>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={14} className="text-gold" />
                    <span className="text-text-primary text-sm">{terminal.region}</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl" role="img" aria-label={terminal.country}>{terminal.flag}</span>
                    <h2 className="font-heading font-bold text-3xl text-text-primary">{terminal.name}, {terminal.country}</h2>
                  </div>
                  <p className="text-text-muted text-sm flex items-center gap-1">
                    <MapPin size={13} />{terminal.address}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="card-glass rounded-lg p-4">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Capacity</p>
                    <p className="text-gold font-heading font-bold text-xl">{terminal.capacity}</p>
                  </div>
                  <div className="card-glass rounded-lg p-4">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Berths</p>
                    <p className="text-text-primary font-heading font-semibold text-sm">{terminal.berths}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-2">Products Handled</p>
                  <div className="flex flex-wrap gap-2">
                    {terminal.products.map((p) => (
                      <span key={p} className="text-xs bg-gold/10 text-gold border border-gold/20 rounded px-2 py-0.5">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-2">Connectivity</p>
                    <ul className="space-y-1">
                      {terminal.connectivity.map((c) => (
                        <li key={c} className="text-text-muted text-xs flex items-start gap-1.5">
                          <span className="w-1 h-1 bg-gold/50 rounded-full mt-1.5 shrink-0" />{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-2">Services Available</p>
                    <ul className="space-y-1">
                      {terminal.services.map((s) => (
                        <li key={s} className="text-text-muted text-xs flex items-start gap-1.5">
                          <span className="w-1 h-1 bg-gold/50 rounded-full mt-1.5 shrink-0" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card-glass rounded-lg p-4 flex flex-wrap gap-4">
                  <a href={`tel:${terminal.contact.phone}`} className="flex items-center gap-2 text-text-muted text-sm hover:text-gold transition-colors">
                    <Phone size={14} className="text-gold" />
                    {terminal.contact.phone}
                  </a>
                  <a href={`mailto:${terminal.contact.email}`} className="flex items-center gap-2 text-text-muted text-sm hover:text-gold transition-colors">
                    <Mail size={14} className="text-gold" />
                    {terminal.contact.email}
                  </a>
                </div>

                <Link to="/request-quote" className="btn-primary w-full justify-center">
                  Request Storage at {terminal.name}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Overview cards */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Network Overview" title="At a Glance" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {terminals.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => { setActive(t.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`card-glass rounded-xl p-5 text-left transition-all duration-300 ${active === t.id ? 'border-gold/50' : ''}`}
              >
                <span className="text-3xl mb-3 block" role="img" aria-label={t.country}>{t.flag}</span>
                <h3 className="font-heading font-bold text-text-primary text-lg">{t.name}</h3>
                <p className="text-text-muted text-xs mb-2">{t.country}</p>
                <span className="text-xs bg-gold/10 text-gold border border-gold/20 rounded px-2 py-0.5">{t.role}</span>
                <p className="text-gold font-heading font-bold mt-3">{t.capacity}</p>
                <p className="text-text-muted text-xs">Storage Capacity</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* List of Oil Tank Farms — Rotterdam & Houston */}
      <section className="py-20 bg-navy" aria-label="List of oil tank farms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Tank Farm Directory"
            title="List of Oil Tank Farms — Global Network"
            subtitle="A structured overview of our terminal facilities available for bulk liquid storage rental and leasing across five strategic locations."
            center
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Rotterdam */}
            <article className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label="Netherlands">🇳🇱</span>
                <div>
                  <h2 className="font-heading font-bold text-text-primary text-xl">Oil Tank Farm in Rotterdam</h2>
                  <p className="text-gold text-xs font-heading font-semibold uppercase tracking-wider">Primary Terminal — Port of Rotterdam</p>
                </div>
              </div>
              <ul className="space-y-2 text-text-muted text-sm mb-5">
                <li><span className="text-gold font-semibold">Location:</span> 17 Buraanweg Haven 300, 3195 ZH Rotterdam, Maasvlakte</li>
                <li><span className="text-gold font-semibold">Capacity:</span> 850,000+ m³ bulk liquid storage</li>
                <li><span className="text-gold font-semibold">Products:</span> Crude Oil, Diesel EN590, Jet A1, D6 Fuel Oil, Biofuels, Chemicals</li>
                <li><span className="text-gold font-semibold">Berths:</span> 4 berths (VLCC capable)</li>
                <li><span className="text-gold font-semibold">Connectivity:</span> Rotterdam-Rhine Pipeline (RRP), Pernis refinery pipeline, road &amp; barge</li>
                <li><span className="text-gold font-semibold">Services:</span> Storage rental, leasing, blending, heating, N₂ blanketing, lab testing</li>
              </ul>
              <Link to="/request-quote" className="btn-primary text-sm">
                Lease a Storage Tank in Rotterdam <ArrowRight size={14} />
              </Link>
            </article>

            {/* Houston */}
            <article className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label="United States">🇺🇸</span>
                <div>
                  <h2 className="font-heading font-bold text-text-primary text-xl">Oil Tank Farm in Houston</h2>
                  <p className="text-gold text-xs font-heading font-semibold uppercase tracking-wider">Subleased Terminal — Gulf Coast</p>
                </div>
              </div>
              <ul className="space-y-2 text-text-muted text-sm mb-5">
                <li><span className="text-gold font-semibold">Location:</span> Port of Houston, Gulf Coast, Texas, USA</li>
                <li><span className="text-gold font-semibold">Capacity:</span> 500,000+ m³ bulk liquid storage</li>
                <li><span className="text-gold font-semibold">Products:</span> Crude Oil, Fuel Oil, Refined Products, Petrochemicals</li>
                <li><span className="text-gold font-semibold">Berths:</span> 2 berths (Aframax capable)</li>
                <li><span className="text-gold font-semibold">Connectivity:</span> Gulf Coast tanker berths, local pipeline grid, road tanker bays</li>
                <li><span className="text-gold font-semibold">Services:</span> Storage rental, blending, pipeline transfer, inspection services</li>
              </ul>
              <Link to="/request-quote" className="btn-primary text-sm">
                Enquire About Houston Terminal <ArrowRight size={14} />
              </Link>
            </article>

            {/* Jurong */}
            <article className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label="Singapore">🇸🇬</span>
                <div>
                  <h2 className="font-heading font-bold text-text-primary text-xl">Oil Storage Company in Jurong</h2>
                  <p className="text-gold text-xs font-heading font-semibold uppercase tracking-wider">Subleased Terminal — Asia-Pacific Hub</p>
                </div>
              </div>
              <ul className="space-y-2 text-text-muted text-sm mb-5">
                <li><span className="text-gold font-semibold">Location:</span> Jurong Island, Singapore 627965</li>
                <li><span className="text-gold font-semibold">Capacity:</span> 600,000+ m³ bulk liquid storage</li>
                <li><span className="text-gold font-semibold">Products:</span> Fuel Oil, Diesel, Jet A1, Naphtha, Chemicals</li>
                <li><span className="text-gold font-semibold">Berths:</span> 3 berths (Suezmax capable)</li>
                <li><span className="text-gold font-semibold">Connectivity:</span> Deep-water berths, Jurong Island pipeline network, barge access</li>
                <li><span className="text-gold font-semibold">Services:</span> Storage rental, tank heating, blending, inspection services</li>
              </ul>
              <Link to="/request-quote" className="btn-primary text-sm">
                Enquire About Jurong Terminal <ArrowRight size={14} />
              </Link>
            </article>

            {/* Fujairah */}
            <article className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label="UAE">🇦🇪</span>
                <div>
                  <h2 className="font-heading font-bold text-text-primary text-xl">Oil Storage Company in Fujairah</h2>
                  <p className="text-gold text-xs font-heading font-semibold uppercase tracking-wider">Subleased Terminal — Middle East Bunkering</p>
                </div>
              </div>
              <ul className="space-y-2 text-text-muted text-sm mb-5">
                <li><span className="text-gold font-semibold">Location:</span> Port of Fujairah, UAE</li>
                <li><span className="text-gold font-semibold">Capacity:</span> 550,000+ m³ bulk liquid storage</li>
                <li><span className="text-gold font-semibold">Products:</span> VLSFO, HSFO Bunker Fuel, Crude Oil, Diesel, Fuel Oil</li>
                <li><span className="text-gold font-semibold">Berths:</span> 2 berths (VLCC capable)</li>
                <li><span className="text-gold font-semibold">Connectivity:</span> Deep-water VLCC berths, Fujairah port pipeline, direct vessel bunkering</li>
                <li><span className="text-gold font-semibold">Services:</span> Bunker storage, vessel bunkering, blending, inspection services</li>
              </ul>
              <Link to="/request-quote" className="btn-primary text-sm">
                Enquire About Fujairah Terminal <ArrowRight size={14} />
              </Link>
            </article>

            {/* Ningbo-Zhoushan */}
            <article className="card-glass rounded-xl p-6 lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label="China">🇨🇳</span>
                <div>
                  <h2 className="font-heading font-bold text-text-primary text-xl">Oil Storage in Ningbo-Zhoushan, China</h2>
                  <p className="text-gold text-xs font-heading font-semibold uppercase tracking-wider">Subleased Terminal — World's Busiest Port by Cargo</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-text-muted text-sm mb-5">
                <ul className="space-y-2">
                  <li><span className="text-gold font-semibold">Location:</span> Ningbo-Zhoushan Port, Zhejiang Province, China</li>
                  <li><span className="text-gold font-semibold">Capacity:</span> 450,000+ m³ bulk liquid storage</li>
                  <li><span className="text-gold font-semibold">Products:</span> Crude Oil, Fuel Oil, Diesel, LNG, Petrochemicals, Bitumen</li>
                </ul>
                <ul className="space-y-2">
                  <li><span className="text-gold font-semibold">Berths:</span> 3 berths (VLCC capable)</li>
                  <li><span className="text-gold font-semibold">Connectivity:</span> Zhoushan crude oil pipeline network, deep-water VLCC berths, coastal feeder &amp; barge access</li>
                  <li><span className="text-gold font-semibold">Services:</span> Crude oil storage, blending, pipeline transfer, inspection services</li>
                </ul>
              </div>
              <Link to="/request-quote" className="btn-primary text-sm">
                Enquire About Ningbo-Zhoushan Terminal <ArrowRight size={14} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={terminalFAQs}
        title="Oil Tank Farm Questions — Rotterdam, Houston, Jurong, Fujairah & Ningbo-Zhoushan"
        label="Terminal FAQ"
      />
      <LeadCaptureForm />
      <CTABanner ctaText="Reserve Terminal Capacity" ctaTo="/request-quote" />
    </>
  )
}
