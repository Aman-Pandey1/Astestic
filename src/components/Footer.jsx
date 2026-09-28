import { motion } from 'framer-motion'
import { assets } from '../data/content'
import { fadeUp, stagger } from './Motion'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#facility' },
  { label: 'Reviews', href: '#reviews' },
]

const phone = '+91 98180 72098'
const email = 'Oliveaesthetics.in@gmail.com'
const address = 'Olive Aesthetics First Floor, DSS 227, Sector – 46 HUDA Market Gurgaon 122001'

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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <a href="#" className="inline-block">
              <img
                src={assets.brand}
                alt="Olive Aesthetics"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75">
              Trusted neighbourhood healthcare since 2012. Providing
              comprehensive primary care and speciality diagnostics with
              clinical excellence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
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

          {/* Contact Us */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>
                <span className="font-semibold text-white">Phone: </span>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="hover:text-gold"
                >
                  {phone}
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Email: </span>
                <a
                  href={`mailto:${email}`}
                  className="break-all hover:text-gold"
                >
                  {email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">Address: </span>
                <span>{address}</span>
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
