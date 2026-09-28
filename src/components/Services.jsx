import { motion } from 'framer-motion'
import { services } from '../data/content'
import { fadeUp, stagger, scaleIn } from './Motion'

export default function Services() {
  return (
    <section id="services" className="section-pad bg-cream-warm py-12 sm:py-16">
      <motion.div
        className="section-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="gold-underline font-serif text-2xl font-semibold uppercase tracking-wide text-olive-dark sm:text-3xl"
        >
          Services
        </motion.h2>

        <motion.div
          variants={stagger}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={scaleIn}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 16px 40px rgba(74, 83, 60, 0.14)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="aspect-[2/1] w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-olive-dark transition group-hover:text-olive sm:text-[15px]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
