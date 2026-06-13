import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import logoDark from '../../assets/logo-dark.png'
import logoLight from '../../assets/logo-light.png'

const servicesLinks = [
  { to: '/services/storage', label: 'Storage Services' },
  { to: '/services/vessel-chartering', label: 'Vessel Chartering' },
  { to: '/services/pipeline', label: 'Pipeline Services' },
  { to: '/services/laboratory', label: 'Laboratory Services' },
]

const productsLinks = [
  { to: '/products/d6-fuel-oil', label: 'Virgin Fuel Oil D6' },
  { to: '/products/jet-a1', label: 'Jet A1 Aviation Fuel' },
  { to: '/products/diesel-en590', label: 'Diesel EN 590' },
  { to: '/products/crude-oil', label: 'Crude Oil' },
]

function DropdownMenu({
  links,
  isOpen,
}: {
  links: { to: string; label: string }[]
  isOpen: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-2 w-52 bg-navy-light card-glow rounded-lg overflow-hidden z-50"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-3 text-sm text-text-primary hover:bg-gold/10 hover:text-gold transition-colors duration-200 border-b border-gold/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const location = useLocation()
  const servicesRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setProductsOpen(false)
    setMobileServicesOpen(false)
    setMobileProductsOpen(false)
  }, [location])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const { theme, toggleTheme } = useTheme()

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 ${
      isActive ? 'text-gold' : scrolled ? 'text-text-primary hover:text-gold' : 'text-white hover:text-gold'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md border-b border-gold/10 shadow-lg'
            : 'bg-gradient-to-b from-black/30 to-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="TankSpeed Terminals home">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="TankSpeed Terminals logo"
              className="h-16 sm:h-24 lg:h-32 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className={`flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname.startsWith('/services') ? 'text-gold' : scrolled ? 'text-text-primary hover:text-gold' : 'text-white hover:text-gold'
                }`}
                onClick={() => { setServicesOpen(!servicesOpen); setProductsOpen(false) }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu links={servicesLinks} isOpen={servicesOpen} />
            </div>

            {/* Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                className={`flex items-center gap-1 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname.startsWith('/products') ? 'text-gold' : scrolled ? 'text-text-primary hover:text-gold' : 'text-white hover:text-gold'
                }`}
                onClick={() => { setProductsOpen(!productsOpen); setServicesOpen(false) }}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              <DropdownMenu links={productsLinks} isOpen={productsOpen} />
            </div>

            <NavLink to="/terminals" className={navLinkClass}>Terminals</NavLink>
            <NavLink to="/inspection" className={navLinkClass}>Inspection</NavLink>
            <NavLink to="/hse" className={navLinkClass}>HSE</NavLink>
            <NavLink to="/sustainability" className={navLinkClass}>Sustainability</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* CTA + Theme Toggle + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-gold transition-colors rounded-lg"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/request-quote"
              className="hidden lg:inline-flex btn-primary shimmer-btn text-xs"
              aria-label="Request a storage quote"
            >
              Request Quote
            </Link>
            <button
              className={`lg:hidden p-2 hover:text-gold transition-colors ${scrolled ? 'text-text-primary' : 'text-white'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy flex flex-col pt-20 px-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-1">
              <MobileNavLink to="/" label="Home" end />
              <MobileNavLink to="/about" label="About" />

              {/* Services accordion */}
              <div className="border-b border-gold/10">
                <button
                  className={`w-full flex items-center justify-between py-3 px-2 font-heading font-semibold text-base uppercase tracking-wider transition-colors duration-200 ${
                    location.pathname.startsWith('/services') ? 'text-gold' : 'text-text-primary hover:text-gold'
                  }`}
                  onClick={() => setMobileServicesOpen(o => !o)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-gold' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      key="services-sub"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 pl-3 border-l-2 border-gold/30 ml-2">
                        {servicesLinks.map((l) => (
                          <MobileNavLink key={l.to} to={l.to} label={l.label} sub />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products accordion */}
              <div className="border-b border-gold/10">
                <button
                  className={`w-full flex items-center justify-between py-3 px-2 font-heading font-semibold text-base uppercase tracking-wider transition-colors duration-200 ${
                    location.pathname.startsWith('/products') ? 'text-gold' : 'text-text-primary hover:text-gold'
                  }`}
                  onClick={() => setMobileProductsOpen(o => !o)}
                  aria-expanded={mobileProductsOpen}
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180 text-gold' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.div
                      key="products-sub"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 pl-3 border-l-2 border-gold/30 ml-2">
                        {productsLinks.map((l) => (
                          <MobileNavLink key={l.to} to={l.to} label={l.label} sub />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <MobileNavLink to="/terminals" label="Terminals" />
              <MobileNavLink to="/inspection" label="Inspection" />
              <MobileNavLink to="/hse" label="HSE" />
              <MobileNavLink to="/sustainability" label="Sustainability" />
              <MobileNavLink to="/contact" label="Contact" />
              <div className="pt-6 pb-10">
                <Link to="/request-quote" className="btn-primary w-full justify-center shimmer-btn">
                  Request Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileNavLink({
  to,
  label,
  end,
  sub,
}: {
  to: string
  label: string
  end?: boolean
  sub?: boolean
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `block py-3 px-2 font-heading font-semibold uppercase tracking-wider transition-colors ${
          sub ? 'text-sm border-b border-gold/10 last:border-0' : 'text-base border-b border-gold/10'
        } ${isActive ? 'text-gold' : 'text-text-primary hover:text-gold'}`
      }
    >
      {label}
    </NavLink>
  )
}
