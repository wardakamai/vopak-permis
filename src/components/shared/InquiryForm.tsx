import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please provide more detail (min 10 characters)'),
})

type FormData = z.infer<typeof schema>

interface InquiryFormProps {
  productName?: string
}

export default function InquiryForm({ productName }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    console.log('Inquiry submission:', { ...data, product: productName })
    setSubmitted(true)
  }

  return (
    <div className="card-glass rounded-xl p-6 lg:p-8">
      <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">
        Request Information
      </h3>
      {productName && (
        <p className="text-text-muted text-sm mb-6">
          Enquiring about: <span className="text-gold">{productName}</span>
        </p>
      )}

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <CheckCircle className="text-[#2ECC71] mx-auto mb-4" size={48} />
            <h4 className="font-heading font-bold text-xl text-text-primary mb-2">
              Thank You!
            </h4>
            <p className="text-text-muted">
              We'll respond within 24 hours. Our storage specialists will be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inq-name" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  id="inq-name"
                  {...register('name')}
                  className="w-full bg-navy border border-gold/20 rounded px-3 py-2.5 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="inq-company" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Company *
                </label>
                <input
                  id="inq-company"
                  {...register('company')}
                  className="w-full bg-navy border border-gold/20 rounded px-3 py-2.5 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                  placeholder="Acme Energy Ltd."
                />
                {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inq-email" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Email *
                </label>
                <input
                  id="inq-email"
                  type="email"
                  {...register('email')}
                  className="w-full bg-navy border border-gold/20 rounded px-3 py-2.5 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="inq-phone" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
                  Phone
                </label>
                <input
                  id="inq-phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full bg-navy border border-gold/20 rounded px-3 py-2.5 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div>
              <label htmlFor="inq-message" className="block text-text-muted text-xs font-semibold uppercase tracking-wider mb-1">
                Message / Requirements *
              </label>
              <textarea
                id="inq-message"
                {...register('message')}
                rows={4}
                className="w-full bg-navy border border-gold/20 rounded px-3 py-2.5 text-text-primary text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Please describe your storage or logistics requirements..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center shimmer-btn"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
