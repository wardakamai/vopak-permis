import SEOHead from '../components/shared/SEOHead'
import FAQAccordion from '../components/shared/FAQAccordion'
import LeadCaptureForm from '../components/shared/LeadCaptureForm'
import HeroSection from '../components/home/HeroSection'
import AboutSnapshot from '../components/home/AboutSnapshot'
import ServicesOverview from '../components/home/ServicesOverview'
import TerminalsMap from '../components/home/TerminalsMap'
import ProductsTeaser from '../components/home/ProductsTeaser'
import HSEStrip from '../components/home/HSEStrip'
import CTABanner from '../components/shared/CTABanner'
import CertificationsMarquee from '../components/home/CertificationsMarquee'
import type { FAQItem } from '../components/shared/FAQAccordion'

const homeFAQs: FAQItem[] = [
  {
    question: 'How do I rent an oil storage tank in Rotterdam?',
    answer:
      'Contact our Rotterdam storage team via our online quote form or call +31 970 102 57780. We offer flexible tank rental from 30-day spot agreements to multi-year leases at Port of Rotterdam Maasvlakte. Our commercial team will prepare a tailored proposal within 24 hours.',
  },
  {
    question: 'Do you have oil tank farms in Houston and other locations?',
    answer:
      'Yes. In addition to our primary oil tank farm in Rotterdam, we operate subleased terminals in Houston (Gulf Coast), Jurong (Singapore), and Fujairah (UAE), covering every major petroleum trading corridor. Storage capacity exceeds 2.5 million m³ across all locations.',
  },
  {
    question: 'What products can be stored at your Rotterdam terminal?',
    answer:
      'Our Rotterdam oil tank farm handles crude oil, diesel EN 590, Jet A1 aviation fuel, D6 fuel oil, biofuels, petrochemicals, and blended products. All tanks are equipped with heating, nitrogen blanketing, and vapor recovery systems for safe, compliant storage.',
  },
  {
    question: 'How can I contact your oil tank farm for a storage quote?',
    answer:
      'You can request a quote online, email info@tankspeedterminals.eu, or call +31 970 102 57780 (Vopak Logistics Services Permis) or +31 68 538 6858 (General Tank Speed BV). Our team responds to all storage enquiries within 24 business hours.',
  },
  {
    question: 'Do you offer oil storage in Jurong and Fujairah?',
    answer:
      'Yes. Our Jurong terminal on Jurong Island, Singapore serves the Asia-Pacific market with 600,000+ m³ capacity, while our Fujairah terminal in the UAE is a key Middle East bunkering and storage hub with 550,000+ m³ capacity. Both facilities handle fuel oil, diesel, and crude oil.',
  },
  {
    question: 'What is the minimum storage volume and contract length?',
    answer:
      'We offer flexible terms starting from 10,000 m³ on 30-day spot contracts up to dedicated tank leasing on multi-year agreements. Volume and term discounts apply for longer commitments. Contact our commercial team to discuss your specific volume and timeline requirements.',
  },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TankSpeed Terminals – Vopak Logistics Services Permis & General Tank Speed BV',
  url: 'https://www.tankspeedterminals.eu',
  logo: 'https://www.tankspeedterminals.eu/favicon.png',
  description:
    'Joint venture oil tank farm and bulk liquid storage terminal operator at Port of Rotterdam with global terminals in Houston, Jurong, and Fujairah.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Buraanweg Haven 300',
    postalCode: '3195 ZH',
    addressLocality: 'Rotterdam',
    addressCountry: 'NL',
  },
  telephone: ['+3197010257780', '+31685386858'],
  email: 'info@tankspeedterminals.eu',
  areaServed: ['Netherlands', 'USA', 'Singapore', 'UAE'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+3197010257780',
      contactType: 'customer service',
      email: 'info@tankspeedterminals.eu',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+31685386858',
      contactType: 'customer service',
    },
  ],
  sameAs: ['https://www.tankspeedterminals.eu'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TankSpeed Terminals',
  url: 'https://www.tankspeedterminals.eu',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.tankspeedterminals.eu/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFAQs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Rotterdam Storage Company | Oil Tank Farm & Terminal Rental – TankSpeed Terminals"
        description="Lease oil storage tanks at our Rotterdam tank farm. Reliable bulk oil & gas storage in Rotterdam, Houston, Jurong & Fujairah. Get a storage quote today."
        keywords="oil tank farm Rotterdam, Rotterdam storage company, rent storage tank Rotterdam, bulk liquid storage Rotterdam, tank terminal leasing Rotterdam, crude oil storage Europe, jet fuel storage terminal Rotterdam, diesel EN 590 bulk storage"
        path="/"
        schema={[organizationSchema, websiteSchema, faqSchema]}
      />
      <HeroSection />
      <AboutSnapshot />
      <ServicesOverview />
      <TerminalsMap />
      <ProductsTeaser />
      <HSEStrip />
      <CTABanner />
      <FAQAccordion
        faqs={homeFAQs}
        title="Oil Storage in Rotterdam — Common Questions"
        label="FAQ"
      />
      <LeadCaptureForm />
      <CertificationsMarquee />
    </>
  )
}
