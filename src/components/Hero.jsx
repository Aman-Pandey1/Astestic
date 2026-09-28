import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Star,
  ParkingCircle,
  Accessibility,
  Phone,
  Languages,
  Users,
  Stethoscope,
  ShieldCheck,
  UserCheck,
  Calendar,
  ArrowRight,
} from 'lucide-react'
import { highlights, features, doctorInfo, assets } from '../data/content'
import { fadeUp, stagger, scaleIn, slideRight, slideLeft } from './Motion'

const featureIcons = {
  parking: ParkingCircle,
  accessibility: Accessibility,
  phone: Phone,
  languages: Languages,
  users: Users,
  stethoscope: Stethoscope,
  shield: ShieldCheck,
  'user-check': UserCheck,
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold text-gold" />
      ))}
    </div>
  )
}

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
      className="w-full rounded-2xl bg-white p-5 shadow-form lg:sticky lg:top-24"
    >
      <div className="mb-4 rounded-xl bg-[#F7F3EB] px-3 py-2.5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-olive/70">
          Next Open Slot
        </p>
        <p className="mt-0.5 text-xs font-medium text-olive-dark">
          {doctorInfo.hours} | {doctorInfo.addressShort}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="mb-1 block text-xs font-medium text-olive-dark">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="input-field"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-olive-dark">
            Phone Number
          </label>
          <div className="flex overflow-hidden rounded-lg border border-gray-200 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/30">
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
          <label className="mb-1 block text-xs font-medium text-olive-dark">
            Preferred Date
          </label>
          <div className="relative">
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="input-field pr-10"
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

        <button type="submit" className="btn-gold w-full text-sm font-semibold">
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
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Doctor photo */}
          <motion.div variants={slideLeft} className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <img
                src={assets.doctor}
                alt={doctorInfo.name}
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Details + offers */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="mb-2 flex items-center gap-1.5 text-sm text-olive">
              <BadgeCheck size={18} className="fill-olive text-cream" />
              <span className="font-medium">Verified Medical Practitioner</span>
            </div>

            <h1 className="font-serif text-2xl font-semibold leading-tight text-olive-dark sm:text-3xl lg:text-[2rem]">
              {doctorInfo.name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {doctorInfo.qualifications}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Stars />
              <span className="text-sm text-gray-500">
                ({doctorInfo.reviews} reviews)
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-olive-dark sm:text-sm">
              <span className="font-medium">{doctorInfo.experience}</span>
              <span className="hidden h-3 w-px bg-gray-300 sm:block" />
              <span>{doctorInfo.languages}</span>
              <span className="hidden h-3 w-px bg-gray-300 sm:block" />
              <span>{doctorInfo.patients}</span>
            </div>

            {/* Offer cards from Figma assets */}
            <div className="mt-5">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-olive-dark">
                Key Professional Highlights
              </h3>
              <motion.div
                variants={stagger}
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-3"
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      boxShadow: '0 12px 28px rgba(74, 83, 60, 0.12)',
                    }}
                    transition={{ type: 'spring', stiffness: 340, damping: 20 }}
                    className="overflow-hidden rounded-lg bg-white shadow-sm"
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

            {/* Features row */}
            <div className="mt-5 -mx-1 flex gap-2 overflow-x-auto pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0 md:grid-cols-8 md:gap-3">
              {features.map((f) => {
                const Icon = featureIcons[f.icon] || ShieldCheck
                return (
                  <motion.div
                    key={f.label}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="flex w-[72px] shrink-0 flex-col items-center gap-1.5 text-center sm:w-auto"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 transition group-hover:border-gold">
                      <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] leading-tight text-gray-600 sm:text-[10px]">
                      {f.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Form */}
          <div className="lg:col-span-4">
            <ConsultationForm />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
