import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { Calendar, FileText, Info, MapPin } from 'lucide-react';

const steps = [
  {
    title: 'Visa Requirements',
    icon: <FileText className='h-10 w-10 text-secondary' />,
    description:
      'Learn about the necessary documentation, visa types, and application procedures for visiting Russia.',
  },
  {
    title: 'Best Time to Visit',
    icon: <Calendar className='h-10 w-10 text-secondary' />,
    description:
      'Discover the ideal seasons to visit different regions of Russia based on climate and cultural events.',
  },
  {
    title: 'Popular Destinations',
    icon: <MapPin className='h-10 w-10 text-secondary' />,
    description:
      "Explore Russia's incredible cities, natural wonders, and historic sites worth adding to your itinerary.",
  },
  {
    title: 'Travel Tips',
    icon: <Info className='h-10 w-10 text-secondary' />,
    description:
      'Get practical advice on transportation, accommodation, language, currency, and cultural etiquette.',
  },
];

const VisitSection = () => {
  return (
    <section
      id='visit'
      className='bg-gradient-to-b from-white to-gray-50 py-20'
    >
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='How to Visit Russia'
          description="Planning a trip to Russia? Whether for education, career opportunities, or tourism, here's what you need to know."
        />

        <div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => (
            <Card
              key={index}
              className='animate-scale-in flex h-full flex-col transition-shadow duration-300 hover:shadow-md'
            >
              <CardHeader className='pb-2 text-center'>
                <div className='mx-auto mb-4'>{step.icon}</div>
                <CardTitle className='text-xl'>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className='flex-grow text-center'>
                <p className='text-muted-foreground'>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='rounded-lg bg-primary/5 p-8 text-center'>
          <div className='mx-auto max-w-3xl'>
            <h3 className='mb-4 text-2xl font-bold text-primary'>
              Ready to Experience Russia?
            </h3>
            <p className='mb-6 text-muted-foreground'>
              From the historic streets of Moscow and St. Petersburg to the
              natural beauty of Lake Baikal and the Caucasus Mountains, Russia
              offers really unforgettable experiences for every visitor.
            </p>
            <Button variant='default' className='mx-auto'>
              Travel Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
