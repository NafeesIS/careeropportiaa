// import { University, UniversityCategory } from '../types/university';

import { University, UniversityCategory } from '../_types/types';

export const universities: University[] = [
  // Engineering Universities
  {
    id: 'eng-msu',
    name: 'Moscow State University of Engineering',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@msue.ru',
      phone: '+7 (495) 123-4567',
    },
    website: 'https://www.msue.ru',
    overview:
      "One of Russia's leading engineering universities with a strong focus on mechanical and electrical engineering.",
    rankings: {
      world: 178,
      national: 5,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-bauman',
    name: 'Bauman Moscow State Technical University',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@bmstu.ru',
      phone: '+7 (495) 322-4512',
    },
    website: 'https://www.bmstu.ru',
    overview:
      'Bauman Moscow State Technical University is one of the oldest and largest technical universities in Russia with a focus on engineering education.',
    rankings: {
      world: 281,
      national: 7,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-stankin',
    name: 'Moscow State Technological University STANKIN',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@stankin.ru',
      phone: '+7 (495) 972-9456',
    },
    website: 'https://www.stankin.ru',
    overview:
      'STANKIN is a leading technological university specializing in engineering and manufacturing technologies.',
    rankings: {
      national: 12,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-miet',
    name: 'National Research University of Electronic Technology',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@miet.ru',
      phone: '+7 (495) 585-9676',
    },
    website: 'https://www.miet.ru',
    overview:
      "Specializing in electronic technologies and semiconductors, MIET is a key university for Russia's electronic industry.",
    rankings: {
      national: 15,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-gubkin',
    name: 'Gubkin Russian State University of Oil and Gas',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@gubkin.ru',
      phone: '+7 (499) 507-8888',
    },
    website: 'https://www.gubkin.ru',
    overview:
      'Leading university in petroleum engineering and oil & gas industry technologies in Russia.',
    rankings: {
      national: 9,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-mai',
    name: 'Moscow Aviation Institute',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@mai.ru',
      phone: '+7 (499) 158-0002',
    },
    website: 'https://www.mai.ru',
    overview:
      "MAI is one of Russia's leading aerospace and aviation engineering universities.",
    rankings: {
      national: 11,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-mpei',
    name: 'Moscow Power Engineering Institute',
    major: 'Engineering',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@mpei.ru',
      phone: '+7 (495) 362-7555',
    },
    website: 'https://www.mpei.ru',
    overview:
      "MPEI is Russia's leading university in the field of power engineering and electrical technologies.",
    rankings: {
      national: 14,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-vsu',
    name: 'Voronezh State University of Engineering Technologies',
    major: 'Engineering',
    location: {
      city: 'Voronezh',
      country: 'Russia',
    },
    contact: {
      email: 'info@vsuet.ru',
      phone: '+7 (473) 255-3768',
    },
    website: 'https://www.vsuet.ru',
    overview:
      'Leading university in central Russia specializing in food and chemical engineering technologies.',
    rankings: {
      national: 35,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-polytech',
    name: 'Peter the Great St. Petersburg Polytechnic University',
    major: 'Engineering',
    location: {
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    contact: {
      email: 'info@spbstu.ru',
      phone: '+7 (812) 775-0530',
    },
    website: 'https://www.spbstu.ru',
    overview:
      "One of Russia's leading technical universities with a focus on engineering, physics and technology.",
    rankings: {
      world: 401,
      national: 8,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'eng-itmo',
    name: 'ITMO University',
    major: 'Engineering',
    location: {
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    contact: {
      email: 'info@itmo.ru',
      phone: '+7 (812) 232-9704',
    },
    website: 'https://www.itmo.ru',
    overview:
      "ITMO University is one of Russia's leading engineering and technology universities, known for its IT programs.",
    rankings: {
      world: 365,
      national: 6,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },

  // Medical Universities
  {
    id: 'med-sechenov',
    name: 'I.M. Sechenov First Moscow State Medical University',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@sechenov.ru',
      phone: '+7 (495) 609-1400',
    },
    website: 'https://www.sechenov.ru',
    overview:
      'The oldest and largest medical university in Russia, also known as Sechenov University.',
    rankings: {
      world: 651,
      national: 2,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-pirogov',
    name: 'Pirogov Russian National Research Medical University',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@rsmu.ru',
      phone: '+7 (495) 434-0329',
    },
    website: 'https://www.rsmu.ru',
    overview:
      'One of the largest medical universities in Russia with a strong focus on research and clinical training.',
    rankings: {
      national: 4,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-msumd',
    name: 'Moscow State University of Medicine and Dentistry',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@msmsu.ru',
      phone: '+7 (495) 609-6700',
    },
    website: 'https://www.msmsu.ru',
    overview:
      'Leading dental and medical university in Russia, specializing in dentistry and oral healthcare.',
    rankings: {
      national: 8,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-rmapo',
    name: 'Russian Medical Academy of Continuous Professional Education',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@rmapo.ru',
      phone: '+7 (495) 946-0209',
    },
    website: 'https://www.rmapo.ru',
    overview:
      'Specialized in postgraduate medical education and professional development for healthcare workers.',
    imageUrl:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-reaviz',
    name: 'REAVIZ Medical University',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@reaviz.ru',
      phone: '+7 (495) 123-4567',
    },
    website: 'https://www.reaviz.ru',
    overview:
      'Private medical university with innovative approaches to medical education.',
    imageUrl:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-kazgmu',
    name: 'Kazan State Medical University',
    major: 'Medical',
    location: {
      city: 'Kazan',
      country: 'Russia',
    },
    contact: {
      email: 'info@kazangmu.ru',
      phone: '+7 (843) 236-0652',
    },
    website: 'https://www.kazangmu.ru',
    overview: 'One of the oldest medical schools in Russia, founded in 1814.',
    rankings: {
      national: 12,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-spbgmu',
    name: 'First Pavlov State Medical University of St. Petersburg',
    major: 'Medical',
    location: {
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    contact: {
      email: 'info@1spbgmu.ru',
      phone: '+7 (812) 338-7172',
    },
    website: 'https://www.1spbgmu.ru',
    overview:
      'One of the oldest and most prestigious medical schools in Russia.',
    rankings: {
      national: 6,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-mcmu',
    name: 'Mendeleev Chemical Medical University',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@mcmu.ru',
      phone: '+7 (495) 978-8700',
    },
    website: 'https://www.mcmu.ru',
    overview: 'Specializes in pharmaceutical and medical chemistry education.',
    imageUrl:
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-mgppu',
    name: 'Moscow State University of Psychology & Education',
    major: 'Medical',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@mgppu.ru',
      phone: '+7 (495) 632-9981',
    },
    website: 'https://www.mgppu.ru',
    overview:
      'Leading university in psychology, mental health education and research.',
    rankings: {
      national: 45,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'med-bgmu',
    name: 'Bashkir State Medical University',
    major: 'Medical',
    location: {
      city: 'Ufa',
      country: 'Russia',
    },
    contact: {
      email: 'info@bashgmu.ru',
      phone: '+7 (347) 272-4173',
    },
    website: 'https://www.bashgmu.ru',
    overview: 'Major medical training center in the Ural region of Russia.',
    rankings: {
      national: 32,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },

  // Other Universities
  {
    id: 'other-lomonosov',
    name: 'Lomonosov Moscow State University',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@msu.ru',
      phone: '+7 (495) 939-1000',
    },
    website: 'https://www.msu.ru',
    overview:
      "Russia's oldest and most prestigious university, offering comprehensive programs across sciences, humanities and arts.",
    rankings: {
      world: 78,
      national: 1,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-spbu',
    name: 'Saint Petersburg State University',
    major: 'Other',
    location: {
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    contact: {
      email: 'info@spbu.ru',
      phone: '+7 (812) 328-2000',
    },
    website: 'https://www.spbu.ru',
    overview:
      "One of Russia's oldest universities with a strong focus on liberal arts and natural sciences.",
    rankings: {
      world: 225,
      national: 3,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-hse',
    name: 'Higher School of Economics',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@hse.ru',
      phone: '+7 (495) 771-3232',
    },
    website: 'https://www.hse.ru',
    overview:
      'Leading research university focusing on economics, social sciences, humanities and computer science.',
    rankings: {
      world: 301,
      national: 4,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-mgimo',
    name: 'MGIMO University',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@mgimo.ru',
      phone: '+7 (495) 434-0033',
    },
    website: 'https://www.mgimo.ru',
    overview:
      "Russia's most prestigious institution for diplomatic, international relations and political science education.",
    rankings: {
      world: 348,
      national: 7,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-ranepa',
    name: 'Russian Presidential Academy of National Economy and Public Administration',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@ranepa.ru',
      phone: '+7 (499) 956-9999',
    },
    website: 'https://www.ranepa.ru',
    overview:
      "Russia's leading university in public administration, government service, and business education.",
    rankings: {
      national: 10,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-plekhanov',
    name: 'Plekhanov Russian University of Economics',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@rea.ru',
      phone: '+7 (495) 958-2829',
    },
    website: 'https://www.rea.ru',
    overview:
      "Russia's oldest and largest economic university with strong business and management programs.",
    rankings: {
      national: 9,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-rudn',
    name: "Peoples' Friendship University of Russia",
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@rudn.ru',
      phone: '+7 (495) 434-5300',
    },
    website: 'https://www.rudn.ru',
    overview:
      "One of Russia's most international universities with a diverse student body from over 150 countries.",
    rankings: {
      world: 392,
      national: 5,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-rggu',
    name: 'Russian State University for the Humanities',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@rggu.ru',
      phone: '+7 (495) 250-6118',
    },
    website: 'https://www.rggu.ru',
    overview:
      'Leading university in humanities, history, philosophy and cultural studies.',
    rankings: {
      national: 25,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-mipt',
    name: 'Moscow Institute of Physics and Technology',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@mipt.ru',
      phone: '+7 (495) 408-4566',
    },
    website: 'https://www.mipt.ru',
    overview:
      'Elite research university known for advanced scientific training in physics and mathematics.',
    rankings: {
      world: 201,
      national: 2,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other-mgu',
    name: 'Moscow State Linguistic University',
    major: 'Other',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    contact: {
      email: 'info@linguanet.ru',
      phone: '+7 (499) 245-1122',
    },
    website: 'https://www.linguanet.ru',
    overview:
      "Russia's main institution for foreign language education and linguistics research.",
    rankings: {
      national: 30,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

// Generate additional mock data to reach at least 100 universities
const generateAdditionalUniversities = (): University[] => {
  const locations = [
    'Moscow',
    'Saint Petersburg',
    'Kazan',
    'Novosibirsk',
    'Yekaterinburg',
    'Rostov-on-Don',
  ];
  const majors: Array<'Engineering' | 'Medical' | 'Other'> = [
    'Engineering',
    'Medical',
    'Other',
  ];
  const additionalUniversities: University[] = [];

  // We already have 30 universities defined above, so we'll generate at least 70 more
  for (let i = 1; i <= 75; i++) {
    const major = majors[i % 3] as 'Engineering' | 'Medical' | 'Other';
    const location = locations[i % locations.length];
    const id = `${major.toLowerCase()}-extra-${i}`;

    additionalUniversities.push({
      id,
      name: `${location} University of ${major} ${i}`,
      major,
      location: {
        city: location,
        country: 'Russia',
      },
      contact: {
        email: `info@${id}.ru`,
        phone: `+7 (495) ${100 + i}-${1000 + i}`,
      },
      website: `https://www.${id}.ru`,
      overview: `A well-established institution specializing in ${major.toLowerCase()} education and research in ${location}.`,
      rankings:
        i % 10 === 0
          ? { world: 500 + i, national: 30 + (i % 20) }
          : { national: 30 + (i % 20) },
      imageUrl: `https://images.unsplash.com/photo-${1460000000000 + i * 10000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`,
    });
  }

  return additionalUniversities;
};

export const allUniversities: University[] = [
  ...universities,
  ...generateAdditionalUniversities(),
];

export const getUniversityById = (id: string): University | undefined => {
  return allUniversities.find((university) => university.id === id);
};

export const getUniversitiesByCategory = (
  category: UniversityCategory
): University[] => {
  return allUniversities.filter((university) => university.major === category);
};
