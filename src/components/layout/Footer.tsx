import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import logoDark from '../../assets/logo-dark.png'
import logoLight from '../../assets/logo-light.png'

const footerLinks = {
  company: [
    { to: '/about', label: 'About Us' },
    { to: '/terminals', label: 'Our Terminals' },
    { to: '/hse', label: 'HSE Policy' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/inspection', label: 'Inspection Services' },
  ],
  services: [
    { to: '/services/storage', label: 'Storage Services' },
    { to: '/services/vessel-chartering', label: 'Vessel Chartering' },
    { to: '/services/pipeline', label: 'Pipeline Services' },
    { to: '/services/laboratory', label: 'Laboratory Services' },
  ],
  products: [
    { to: '/products/d6-fuel-oil', label: 'Virgin Fuel Oil D6' },
    { to: '/products/jet-a1', label: 'Jet A1 Aviation Fuel' },
    { to: '/products/diesel-en590', label: 'Diesel EN 590' },
    { to: '/products/crude-oil', label: 'Crude Oil' },
  ],
}

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer className="bg-navy border-t border-gold/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-4">
              <img
                src={theme === 'dark' ? logoDark : logoLight}
                alt="TankSpeed Terminals logo"
                className="h-20 sm:h-28 lg:h-36 w-auto object-contain"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              A joint venture between Vopak Logistics Services Permis and General Tank Speed BV.
              Providing world-class bulk liquid storage and logistics solutions at the Port of Rotterdam
              and strategic terminals globally.
            </p>
            {/* Vopak Contact */}
            <div className="mb-4">
              <p className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-2">
                Vopak Logistics Services Permis
              </p>
              <div className="flex items-start gap-2 text-text-muted text-sm mb-1">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold/60" />
                <span>17 Buraanweg Haven 300, 3195 ZH Rotterdam, Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm mb-1">
                <Phone size={14} className="shrink-0 text-gold/60" />
                <a href="tel:+3197010257780" className="hover:text-gold transition-colors">
                  +31 970 102 57780
                </a>
              </div>
              <p className="text-text-muted text-xs pl-5">KVK: 0874288120</p>
            </div>
            {/* GTS Contact */}
            <div className="mb-6">
              <p className="text-gold text-xs font-heading font-semibold uppercase tracking-widest mb-2">
                General Tank Speed BV
              </p>
              <div className="flex items-start gap-2 text-text-muted text-sm mb-1">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold/60" />
                <span>Archipel 27, 3705 XM Zeist, Netherlands</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm mb-1">
                <Phone size={14} className="shrink-0 text-gold/60" />
                <a href="tel:+31685386858" className="hover:text-gold transition-colors">
                  +31 68 538 6858
                </a>
              </div>
              <p className="text-text-muted text-xs pl-5">KVK: 82829144</p>
            </div>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'LI', fullLabel: 'LinkedIn', href: '#' },
                { label: 'TW', fullLabel: 'Twitter / X', href: '#' },
                { label: 'WB', fullLabel: 'Website', href: 'https://www.tankspeedterminals.eu' },
              ].map(({ label, fullLabel, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={fullLabel}
                  className="w-9 h-9 border border-gold/20 rounded flex items-center justify-center text-text-muted hover:border-gold hover:text-gold transition-all text-xs font-heading font-bold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-gold font-heading font-semibold text-xs uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-text-muted text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-gold font-heading font-semibold text-xs uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-text-muted text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links + Contact */}
          <div>
            <h3 className="text-gold font-heading font-semibold text-xs uppercase tracking-widest mb-4">
              Products
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.products.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-text-muted text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-gold font-heading font-semibold text-xs uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              {[
                { href: 'mailto:info@tankspeedterminals.eu', label: 'info@tankspeedterminals.eu' },
                { href: 'mailto:booking@tankspeedterminals.eu', label: 'booking@tankspeedterminals.eu' },
                { href: 'mailto:logistics@tankspeedterminals.eu', label: 'logistics@tankspeedterminals.eu' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-1.5 text-text-muted text-xs hover:text-gold transition-colors">
                    <Mail size={12} className="shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} TankSpeed Terminals — Vopak Logistics Services Permis & General Tank Speed BV. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/hse" className="text-text-muted text-xs hover:text-gold transition-colors">HSE Policy</Link>
            <span className="text-gold/20">|</span>
            <Link to="/sustainability" className="text-text-muted text-xs hover:text-gold transition-colors">Sustainability</Link>
            <span className="text-gold/20">|</span>
            <a href="https://www.tankspeedterminals.eu" className="text-text-muted text-xs hover:text-gold transition-colors">tankspeedterminals.eu</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
