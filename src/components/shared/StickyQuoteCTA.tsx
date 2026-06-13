import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function StickyQuoteCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to="/request-quote"
            className="flex items-center gap-2 btn-primary shimmer-btn shadow-2xl"
            aria-label="Request a storage quote"
          >
            <MessageSquare size={16} />
            <span className="hidden sm:inline">Request Storage Quote</span>
            <span className="sm:hidden">Quote</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
