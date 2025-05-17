import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white px-8 py-4 shadow-sm'>
      <div className='flex items-center gap-2'>
        <span className='text-2xl font-bold text-primary'>Careeropportia</span>
      </div>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <Link href='/universities'>Universities</Link>
          </li>
          <li>
            <Link
              href='contact-us'
              className='text-foreground transition-colors hover:text-primary'
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link href='/about-us'>About Us</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Button variant='secondary' className='text-white'>
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
