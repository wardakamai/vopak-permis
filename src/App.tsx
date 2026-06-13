import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext'

const HomePage           = lazy(() => import('./pages/HomePage'))
const AboutPage          = lazy(() => import('./pages/AboutPage'))
const ServicesPage       = lazy(() => import('./pages/ServicesPage'))
const StoragePage        = lazy(() => import('./pages/services/StoragePage'))
const VesselCharteringPage = lazy(() => import('./pages/services/VesselCharteringPage'))
const PipelinePage       = lazy(() => import('./pages/services/PipelinePage'))
const LaboratoryPage     = lazy(() => import('./pages/services/LaboratoryPage'))
const ProductsPage       = lazy(() => import('./pages/ProductsPage'))
const D6FuelOilPage      = lazy(() => import('./pages/products/D6FuelOilPage'))
const JetA1Page          = lazy(() => import('./pages/products/JetA1Page'))
const DieselEN590Page    = lazy(() => import('./pages/products/DieselEN590Page'))
const CrudeOilPage       = lazy(() => import('./pages/products/CrudeOilPage'))
const TerminalsPage      = lazy(() => import('./pages/TerminalsPage'))
const InspectionPage     = lazy(() => import('./pages/InspectionPage'))
const HSEPage            = lazy(() => import('./pages/HSEPage'))
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'))
const ContactPage        = lazy(() => import('./pages/ContactPage'))
const RequestQuotePage   = lazy(() => import('./pages/RequestQuotePage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div>
        <p className="text-gold font-heading font-bold text-8xl mb-4">404</p>
        <h1 className="font-heading font-bold text-3xl text-text-primary mb-4">Page Not Found</h1>
        <p className="text-text-muted mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/" className="btn-primary inline-flex">Return Home</a>
          <a href="/terminals" className="btn-secondary inline-flex">View Terminals</a>
          <a href="/contact" className="btn-secondary inline-flex">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-navy" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/storage" element={<StoragePage />} />
            <Route path="/services/vessel-chartering" element={<VesselCharteringPage />} />
            <Route path="/services/pipeline" element={<PipelinePage />} />
            <Route path="/services/laboratory" element={<LaboratoryPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/d6-fuel-oil" element={<D6FuelOilPage />} />
            <Route path="/products/jet-a1" element={<JetA1Page />} />
            <Route path="/products/diesel-en590" element={<DieselEN590Page />} />
            <Route path="/products/crude-oil" element={<CrudeOilPage />} />
            <Route path="/terminals" element={<TerminalsPage />} />
            <Route path="/inspection" element={<InspectionPage />} />
            <Route path="/hse" element={<HSEPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}
