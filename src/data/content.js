/** Encode paths that contain spaces / special chars */
const a = (path) => encodeURI(path)

export const assets = {
  brand: a('/assets/brand.png'),
  doctor: a('/assets/main-image.png'),
  clinic: a('/assets/Rectangle.png'),
}

export const highlights = [
  {
    id: 1,
    image: a('/assets/Property 1=Frame 7.png'),
    alt: 'Refer a friend and get 50% off on all services',
  },
  {
    id: 2,
    image: a('/assets/Property 1=Frame 5.png'),
    alt: 'Underarm lightening treatment buy 2 get 2',
  },
  {
    id: 3,
    image: a('/assets/Property 1=Default (1).png'),
    alt: 'Full body LHR 8 sessions at 39999/-',
  },
  {
    id: 4,
    image: a('/assets/Property 1=Default (4).png'),
    alt: 'Buy 4 sessions of GFC and get 4 sessions of hair peptide',
  },
  {
    id: 5,
    image: a('/assets/Property 1=Frame 6.png'),
    alt: 'Botox 300/unit',
  },
  {
    id: 6,
    image: a('/assets/Property 1=Default.png'),
    alt: 'Flat 30% on Hair transplant',
  },
]

export const features = [
  { label: 'Easy Parking', icon: 'parking' },
  { label: 'Wheelchair Accessible', icon: 'accessibility' },
  { label: 'Doctor on Call', icon: 'phone' },
  { label: 'Doctor speaks Hindi/English', icon: 'languages' },
  { label: 'Couple Friendly Rooms', icon: 'users' },
  { label: 'Dedicated Medical Team', icon: 'stethoscope' },
  { label: 'Clean/Sterilized Environment', icon: 'shield' },
  { label: 'Doctor-led Consultation', icon: 'user-check' },
]

export const services = [
  {
    id: 1,
    title: 'LASER HAIR REDUCTION',
    description:
      'Advanced laser technology safely reduces unwanted hair from the root, giving you smoother, hair-free skin with long-lasting results and minimal discomfort.',
    image: a('/assets/Laser Hair Reduction.png'),
  },
  {
    id: 2,
    title: 'HYDRAFACIAL',
    description:
      'A multi-step facial that deeply cleanses, exfoliates, and hydrates the skin, leaving it instantly refreshed, glowing and revitalized with no downtime.',
    image: a('/assets/icon-wrap.png'),
  },
  {
    id: 3,
    title: 'MEDIFACIALS',
    description:
      'Medical-grade facials customized to your skin type, targeting concerns like dullness, acne, and dehydration while promoting long-term skin health.',
    image: a('/assets/icon-wrap (3).png'),
  },
  {
    id: 4,
    title: 'HIFU (HIGH-INTENSITY FOCUSED ULTRASOUND)',
    description:
      'Non-invasive lifting and tightening treatment for firmer, youthful skin.',
    image: a('/assets/HIFU (High-Intensity Focused Ultrasound).png'),
  },
  {
    id: 5,
    title: 'HYPERPIGMENTATION TREATMENT',
    description:
      'Target dark spots, uneven tone, and pigmentation with advanced treatments designed to brighten skin and restore a clearer, more even complexion.',
    image: a('/assets/Hyperpigmentation Treatment.png'),
  },
  {
    id: 6,
    title: 'ANTI-AGEING SOLUTIONS',
    description:
      'Clinically proven anti-ageing treatments that reduce fine lines, wrinkles, and skin laxity, helping you achieve a youthful and naturally refreshed look.',
    image: a('/assets/icon-wrap (2).png'),
  },
  {
    id: 7,
    title: 'MICRONEEDLING',
    description:
      'A collagen-boosting procedure that improves skin texture, reduces scars, and enhances overall skin quality for smoother and firmer skin.',
    image: a('/assets/Microneedling.png'),
  },
  {
    id: 8,
    title: 'BOTULINUM TOXIN (BOTOX)',
    description:
      'Non-surgical injectable treatment that relaxes facial muscles to smooth fine lines and wrinkles, giving you a youthful and refreshed appearance.',
    image: a('/assets/icon-wrap (1).png'),
  },
  {
    id: 9,
    title: 'DERMAL FILLERS',
    description:
      'Restore lost volume, enhance facial contours, and achieve a natural youthful look with safe and effective dermal filler treatments.',
    image: a('/assets/icon-wrap (4).png'),
  },
  {
    id: 10,
    title: 'THREAD LIFT',
    description:
      'A minimally invasive procedure that lifts and tightens sagging skin, providing a firmer and more youthful appearance without surgery.',
    image: a('/assets/icon-wrap (3).png'),
  },
  {
    id: 11,
    title: 'CHEMICAL PEELS',
    description:
      'Exfoliating skin treatments that remove dead skin cells, improve skin texture, and promote a clearer, brighter complexion.',
    image: a('/assets/Chemical Peels.png'),
  },
]

export const reviews = [
  {
    id: 1,
    quote:
      '"Dr. Pooja gave me a clear treatment plan and explained every step. My skin looks healthier and more even within weeks."',
    image: a('/assets/Rectangle 1.png'),
  },
  {
    id: 2,
    quote:
      '"Had a video consult and personal follow-up. The clinic team is attentive and the results exceeded my expectations."',
    image: a('/assets/Group 1.png'),
  },
  {
    id: 3,
    quote:
      '"Excellent diagnosis and minimal wait times. Professional care with natural-looking aesthetic results."',
    image: a('/assets/Group 2.png'),
  },
]

export const aboutText = [
  `Dr. (Maj) Pooja Yadav is a trusted aesthetic physician with over 13 years of clinical experience. With an MBBS and a Fellowship in Aesthetic Medicine from Germany, she brings a unique blend of medical precision and aesthetic artistry to every consultation.`,
  `Her practice focuses on advanced skin treatments, lasers, injectables, and non-surgical rejuvenation. At Olive Aesthetics, she offers technologies including Diode Laser, PICO Laser, Microdermabrasion, HIFU, and Hydrafacial — all delivered with a doctor-led, patient-first approach.`,
  `Having served as a Major in the Indian Armed Forces Medical Corps, Dr. Pooja combines military discipline with compassionate care. Her philosophy is simple: natural results, safety first, and treatments tailored to each individual's skin and lifestyle.`,
]

export const doctorInfo = {
  name: 'Dr. (Maj) Pooja Yadav',
  qualifications: 'MBBS , Fellowship in Aesthetic Medicine (germany)',
  reviews: 232,
  experience: '13+ Years Experience',
  languages: 'English, Hindi',
  patients: '1000+ Patient',
  education: 'MBBS , Fellowship in Aesthetic Medicine (germany)',
  location:
    'Olive Aesthetics First Floor, DSS 327, Sector - 46, HUDA Market Gurgaon 122001',
  phone: '+91 93180 72088',
  email: 'oliveaesthetics.in@gmail.com',
  hours: '10:00AM-07:00PM',
  addressShort: 'Sector - 46, HUDA Market Gurgaon 122001',
}
