import { motion } from 'framer-motion'
import { GitBranch, Gauge, CheckCircle, Zap } from 'lucide-react'
import SEOHead from '../../components/shared/SEOHead'
import PageHero from '../../components/shared/PageHero'
import Breadcrumb from '../../components/shared/Breadcrumb'
import pipelineHero from '../../assets/pipeline-services-hero-bg.png'
import CTABanner from '../../components/shared/CTABanner'
import InquiryForm from '../../components/shared/InquiryForm'
import SectionHeader from '../../components/shared/SectionHeader'

const pipelineFeatures = [
  { Icon: GitBranch, title: 'Direct Terminal Connectivity', description: 'Our Rotterdam Maasvlakte terminal is directly connected to the Netherlands pipeline grid, enabling efficient product transfers to and from major refineries.' },
  { Icon: Gauge, title: 'Metered Transfer', description: 'Custody transfer metering systems calibrated to API MPMS standards. Electronic flow computers provide traceable, accurate volume measurement.' },
  { Icon: Zap, title: 'High Throughput', description: 'Large-diameter pipeline connections capable of handling high-volume product movements, reducing vessel and road tanker turnaround times.' },
  { Icon: CheckCircle, title: 'Cross-Terminal Access', description: 'Coordinated access to pipeline connections at Houston and Jurong terminals, enabling seamless product flows across our global network.' },
]

const specs = [
  { label: 'Pipeline Diameter', value: 'Up to 24" (610mm)' },
  { label: 'Flow Rate', value: 'Up to 5,000 m³/hr' },
  { label: 'Metering Standard', value: 'API MPMS / ISO 5167' },
  { label: 'Products', value: 'Crude, Fuel Oil, Diesel, Jet A1, Biofuels' },
  { label: 'Connections', value: 'ABP Rotterdam grid, Pernis refinery axis' },
  { label: 'Pressure', value: 'Up to 10 bar operating pressure' },
]

export default function PipelinePage() {
  return (
    <>
      <SEOHead
        title="Pipeline Services Rotterdam | Bulk Liquid Transfer & Distribution"
        description="Direct pipeline connectivity at Port of Rotterdam for high-throughput bulk liquid transfers. Access the Rotterdam-Rhine Pipeline (RRP) network."
        keywords="pipeline services Rotterdam, bulk liquid transfer Rotterdam, Rotterdam Rhine Pipeline, oil pipeline terminal, pipeline connectivity Rotterdam"
        path="/services/pipeline"
      />

      <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: 'Pipeline Services', to: '/services/pipeline' }]} />

      <PageHero
        label="Pipeline Services"
        title="Direct Pipeline Connectivity at Rotterdam Maasvlakte"
        subtitle="Efficient, metered, and fully compliant pipeline product transfers connecting our terminal to the Netherlands' pipeline infrastructure and major European refineries."
        image={pipelineHero}
      />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader label="Pipeline Infrastructure" title="The Rotterdam Pipeline Advantage" />
              <div className="space-y-4 mt-6 text-text-muted leading-relaxed">
                <p>
                  Rotterdam is the epicentre of European petroleum pipeline infrastructure. Our
                  Maasvlakte terminal's direct connection to the Dutch pipeline grid provides clients
                  with unparalleled access to the continent's largest refinery complex at Pernis,
                  the Rotterdam-Rhine Pipeline (RRP), and the major product pipelines serving
                  airports, distribution terminals, and industrial customers throughout Northern Europe.
                </p>
                <p>
                  Pipeline transfers significantly reduce the logistics costs and turnaround times
                  associated with road and barge movements. For large-volume product deliveries and
                  withdrawals, our pipeline infrastructure delivers throughput rates that cannot be
                  matched by any other transport mode.
                </p>
                <p>
                  All pipeline transfers are conducted using custody-transfer-grade metering systems
                  calibrated to API MPMS and ISO 5167 standards. Our metering infrastructure provides
                  real-time flow data accessible to clients through our dedicated portal, along with
                  certified measurement certificates for every transfer.
                </p>
                <p>
                  For clients operating across multiple terminals in our network, we also facilitate
                  coordinated pipeline access at our subleased terminals in Houston and Jurong, managed
                  through a single point of contact at TankSpeed Terminals Rotterdam.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="section-label text-xs mb-4">Technical Specifications</p>
              {specs.map((s) => (
                <div key={s.label} className="card-glass rounded-lg px-4 py-3 flex justify-between items-center gap-4">
                  <span className="text-text-muted text-sm">{s.label}</span>
                  <span className="text-gold font-heading font-semibold text-sm text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Capabilities" title="Pipeline Service Features" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {pipelineFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-glass rounded-xl p-6"
              >
                <feat.Icon size={24} className="text-gold mb-3" />
                <h3 className="font-heading font-bold text-text-primary text-lg mb-2">{feat.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <SectionHeader label="Get In Touch" title="Discuss Pipeline Access" center />
          <div className="mt-8 max-w-2xl mx-auto">
            <InquiryForm productName="Pipeline Services" />
          </div>
        </div>
      </section>

      <CTABanner ctaText="Request Pipeline Access" ctaTo="/request-quote" />
    </>
  )
}
