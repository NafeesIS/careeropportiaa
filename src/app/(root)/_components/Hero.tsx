import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className='relative h-[600px] w-full overflow-hidden'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513326738677-b964603b136d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent'></div>
      </div>

      {/* Content */}
      <div className='container relative z-10 mx-auto flex h-full items-center px-4'>
        <div className='animate-fade-in max-w-lg'>
          <h1 className='mb-4 text-5xl font-bold text-white md:text-6xl'>
            Discover Russia
          </h1>
          <p className='mb-8 text-xl text-white/90'>
            Explore top universities, career opportunities, and pathways to
            visit one of the worlds most fascinating countries.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button className='bg-white text-primary hover:bg-white/90'>
              Explore Universities
            </Button>
            <Button
              variant='outline'
              className='border-white text-white hover:bg-white/20'
            >
              Find Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
