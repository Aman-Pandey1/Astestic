import { motion } from 'framer-motion'
import { aboutText, doctorInfo } from '../data/content'
import { fadeUp, stagger, slideLeft, slideRight } from './Motion'

const infoRows = [
  { label: 'EDUCATION', value: doctorInfo.education },
  { label: 'PATIENT', value: '1000+' },
  { label: 'EXPERIENCE', value: '13+ Years clinical practice' },
  { label: 'LOCATION', value: doctorInfo.location },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream pb-12 pt-4 sm:pb-16">
      <motion.div
        className="section-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="gold-underline font-serif text-2xl font-semibold text-olive-dark sm:text-3xl"
        >
          About {doctorInfo.name}
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Bio text */}
          <motion.div variants={slideLeft} className="space-y-4 lg:col-span-7">
            {aboutText.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-sm leading-relaxed text-gray-600 sm:text-[15px]"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Education / info card — right side on desktop */}
          <motion.div
            variants={slideRight}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 16px 40px rgba(74, 83, 60, 0.14)',
                borderColor: 'rgba(229, 186, 115, 0.6)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-card sm:p-6"
            >
              <dl className="space-y-5">
                {infoRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.08, duration: 0.4 }}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {row.label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-olive-dark">
                      {row.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
