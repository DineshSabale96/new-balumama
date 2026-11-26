// Editable content. Stats are placeholders: replace with your real numbers.
export const stats = [
  { value: 10, suffix: '+', label: 'Professional Machinery' },
  { value: 15, suffix: '+', label: 'Experienced Operators' },
  { value: 100, suffix: '%', label: 'Reliable Services' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
];

export const machinery = [
  {
    id: 'poclain-220',
    name: 'Poclain 220 Excavator',
    image: '/images/poclain-220.jpg',
    alt: 'Poclain 220 excavator working at a construction site',
    description:
      'A versatile mid-size excavator for trenching, foundation digging, site preparation and loading tipper trucks.',
    specs: [
      ['Operating weight', '~22 t'],
      ['Bucket capacity', '0.8 – 1.2 m³'],
      ['Max digging depth', '~6.5 m'],
    ],
  },
  {
    id: 'poclain-380',
    name: 'Poclain 380 Excavator',
    image: '/images/poclain-380.jpg',
    alt: 'Poclain 380 heavy excavator on an earthmoving job',
    description:
      'Heavy-duty excavation for large earthmoving volumes, deep trenches and bulk material handling.',
    specs: [
      ['Operating weight', '~38 t'],
      ['Bucket capacity', '1.6 – 2.2 m³'],
      ['Max digging depth', '~8 m'],
    ],
  },
  {
    id: 'hydraulic-breaker',
    name: 'Excavator with Hydraulic Breaker',
    image: '/images/hydraulic-breaker.jpg',
    alt: 'Excavator fitted with a hydraulic breaker breaking rock',
    description:
      'Rock and concrete breaking with a hydraulic hammer attachment for hard strata and demolition-type work.',
    specs: [
      ['Breaker class', 'Hydraulic hammer'],
      ['Application', 'Rock & concrete'],
      ['Carrier', 'Poclain / JCB'],
    ],
  },
  {
    id: 'earthmoving',
    name: 'Heavy Earthmoving Machinery',
    image: '/images/earthmoving.jpg',
    alt: 'Heavy earthmoving machinery levelling land',
    description:
      'Complete earthmoving fleet for land development, levelling, cutting and filling on large sites.',
    specs: [
      ['Fleet', 'Excavators & loaders'],
      ['Work', 'Levelling, cutting, filling'],
      ['Operators', 'Included'],
    ],
  },
];

export const services = [
  { title: 'Well Digging', text: 'Bore and open wells with precision digging and safe depth control.', icon: 'Droplets' },
  { title: 'Excavation Work', text: 'Foundation, trench and basement excavation for residential and commercial sites.', icon: 'Shovel' },
  { title: 'Deep Well Excavation', text: 'Deep digging operations carried out with experienced operators.', icon: 'ArrowDownToLine' },
  { title: 'Rock Breaking', text: 'Hydraulic breaker work for rock, concrete and hard strata.', icon: 'Hammer' },
  { title: 'Land Development', text: 'Levelling, clearing and shaping land for construction and farming.', icon: 'Mountain' },
  { title: 'Construction Site Excavation', text: 'Site clearing, cut-and-fill and utility trenching.', icon: 'HardHat' },
  { title: 'Earthmoving Work', text: 'Bulk earthmoving with excavators and loaders for large projects.', icon: 'Truck' },
  { title: 'Heavy Machinery Rental', text: 'Poclain and excavator rental with or without operators.', icon: 'Settings2' },
];

export const specialService = {
  title: 'Well Digging Without Ramp',
  range: '35 to 50 Feet',
  text: 'Our specialised well digging setup reaches 35 to 50 feet deep without needing a ramp, so your site stays clear and the work moves faster.',
  image: '/images/well-no-ramp.jpg',
  alt: 'Excavator digging a deep well without a ramp',
  points: ['No ramp required', 'Depth range 35 – 50 ft', 'Experienced operators', 'Safe, controlled digging'],
};

export const features = [
  { title: 'Experienced Machine Operators', text: 'Skilled operators who know Poclain and excavator work inside out.', icon: 'UserCheck' },
  { title: 'Reliable Heavy Machinery', text: 'Well-maintained machines that keep your project moving.', icon: 'ShieldCheck' },
  { title: 'Professional Service', text: 'Clear communication, planned work and respect for your site.', icon: 'BadgeCheck' },
  { title: 'Timely Project Completion', text: 'We plan around your schedule and commit to realistic timelines.', icon: 'Clock' },
  { title: 'Affordable Pricing', text: 'Transparent quotes with no hidden charges.', icon: 'IndianRupee' },
  { title: 'Customer Satisfaction', text: 'Our goal is a finished job you can be proud of.', icon: 'ThumbsUp' },
];

export const gallery = [
  { src: '/images/gallery-1.jpg', alt: 'Poclain machine at work', label: 'Poclain Machines' },
  { src: '/images/gallery-2.jpg', alt: 'Excavation work on a construction site', label: 'Excavation Work' },
  { src: '/images/gallery-3.jpg', alt: 'Well digging project in progress', label: 'Well Digging' },
  { src: '/images/gallery-4.jpg', alt: 'Hydraulic breaker breaking rock', label: 'Hydraulic Breaker Work' },
  { src: '/images/gallery-5.jpg', alt: 'Construction site with heavy machinery', label: 'Construction Sites' },
  { src: '/images/gallery-6.jpg', alt: 'Earthmoving operation on land', label: 'Earthmoving Operations' },
];

export const steps = [
  { no: '01', title: 'Contact Us', text: 'Call or WhatsApp us with your project requirements.' },
  { no: '02', title: 'Confirm Your Machinery', text: 'Select the required Poclain or excavation equipment.' },
  { no: '03', title: 'Start Your Project', text: 'Get machinery and professional service at your project location.' },
];

export const serviceOptions = [
  'Well Digging',
  'Excavation Work',
  'Deep Well Excavation',
  'Rock Breaking',
  'Land Development',
  'Earthmoving Work',
  'Machinery Rental (with operator)',
  'Machinery Rental (without operator)',
  'Other',
];
