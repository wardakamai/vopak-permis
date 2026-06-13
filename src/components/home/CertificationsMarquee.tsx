const certs = [
  'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISPS Code',
  'ISGOTT', 'MARPOL', 'AFQRJOS', 'API Standards',
  'EN 590', 'ASTM International', 'Lloyd\'s Register', 'Bureau Veritas',
]

export default function CertificationsMarquee() {
  return (
    <section className="py-14 bg-navy-light border-b border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-text-muted text-xs font-heading font-semibold uppercase tracking-widest">
          Certifications &amp; Standards
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...certs, ...certs].map((cert, i) => (
            <div
              key={`${cert}-${i}`}
              className="inline-flex items-center mx-6 px-5 py-2 border border-gold/15 rounded-full text-text-muted text-sm font-heading font-semibold uppercase tracking-wider whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 shrink-0" />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
