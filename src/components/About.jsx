import { motion } from 'framer-motion'
import { aboutText, doctorInfo } from '../data/content'
import { fadeUp, stagger } from './Motion'

const infoRows = [
  { label: 'EDUCATION', value: doctorInfo.education },
  { label: 'PATIENT', value: '1000+' },
  { label: 'EXPERIENCE', value: '12+ Years clinical practice' },
  { label: 'LOCATION', value: doctorInfo.location },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream pb-12 pt-6 sm:pb-16 sm:pt-8">
      <motion.div
        className="section-wrap max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={stagger}
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
    </section>
  )
}
