import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import Image from 'next/image';

const universities = [
  {
    name: 'Moscow State University',
    location: 'Moscow',
    description:
      "Russia's oldest and most prestigious university, offering world-class programs in sciences and humanities.",
    image:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Saint Petersburg State University',
    location: 'Saint Petersburg',
    description:
      "One of Russia's oldest universities known for research excellence and notable alumni.",
    image:
      'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Novosibirsk State University',
    location: 'Novosibirsk',
    description:
      'Leading research university in Siberia with strong STEM programs and international collaborations.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const UniversitiesSection = () => {
  return (
    <section id='universities' className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='Russian Universities'
          description="Discover world-class education opportunities at Russia's top universities, offering programs in various disciplines with global recognition."
        />

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {universities.map((university, index) => (
            <Card
              key={index}
              className='animate-scale-in overflow-hidden transition-shadow duration-300 hover:shadow-lg'
            >
              <div className='h-48 overflow-hidden'>
                <Image
                  src={university.image}
                  alt={university.name}
                  className='h-full w-full object-cover transition-transform duration-500 hover:scale-110'
                />
              </div>
              <CardHeader>
                <CardTitle>{university.name}</CardTitle>
                <CardDescription>{university.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='mb-4'>{university.description}</p>
                <Button variant='outline' className='w-full'>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button variant='secondary' className='text-white'>
            View All Universities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
