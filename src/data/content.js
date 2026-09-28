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
]

export const features = [
  {
    label: 'Free Parking',
    image: '/assets/Rectangle%207.png',
  },
  {
    label: 'Wheelchair Accessible',
    image: '/assets/Rectangle%208.png',
  },
  {
    label: 'Comfortable Waiting Area',
    image: '/assets/Rectangle%209.png',
  },
  {
    label: 'Clean & Hygienic Washrooms',
    image: '/assets/Rectangle%2010.png',
  },
  {
    label: 'Private Consultation Rooms',
    image: '/assets/Rectangle%2011.png',
  },
  {
    label: 'Dedicated Support Staff',
    image: '/assets/Rectangle%2012.png',
  },
  {
    label: 'Complimentary Tea & Coffee',
    image: '/assets/Rectangle%2013.png',
  },
  {
    label: 'Convenient Connectivity',
    image: '/assets/Rectangle%2014.png',
  },
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
      'A multi-step facial that deeply cleanses, exfoliates, and hydrates the skin, leaving it instantly refreshed, glowing, and revitalized with no downtime.',
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
      'Exfoliating skin treatments that remove dead skin cells, improve texture, and reveal brighter, smoother, and clearer skin.',
    image: a('/assets/Chemical Peels.png'),
  },
]

export const reviews = [
  {
    id: 1,
    quote:
      'Dr. Pooja took the time to explain every aspect of my condition. I finally feel like I have a clear treatment plan.',
    image: a('/assets/Rectangle 1.png'),
    stars: 5,
  },
  {
    id: 2,
    quote:
      'Very thorough and professional. The video consult was seamless and she followed up personally.',
    image: a('/assets/Group 1.png'),
    stars: 5,
  },
  {
    id: 3,
    quote:
      'Excellent diagnosis. Wait time was a bit long but the consultation itself was worth it.',
    image: a('/assets/Group 2.png'),
    stars: 4,
  },
]

export const aboutText = [
  `Dr. (Maj) Pooja Yadav specializes in advanced skin treatments, lasers, and injectables using FDA-approved technologies. At Olive Aesthetics, every consultation is doctor-led with a focus on natural, lasting results tailored to your skin and lifestyle.`,
  `Her clinical expertise spans HydraFacial, Diode & PICO lasers, HIFU, microneedling, chemical peels, Botox, fillers, and anti-ageing protocols — delivered with medical precision and aesthetic artistry.`,
  `With over 12 years of clinical practice and a Fellowship in Aesthetic Medicine from Germany, she brings disciplined military-medical training and compassionate care to every patient journey.`,
]

export const doctorInfo = {
  name: 'Dr. (Maj) Pooja Yadav',
  qualifications: 'MBBS , Fellowship in Aesthetic Medicine (germany)',
  rating: 4.8,
  reviews: 312,
  experience: '12+ Years Experience',
  languages: 'English, Hindi',
  patients: '1000+ Patients',
  education: 'MBBS , Fellowship in Aesthetic Medicine (germany)',
  location:
    'Olive Aesthetics First Floor, DSS 227, Sector - 46 HUDA Market Gurgaon 122001',
  phone: '+91 98180 72098',
  email: 'Oliveaesthetics.in@gmail.com',
  hours: '10:00AM-07:00PM',
  addressShort: 'Sector – 46, HUDA Market Gurgaon 122001',
}
