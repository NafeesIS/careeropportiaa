import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <div className='flex w-full flex-col gap-8 md:gap-12'>
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-full' />
        </div>
      </div>
      {/* <Separator /> */}
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-full' />
        </div>
      </div>
      {/* <Separator /> */}
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-full' />
        </div>
      </div>
      {/* <Separator /> */}
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-full' />
        </div>
      </div>
      {/* <Separator /> */}
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-full' />
        </div>
      </div>
      {/* <Separator /> */}
      <div className='space-y-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-full' />
          <Skeleton className='h-5 w-28' />
        </div>
        <div className='flex gap-4'>
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-60' />
          <Skeleton className='h-5 w-full' />
        </div>
      </div>
    </div>
  );
};

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='min-h-screen w-full'>
      <section className='wrapper mb-8 mt-8 gap-8 md:mt-12 md:flex'>
        <LoadingSkeleton />
      </section>
    </div>
  );
}
