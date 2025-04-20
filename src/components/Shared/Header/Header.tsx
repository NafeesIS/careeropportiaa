import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white px-8 py-4 shadow-sm'>
      <div className='flex items-center gap-2'>
        <span className='text-2xl font-bold text-primary'>Russia Vista</span>
      </div>
      <nav>
        <ul className='flex gap-8'>
          <li>
            <a
              href='#universities'
              className='text-foreground transition-colors hover:text-primary'
            >
              Universities
            </a>
          </li>
          <li>
            <a
              href='#jobs'
              className='text-foreground transition-colors hover:text-primary'
            >
              Jobs
            </a>
          </li>
          <li>
            <a
              href='#visit'
              className='text-foreground transition-colors hover:text-primary'
            >
              Visit Russia
            </a>
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
