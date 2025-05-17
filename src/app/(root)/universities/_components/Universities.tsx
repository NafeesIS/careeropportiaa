// import UniversityCategorySection from '@/components/UniversityCategorySection';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getUniversitiesByCategory } from '../_data/data';
import UniversityCategorySection from './UniversityCategorySection';
// import { getUniversitiesByCategory } from '@/data/universities';

const Universities = () => {
  const engineeringUniversities = getUniversitiesByCategory('Engineering');
  const medicalUniversities = getUniversitiesByCategory('Medical');
  const otherUniversities = getUniversitiesByCategory('Other');

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow'>
        <div className='container mx-auto px-4 py-8'>
          <div className='mb-8'>
            <h1 className='mb-4 text-center text-4xl font-bold'>
              Russian Universities
            </h1>
            <p className='mx-auto max-w-3xl text-center text-lg text-muted-foreground'>
              Explore world-class education opportunities at Russias top
              universities, categorized by specialization.
            </p>
          </div>

          {/* Quick navigation */}
          <ScrollArea className='mb-12 rounded-lg bg-muted/20 p-4'>
            <div className='flex items-center justify-center gap-8'>
              <a
                href='#category-engineering'
                className='font-medium text-primary hover:underline'
              >
                Engineering
              </a>
              <a
                href='#category-medical'
                className='font-medium text-primary hover:underline'
              >
                Medical
              </a>
              <a
                href='#category-other'
                className='font-medium text-primary hover:underline'
              >
                Other Specializations
              </a>
            </div>
          </ScrollArea>

          <UniversityCategorySection
            title='Engineering Universities'
            category='Engineering'
            universities={engineeringUniversities}
          />

          <UniversityCategorySection
            title='Medical Universities'
            category='Medical'
            universities={medicalUniversities}
          />

          <UniversityCategorySection
            title='Other Universities'
            category='Other'
            universities={otherUniversities}
          />
        </div>
      </main>
    </div>
  );
};

export default Universities;
