import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { doctorInfo, assets } from '../data/content'
import { fadeUp, stagger } from './Motion'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#facility' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Footer() {
  return (
    <footer className="bg-olive-deep text-cream">
      <motion.div
        className="section-wrap section-pad py-12 sm:py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div variants={fadeUp}>
            <a href="#" className="inline-block">
              <img
                src={assets.brand}
                alt="Olive Aesthetics"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
              Trusted neighborhood healthcare since 2012. Providing
              comprehensive aesthetic and primary care with excellence and
              compassion.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-cream/80">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`tel:${doctorInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-gold"
                >
                  {doctorInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/80">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${doctorInfo.email}`}
                  className="break-all hover:text-gold"
                >
                  {doctorInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream/80">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{doctorInfo.location}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-cream/50"
        >
          © {new Date().getFullYear()} Olive Aesthetics. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  )
}
