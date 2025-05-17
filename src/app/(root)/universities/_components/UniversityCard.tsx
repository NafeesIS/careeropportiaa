import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { University } from '../_types/types';

interface UniversityCardProps {
  university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  return (
    <Card className='overflow-hidden transition-all hover:shadow-lg'>
      <div className='h-48 overflow-hidden'>
        <Image
          src={
            university.imageUrl ||
            'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
          }
          alt={university.name}
          width={400}
          height={400}
          className='h-full w-full object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>
      <CardHeader className='pb-2'>
        <CardTitle className='line-clamp-2 h-14'>{university.name}</CardTitle>
        <CardDescription>
          {university.location.city}, {university.location.country}
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-2'>
        <p className='mb-2 line-clamp-3 h-14 text-sm text-muted-foreground'>
          {university.overview}
        </p>
        {university.rankings && (
          <div className='mt-1 flex flex-wrap gap-2'>
            {university.rankings.national && (
              <span className='rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800'>
                National Rank: #{university.rankings.national}
              </span>
            )}
            {university.rankings.world && (
              <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-800'>
                World Rank: #{university.rankings.world}
              </span>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant='outline' className='w-full' asChild>
          <Link href={`/universities/${university.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UniversityCard;
