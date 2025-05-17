import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import ScrollToTop from '../contact-us/_components/ScrollToTop';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Reazul Islam',
      role: 'Founder & CEO',
      bio: 'With over 3 years of experience in international education, Reazul founded Careeropportia to help international students discover opportunities in Russian universities.',
    },
    {
      name: 'Nafees Imtiaz',
      role: 'Co-Founder & CTO',
      bio: 'Nafees has worked with top Russian universities for a decade and specializes in helping international students navigate the admission process. Also working more than 4 years in web development. Currently maintaining all technical things for Careeropportia',
    },
  ];

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow'>
        <div className='container mx-auto px-4 py-12'>
          <SectionHeader
            title='About Careeropportia'
            description='Your gateway to educational and career opportunities in Russia'
            className='mb-16'
          />

          <div className='mb-16'>
            <h3 className='mb-4 text-2xl font-bold text-primary'>
              Our Mission
            </h3>
            <p className='mb-8 text-lg'>
              At Careeropportia, we connect international students and
              professionals with the best educational and career opportunities
              in Russia. We believe in building bridges across cultures through
              education and employment, fostering international cooperation and
              understanding.
            </p>
            <p className='mb-8 text-lg'>
              Founded in 2025, our organization has helped thousands of
              international students enroll in Russian universities and
              supported professionals in finding rewarding careers across
              various sectors in Russia.
            </p>
          </div>

          <div className='mb-16'>
            <h3 className='mb-6 text-2xl font-bold text-primary'>Our Team</h3>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {teamMembers.map((member, index) => (
                <Card key={index} className='animate-scale-in'>
                  <CardContent className='p-6'>
                    <h4 className='mb-2 text-xl font-bold'>{member.name}</h4>
                    <p className='mb-3 font-medium text-secondary'>
                      {member.role}
                    </p>
                    <p className='text-muted-foreground'>{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-2xl font-bold text-primary'>What We Do</h3>
            <ul className='list-disc space-y-4 pl-6 text-lg'>
              <li>
                Provide comprehensive information about top Russian universities
              </li>
              <li>Assist with university applications and visa processes</li>
              <li>Connect professionals with job opportunities in Russia</li>
              <li>Offer guidance for relocating to Russia</li>
              <li>
                Provide ongoing support for international students and
                professionals in Russia
              </li>
            </ul>
          </div>
        </div>
      </main>

      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
