import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaTo?: string
}

export default function CTABanner({
  title = 'Looking for Bulk Storage or Freight Solutions?',
  subtitle = 'Our team of terminal specialists is ready to design a custom storage and logistics solution for your operation.',
  ctaText = 'Get a Free Consultation',
  ctaTo = '/request-quote',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        className="absolute inset-0"
        style={{ background: 'var(--cta-bg)' }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'var(--cta-highlight)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-4 max-w-3xl mx-auto"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-text-muted text-lg max-w-xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link to={ctaTo} className="btn-primary shimmer-btn text-base px-8 py-4">
            {ctaText}
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
