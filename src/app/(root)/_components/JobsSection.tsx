import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
// import { SectionHeader } from '@/components/ui/section-header';
import { Briefcase, Building, Globe, GraduationCap } from 'lucide-react';

const jobCategories = [
  {
    title: 'IT & Technology',
    icon: <Globe className='h-12 w-12 text-primary' />,
    description:
      "Software development, cybersecurity, data science, and IT infrastructure positions in Russia's growing tech sector.",
  },
  {
    title: 'Engineering',
    icon: <Building className='h-12 w-12 text-primary' />,
    description:
      'Opportunities in mechanical, civil, electrical, and petroleum engineering across Russian industrial sectors.',
  },
  {
    title: 'Education',
    icon: <GraduationCap className='h-12 w-12 text-primary' />,
    description:
      'Teaching positions at universities, language schools, and international educational institutions.',
  },
  {
    title: 'Business & Finance',
    icon: <Briefcase className='h-12 w-12 text-primary' />,
    description:
      'Roles in banking, consulting, management, and international business relations with Russian companies.',
  },
];

const JobsSection = () => {
  return (
    <section id='jobs' className='py-20'>
      <div className='container mx-auto px-4'>
        <SectionHeader
          title='Job Opportunities in Russia'
          description="Explore diverse career paths in one of the world's largest economies, with opportunities spanning various industries and specializations."
        />

        <div className='mb-12 grid grid-cols-1 gap-8 md:grid-cols-2'>
          {jobCategories.map((category, index) => (
            <Card
              key={index}
              className='animate-scale-in border-l-4 border-l-primary transition-shadow duration-300 hover:shadow-md'
            >
              <CardHeader className='flex flex-row items-center gap-4'>
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='rounded-lg bg-secondary/10 p-8'>
          <div className='mb-8 text-center'>
            <h3 className='mb-2 text-2xl font-bold text-primary'>
              Looking for Jobs in Russia?
            </h3>
            <p className='text-muted-foreground'>
              Many Russian companies are seeking international talent across
              various industries. Whether you are a recent graduate or an
              experienced professional, explore the opportunities available.
            </p>
          </div>

          <div className='flex justify-center gap-4'>
            <Button variant='secondary' className='text-white'>
              Browse Job Listings
            </Button>
            <Button variant='outline'>Submit Your Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
