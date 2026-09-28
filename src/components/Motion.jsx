export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55 } },
}

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 16px 40px rgba(74, 83, 60, 0.14)',
    transition: { type: 'spring', stiffness: 320, damping: 22 },
  },
}
