const Footer = () => {
  return (
    <footer className='bg-primary py-12 text-primary-foreground'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div>
            <h3 className='mb-4 text-xl font-bold'>Russia Vista</h3>
            <p className='text-primary-foreground/80'>
              Your gateway to educational and career opportunities in Russia.
            </p>
          </div>
          <div>
            <h3 className='mb-4 text-xl font-bold'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#universities'
                  className='transition-colors hover:text-accent'
                >
                  Universities
                </a>
              </li>
              <li>
                <a href='#jobs' className='transition-colors hover:text-accent'>
                  Job Opportunities
                </a>
              </li>
              <li>
                <a
                  href='#visit'
                  className='transition-colors hover:text-accent'
                >
                  Visit Russia
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-xl font-bold'>Contact</h3>
            <ul className='space-y-2'>
              <li>Email: info@russiavista.com</li>
              <li>Phone: +7 999 123 4567</li>
              <li>Address: Moscow, Russia</li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-primary-foreground/20 pt-8 text-center'>
          <p>
            &copy; {new Date().getFullYear()} Russia Vista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
