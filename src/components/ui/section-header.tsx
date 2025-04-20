import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  centered = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'animate-fade-in mb-16',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2 className='mb-4 text-4xl font-bold text-primary'>{title}</h2>
      {description && (
        <p
          className={cn(
            'text-lg text-muted-foreground',
            centered && 'mx-auto max-w-2xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
