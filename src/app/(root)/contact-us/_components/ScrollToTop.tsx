'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size='icon'
          className='rounded-full bg-primary/80 shadow-md hover:bg-primary'
          aria-label='Scroll to top'
        >
          <ArrowUp className='h-5 w-5' />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
