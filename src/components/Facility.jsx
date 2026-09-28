import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { assets } from '../data/content'
import { fadeUp, stagger, slideLeft, slideRight } from './Motion'

export default function Facility() {
  return (
    <section id="facility" className="section-pad bg-cream py-12 sm:py-16">
      <motion.div
        className="section-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="gold-underline font-serif text-2xl font-semibold uppercase tracking-wide text-olive-dark sm:text-3xl"
        >
          Clinic Locations
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-3 font-serif text-lg text-olive-dark/90 sm:text-xl"
        >
          Affiliated Medical Facility
        </motion.p>

        <motion.div
          variants={fadeUp}
          whileHover={{
            y: -4,
            boxShadow: '0 20px 50px rgba(74, 83, 60, 0.12)',
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          className="mt-8 overflow-hidden rounded-3xl bg-white shadow-soft"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <motion.div
              variants={slideLeft}
              className="md:w-1/2 lg:w-[48%]"
            >
              <img
                src={assets.clinic}
                alt="Olive Aesthetics Clinic"
                className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-[320px]"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={slideRight}
              className="flex flex-col justify-center p-6 sm:p-8 md:w-1/2 lg:w-[52%] lg:p-10"
            >
              <h3 className="font-serif text-xl font-semibold text-olive-dark sm:text-2xl">
                Olive Aesthetics
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                Olive Aesthetics is a premier aesthetic, skin, and hair clinic
                in Gurgaon, offering advanced treatments under the expert care of
                Dr. (Maj) Pooja Yadav. From laser hair reduction and HydraFacial
                to injectables, HIFU, and anti-ageing solutions — every treatment
                is doctor-led and tailored to your unique needs.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                Located at Sector-46 HUDA Market, our clinic provides a clean,
                sterilized environment with wheelchair access, easy parking, and
                a dedicated medical team committed to natural, lasting results.
              </p>
              <a
                href="#about"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition hover:gap-2.5 hover:text-gold-muted"
              >
                View Hospital Profile
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
