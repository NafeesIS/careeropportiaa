'use client';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
// import { University, UniversityCategory } from '@/types/university';
import React, { useState } from 'react';
import { University, UniversityCategory } from '../_types/types';
import UniversityCard from './UniversityCard';
// import UniversityCard from './UniversityCard';

interface UniversityCategorySectionProps {
  title: string;
  category: UniversityCategory;
  universities: University[];
}

const UniversityCategorySection: React.FC<UniversityCategorySectionProps> = ({
  title,
  category,
  universities,
}) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 8;

  const visibleUniversities = showAll
    ? universities
    : universities.slice(0, initialCount);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id={`category-${category.toLowerCase()}`} className='py-16'>
      <SectionHeader
        title={title}
        description={`Discover top ${category.toLowerCase()} universities in Russia`}
      />

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {visibleUniversities.map((university) => (
          <UniversityCard key={university.id} university={university} />
        ))}
      </div>

      {universities.length > initialCount && (
        <div className='mt-12 text-center'>
          <Button onClick={toggleShowAll} variant='secondary'>
            {showAll ? 'Show Less' : `See More ${category} Universities`}
          </Button>
        </div>
      )}
    </section>
  );
};

export default UniversityCategorySection;
