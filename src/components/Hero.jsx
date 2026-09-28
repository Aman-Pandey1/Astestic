import { useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Star, Calendar, ArrowRight } from 'lucide-react'
import { highlights, doctorInfo, assets } from '../data/content'
import { fadeUp, stagger, scaleIn, slideRight, slideLeft } from './Motion'

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

function ConsultationForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Our team will contact you shortly.')
    setForm({ name: '', phone: '', date: '' })
  }

  return (
    <motion.div
      id="consult"
      variants={slideRight}
      className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-form sm:p-6 lg:sticky lg:top-24"
    >
      <div className="mb-5 rounded-xl bg-[#F7F3EB] px-3 py-3 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-olive/80">
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
              className="w-full px-3 py-2.5 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-olive-dark">
            Preferred Date
          </label>
          <div className="relative">
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="input-field rounded-xl pr-10"
            />
            <Calendar
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <p className="text-[11px] leading-relaxed text-gray-500">
          By submitting this form, you agree to be contacted by Olive aesthetics
          medical coordination team.
        </p>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-muted hover:shadow-md active:scale-[0.98]"
        >
          Request Consultation
          <ArrowRight size={16} />
        </button>
      </form>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="section-pad bg-cream py-8 sm:py-10 lg:py-12">
      <motion.div
        className="section-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        {/* 3-col: photo | details | form */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          {/* Left — portrait */}
          <motion.div
            variants={slideLeft}
            className="mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-none lg:col-span-3"
          >
            <div className="overflow-hidden rounded-xl shadow-soft">
              <img
                src={assets.doctor}
                alt={doctorInfo.name}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Middle — profile + highlights */}
          <motion.div variants={fadeUp} className="md:col-span-1 lg:col-span-5">
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

            {/* Capsule stats — Figma style */}
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

            {/* Highlights */}
            <div className="mt-6">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-olive-dark">
                Key Professional Highlights
              </h3>
              <motion.div
                variants={stagger}
                className="flex flex-wrap justify-center gap-2.5"
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.04,
                      y: -3,
                      boxShadow: '0 10px 24px rgba(74, 83, 60, 0.12)',
                    }}
                    transition={{ type: 'spring', stiffness: 340, damping: 20 }}
                    className="w-[calc(50%-0.3125rem)] overflow-hidden rounded-lg border border-gold/30 bg-white sm:w-[calc((100%-1.25rem)/3)]"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right — booking form */}
          <div className="md:col-span-2 lg:col-span-4">
            <ConsultationForm />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
