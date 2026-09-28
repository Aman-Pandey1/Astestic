import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { reviews } from '../data/content'
import { fadeUp, stagger, scaleIn } from './Motion'

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad bg-cream pb-16 pt-4 sm:pb-20">
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
          Patient Reviews
        </motion.h2>

        <motion.div
          variants={stagger}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.article
              key={review.id}
              variants={scaleIn}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 16px 40px rgba(74, 83, 60, 0.14)',
              }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-card"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="mt-3 flex-1 text-sm italic leading-relaxed text-gray-600">
                {review.quote}
              </p>

              <div className="mt-4 overflow-hidden rounded-xl">
                <img
                  src={review.image}
                  alt="Patient result"
                  className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
