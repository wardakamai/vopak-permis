import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import StickyQuoteCTA from '../shared/StickyQuoteCTA'
import useGlowCards from '../../hooks/useGlowCards'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export default function Layout() {
  const location = useLocation()
  useGlowCards()

  return (
    <div className="flex flex-col min-h-screen bg-navy">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-1"
          id="main-content"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <StickyQuoteCTA />
    </div>
  )
}
