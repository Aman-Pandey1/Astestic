import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { assets } from '../data/content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#facility' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    setOpen(false)

    // Wait for menu close + body unlock, then scroll
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (!el) return
        const headerOffset = 72
        const top =
          el.getBoundingClientRect().top + window.scrollY - headerOffset
        window.scrollTo({ top, behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }, 280)
    })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-olive shadow-md"
    >
      <div className="section-wrap section-pad flex h-16 items-center justify-between lg:h-[72px]">
        <a
          href="#"
          className="flex shrink-0 items-center"
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img
            src={assets.brand}
            alt="Olive Aesthetics"
            className="h-8 w-auto max-w-[160px] object-contain sm:h-10 sm:max-w-none lg:h-11"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.href)
              }}
              className="text-sm font-medium text-white/90 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#consult"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#consult')
          }}
          className="btn-gold hidden text-sm md:inline-flex"
        >
          Book Appointment
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <nav className="section-pad flex flex-col gap-1 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 active:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#consult"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('#consult')
                }}
                className="btn-gold mt-2 text-center text-sm"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
