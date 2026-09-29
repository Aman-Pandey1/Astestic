import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const dotX = useSpring(mouseX, { damping: 28, stiffness: 450, mass: 0.35 })
  const dotY = useSpring(mouseY, { damping: 28, stiffness: 450, mass: 0.35 })
  const ringX = useSpring(mouseX, { damping: 32, stiffness: 160, mass: 0.55 })
  const ringY = useSpring(mouseY, { damping: 32, stiffness: 160, mass: 0.55 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    setEnabled(true)
    document.documentElement.classList.add('has-custom-cursor')

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const leave = () => setVisible(false)

    const over = (e) => {
      const t = e.target
      if (!(t instanceof Element)) return
      setHovering(
        !!t.closest(
          'a, button, input, textarea, select, label, [role="button"]',
        ),
      )
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [mouseX, mouseY])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}
    >
      <motion.div
        className="absolute left-0 top-0"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            width: hovering ? 40 : 26,
            height: hovering ? 40 : 26,
            opacity: hovering ? 0.28 : 0.18,
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-olive"
        />
      </motion.div>

      <motion.div
        className="absolute left-0 top-0"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          animate={{
            scale: hovering ? 1.75 : 1,
            backgroundColor: hovering ? '#E5BA73' : '#4A533C',
          }}
          transition={{ type: 'spring', stiffness: 420, damping: 20 }}
          className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_8px_rgba(74,83,60,0.35)]"
        />
      </motion.div>
    </div>
  )
}
