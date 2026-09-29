import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BadgeCheck, Star, ArrowRight, X } from 'lucide-react'
import {
  doctorInfo,
  assets,
  features,
  aboutText,
  highlights,
} from '../data/content'
import { WEB3FORMS_KEY, WEB3FORMS_URL, FORM_EMAIL } from '../config/form'
import { fadeUp, stagger, scaleIn, slideRight } from './Motion'

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold text-gold" />
      ))}
    </div>
  )
}

const statPills = [
  doctorInfo.experience,
  doctorInfo.languages,
  doctorInfo.patients,
]

const infoRows = [
  { label: 'EDUCATION', value: doctorInfo.education },
  { label: 'PATIENT', value: '1000+' },
  { label: 'EXPERIENCE', value: '12+ Years clinical practice' },
  { label: 'LOCATION', value: doctorInfo.location },
]

function ThankYouModal({ open, onClose }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/45"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className="relative w-full max-w-md rounded-3xl bg-olive px-8 py-12 text-center shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1.5 text-cream/70 transition hover:bg-white/10 hover:text-cream"
              aria-label="Close thank you"
            >
              <X size={20} />
            </button>
            <p className="font-serif text-3xl font-semibold text-gold sm:text-4xl">
              Thank You!
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/85 sm:text-base">
              Your consultation request has been received. Our team will contact
              you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-gold px-8 py-2.5 text-sm font-medium text-olive-dark transition hover:bg-gold-muted"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

function ConsultationForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '' })
  const [thanks, setThanks] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const name = form.name.trim()
    const phone = `+91 ${form.phone.trim()}`
    const preferredDate = form.date
    const message = `Name: ${name}\nPhone: ${phone}\nPreferred Date: ${preferredDate}`

    try {
      // If Web3Forms key exists → silent email (no mail app)
      if (WEB3FORMS_KEY) {
        const res = await fetch(WEB3FORMS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: 'Olive Aesthetics — New Consultation Request',
            from_name: name,
            name,
            phone,
            preferred_date: preferredDate,
            email: FORM_EMAIL,
            message,
          }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok || data.success === false) {
          throw new Error(data.message || 'Failed to send. Please try again.')
        }
      } else {
        // Direct: open Gmail/mail app with form data (no API key needed)
        const subject = encodeURIComponent(
          'Olive Aesthetics — New Consultation Request',
        )
        const body = encodeURIComponent(message)
        window.location.href = `mailto:${FORM_EMAIL}?subject=${subject}&body=${body}`
      }

      setForm({ name: '', phone: '', date: '' })
      setThanks(true)
    } catch (err) {
      setError(
        err.message ||
          'Something went wrong. Please call us or try WhatsApp.',
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <motion.div
        id="consult"
        variants={slideRight}
        className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-form sm:p-6 lg:sticky lg:top-24"
      >
        <div className="mb-5 rounded-xl bg-[#F7F3EB] px-3 py-3 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-olive/80">
            Next Open Slot
          </p>
          <p className="mt-1 text-xs font-medium leading-snug text-olive-dark">
            {doctorInfo.hours} | {doctorInfo.addressShort}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-olive-dark">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input-field rounded-xl"
              disabled={sending}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-olive-dark">
              Phone Number
            </label>
            <div className="flex overflow-hidden rounded-xl border border-gray-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
              <span className="flex items-center border-r border-gray-200 bg-gray-50 px-3 text-sm text-gray-500">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2.5 text-sm outline-none disabled:bg-gray-50"
                disabled={sending}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-olive-dark">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="input-field date-single-icon rounded-xl"
              disabled={sending}
            />
          </div>

          <p className="text-[11px] leading-relaxed text-gray-500">
            By submitting this form, you agree to be contacted by Olive
            Aesthetics medical coordination team.
          </p>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gold-muted hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? 'Sending...' : 'Request Consultation'}
            {!sending && <ArrowRight size={16} />}
          </button>
        </form>
      </motion.div>

      <ThankYouModal open={thanks} onClose={() => setThanks(false)} />
    </>
  )
}

export default function Hero() {
  return (
    <section className="section-pad bg-cream py-8 sm:py-10 lg:pb-16 lg:pt-12">
      <motion.div
        className="section-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={stagger}
      >
        {/*
          Sticky photo: stays fixed while right column (profile → about → education) scrolls.
          Do NOT put transform/overflow on the sticky element itself.
        */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8">
          {/* LEFT — sticky doctor image */}
          <aside className="mx-auto w-full max-w-[280px] self-start sm:max-w-sm lg:sticky lg:top-24 lg:col-span-3 lg:mx-0 lg:max-w-none lg:z-10">
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-xl shadow-soft"
            >
              <img
                src={assets.doctor}
                alt={doctorInfo.name}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </motion.div>
          </aside>

          {/* RIGHT — scrolls until education card reaches image level */}
          <div className="lg:col-span-9">
            {/* Top: details + form — amenities share exact width with highlight cards */}
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-9 lg:gap-6">
              <motion.div variants={fadeUp} className="min-w-0 lg:col-span-6">
                <div className="mb-2 flex items-center gap-1.5 text-sm text-olive">
                  <BadgeCheck size={18} className="fill-olive text-cream" />
                  <span className="font-medium">Verified Medical Practitioner</span>
                </div>

                <h1 className="font-serif text-[1.65rem] font-semibold leading-tight text-olive-dark sm:text-3xl lg:text-[2rem]">
                  {doctorInfo.name}
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                  {doctorInfo.qualifications}
                </p>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <Stars />
                  <span className="text-sm text-gray-600">
                    {doctorInfo.rating}{' '}
                    <span className="text-gray-500">
                      ({doctorInfo.reviews} reviews)
                    </span>
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-2">
                  {statPills.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium text-olive-dark sm:text-xs"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Cards + amenities — same width, amenities one line (Figma) */}
                <div className="mt-6 w-full">
                  <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-olive-dark">
                    Key Professional Highlights
                  </h3>

                  <motion.div
                    variants={stagger}
                    className="grid w-full grid-cols-2 gap-2.5 sm:grid-cols-6"
                  >
                    {highlights.map((item, i) => {
                      const centerBottom =
                        i === 3
                          ? 'sm:col-span-2 sm:col-start-2'
                          : 'sm:col-span-2'
                      return (
                        <motion.div
                          key={item.id}
                          variants={scaleIn}
                          whileHover={{
                            scale: 1.03,
                            y: -3,
                            boxShadow: '0 10px 24px rgba(74, 83, 60, 0.1)',
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 340,
                            damping: 20,
                          }}
                          className={`overflow-hidden rounded-lg bg-transparent ${centerBottom}`}
                        >
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>
                      )
                    })}
                  </motion.div>

                  {/* One line under cards — equal columns, same width as cards */}
                  <motion.div
                    variants={stagger}
                    className="mt-5 grid w-full grid-cols-4 gap-x-2 gap-y-4 sm:mt-6 sm:grid-cols-8 sm:gap-x-1.5 sm:gap-y-0 lg:gap-x-2"
                  >
                    {features.map((f) => (
                      <motion.div
                        key={f.label}
                        variants={scaleIn}
                        whileHover={{ y: -2 }}
                        className="flex min-w-0 flex-col items-center text-center"
                      >
                        <div className="flex h-9 w-full shrink-0 items-center justify-center sm:h-10">
                          <img
                            src={f.image}
                            alt=""
                            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                          />
                        </div>
                        <p className="mt-1.5 whitespace-pre-line text-[8px] font-medium leading-[1.25] text-black/70 sm:mt-2 sm:text-[9px] lg:text-[10px]">
                          {f.label}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <div className="lg:col-span-3 lg:pt-0">
                <ConsultationForm />
              </div>
            </div>

            {/* About + education — scrolls beside sticky image */}
            <motion.div
              id="about"
              variants={stagger}
              className="mt-10 scroll-mt-24 sm:mt-12"
            >
              <motion.h2
                variants={fadeUp}
                className="gold-underline font-serif text-2xl font-semibold text-olive-dark sm:text-3xl"
              >
                About {doctorInfo.name}
              </motion.h2>

              <div className="mt-5 max-w-3xl space-y-4">
                {aboutText.map((para, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-sm leading-relaxed text-gray-600 sm:text-[15px]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  boxShadow: '0 14px 36px rgba(74, 83, 60, 0.12)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="mt-8 max-w-xl rounded-2xl border border-gray-100 bg-white p-5 shadow-card sm:p-6"
              >
                <dl className="space-y-5">
                  {infoRows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-gold">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-olive-dark">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
