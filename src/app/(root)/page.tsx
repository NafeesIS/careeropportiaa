import Hero from './_components/Hero';
import JobsSection from './_components/JobsSection';
import UniversitiesSection from './_components/UniversitiesSection';
import VisitSection from './_components/VisitSection';

// export const metadata: Metadata = {
//   title: 'FairDrive: Zero-Commission Ride Platform',
//   description:
//     'FairDrive is a zero-commission ride-hailing platform where drivers keep 100% of the fare, offering transparent, affordable rides for passengers and predictable income for drivers. Experience a smarter, fairer way to ride.',
//   applicationName: 'FairDrive',
//   referrer: 'origin-when-cross-origin',
//   keywords: [
//     'ride-sharing app India',
//     'best ride-sharing platform',
//     'affordable rides India',
//     'FairDrive app download',
//     'zero-commission rides India',
//     'ride-hailing app for drivers',
//     'transparent ride fares India',
//     'book rides online India',
//     'ridesharing services Mumbai',
//     'Indian ridesharing platform',
//   ],
//   authors: [{ name: 'FairDrive Team', url: 'https://www.fairdriveindia.com' }],
//   creator: 'FairDrive',
//   publisher: 'FairDrive',
//   openGraph: {
//     title: 'FairDrive - Zero-Commission Ride-Hailing',
//     description:
//       'FairDrive is revolutionizing ride-hailing with subscription-based pricing, transparent fares, and fair income for drivers. Enjoy predictable and affordable rides with no hidden costs.',
//     url: 'https://www.fairdriveindia.com',
//     siteName: 'FairDrive',
//     images: [
//       {
//         url: `https://www.fairdriveindia.com/assets/Fairdrive_logo.png`,
//         width: 1200,
//         height: 630,
//         alt: 'FairDrive Logo',
//       },
//     ],
//     locale: 'en_IN',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@FairDrive',
//     creator: '@FairDrive',
//     title: 'FairDrive: Transparent, No-Commission Ride Platform',
//     description:
//       'Ride with FairDrive and experience zero-commission, transparent, affordable rides where drivers keep 100% of the fare. Revolutionizing the ride-hailing industry.',
//     images: [`https://www.fairdriveindia.com/assets/Fairdrive_logo.png`],
//   },
//   alternates: {
//     canonical: `https://www.fairdriveindia.com`,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     'max-image-preview': 'large',
//     'max-snippet': -1,
//     'max-video-preview': -1,
//     googleBot: 'index, follow',
//   },
// };
// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
// };
const page = () => {
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: 'FairDrive - Zero-Commission Ride-Hailing Platform',
  //   description:
  //     'FairDrive offers a zero-commission ride-hailing platform where drivers keep 100% of the fare. Enjoy transparent, affordable, and predictable rides with FairDrive.',
  //   image: `https://www.fairdriveindia.com/assets/Fairdrive_logo.png`,
  //   brand: {
  //     '@type': 'Brand',
  //     name: 'FairDrive',
  //   },
  //   keywords:
  //     'best ride-sharing app India, taxi booking app, FairDrive app, zero commission rides, affordable taxi service, ride hailing India, Uber alternative, Ola alternative, cab booking online, affordable rides, zero-commission drivers, FairDrive platform, transparent fares, book rides online, driver-friendly ridesharing, Mumbai ride services, Indian commuters',
  //   category: 'Transportation Services',
  //   applicationCategory: 'Mobile Application',
  //   audience: {
  //     '@type': 'Audience',
  //     audienceType:
  //       'Indian commuters, passengers, taxi drivers, city travelers',
  //   },
  //   provider: {
  //     '@type': 'Organization',
  //     name: 'FairDrive Technologies',
  //     url: 'https://www.fairdriveindia.com',
  //   },
  //   review: {
  //     '@type': 'Review',
  //     reviewRating: {
  //       '@type': 'Rating',
  //       ratingValue: '4.9',
  //       bestRating: '5',
  //     },
  //     author: {
  //       '@type': 'Person',
  //       name: 'Rajesh Kumar',
  //     },
  //   },
  //   aggregateRating: {
  //     '@type': 'AggregateRating',
  //     ratingValue: '4.8',
  //     reviewCount: '250',
  //   },
  //   potentialAction: {
  //     '@type': 'SearchAction',
  //     target: 'https://www.fairdriveindia.com',
  //     query: 'Book a ride on FairDrive',
  //   },
  //   mainEntityOfPage: {
  //     '@type': 'WebPage',
  //     '@id': 'https://www.fairdriveindia.com',
  //   },
  // };

  return (
    <div className=''>
      <Hero />
      <JobsSection />
      <UniversitiesSection />
      <VisitSection />
      {/* <OurTeam /> */}
    </div>
  );
};

export default page;
