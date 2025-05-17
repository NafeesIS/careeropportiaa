import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
// import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
// import { getUniversityById } from '@/data/universities';
import Image from 'next/image';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { getUniversityById } from '../../_data/data';

interface UniversityDetailsProps {
  slug: string | undefined; // The slug can be a string or undefined
}

const UniversityDetails = ({ slug }: UniversityDetailsProps) => {
  //   const { id } = useParams<{ id: string }>();
  const university = getUniversityById(slug || '');

  if (!university) {
    return (
      <div className='flex min-h-screen flex-col'>
        {/* <Header /> */}
        <main className='container mx-auto flex-grow px-4 py-12'>
          <div className='text-center'>
            <h1 className='mb-4 text-3xl font-bold'>University Not Found</h1>
            <p className='mb-8'>
              The university you are looking for could not be found.
            </p>
            <Button asChild>
              <Link href='/universities'>Back to Universities</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-grow'>
        <div className='container mx-auto px-4 py-12'>
          {/* Breadcrumb */}
          <div className='mb-8'>
            <nav className='flex'>
              <ol className='flex items-center space-x-2'>
                <li>
                  <Link href='/' className='text-primary hover:underline'>
                    Home
                  </Link>
                </li>
                <li>
                  <span className='mx-2 text-muted-foreground'>/</span>
                </li>
                <li>
                  <Link
                    href='/universities'
                    className='text-primary hover:underline'
                  >
                    Universities
                  </Link>
                </li>
                <li>
                  <span className='mx-2 text-muted-foreground'>/</span>
                </li>
                <li className='text-muted-foreground'>{university.name}</li>
              </ol>
            </nav>
          </div>

          {/* University Header */}
          <div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div className='lg:col-span-2'>
              <h1 className='mb-4 text-4xl font-bold'>{university.name}</h1>
              <div className='mb-4 flex flex-wrap gap-3'>
                <span className='rounded-full bg-primary/10 px-3 py-1 text-sm text-primary'>
                  {university.major}
                </span>
                <span className='rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary'>
                  {university.location.city}, {university.location.country}
                </span>
                {university.rankings?.world && (
                  <span className='rounded-full bg-green-100 px-3 py-1 text-sm text-green-800'>
                    World Rank: #{university.rankings.world}
                  </span>
                )}
                {university.rankings?.national && (
                  <span className='rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800'>
                    National Rank: #{university.rankings.national}
                  </span>
                )}
              </div>
              <p className='text-lg'>{university.overview}</p>
            </div>
            <div>
              <div className='rounded-lg bg-muted/20 p-6'>
                <Image
                  src={
                    university.imageUrl ||
                    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                  }
                  alt={university.name}
                  width={600}
                  height={600}
                  className='mb-4 aspect-video w-full rounded object-cover'
                />
                <h3 className='mb-2 text-xl font-bold'>Quick Facts</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>Website</TableCell>
                      <TableCell>
                        <a
                          href={university.website}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-primary hover:underline'
                        >
                          Visit Website
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Email</TableCell>
                      <TableCell>
                        <a
                          href={`mailto:${university.contact.email}`}
                          className='text-primary hover:underline'
                        >
                          {university.contact.email}
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Phone</TableCell>
                      <TableCell>
                        <a
                          href={`tel:${university.contact.phone}`}
                          className='text-primary hover:underline'
                        >
                          {university.contact.phone}
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Location</TableCell>
                      <TableCell>
                        {university.location.city},{' '}
                        {university.location.country}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div className='mb-12'>
            <h2 className='mb-6 text-2xl font-bold'>
              Available Fields of Study
            </h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {university.major === 'Engineering' && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Civil Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Design and construction of infrastructure projects
                        including buildings, bridges, roads, and water systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Mechanical Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Study of physical machinery, tools, engines and
                        manufacturing systems using physics and material
                        science.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Electrical Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Design and development of electrical systems, power
                        generation, motors, electronics and telecommunication.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {university.major === 'Medical' && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>General Medicine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Comprehensive medical education preparing students for
                        careers as physicians and medical specialists.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Dentistry</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Study of oral health, dental procedures, and treatment
                        of oral diseases and conditions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pharmacy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Education in pharmaceutical sciences, drug development,
                        and dispensing medications.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}

              {university.major === 'Other' && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Business Administration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Study of business management principles, finance,
                        marketing, and organizational leadership.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Computer Science</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Study of computing technologies, software development,
                        algorithms and information systems.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>International Relations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Study of global affairs, diplomacy, foreign policy, and
                        international political systems.
                      </p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          </div>

          {/* Application Section */}
          <div className='mb-12 rounded-lg bg-muted/20 p-8'>
            <h2 className='mb-6 text-2xl font-bold'>How to Apply</h2>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
              <div>
                <h3 className='mb-4 text-xl font-bold'>Application Process</h3>
                <ol className='list-decimal space-y-3 pl-5'>
                  <li>
                    Visit the universitys official website for detailed
                    admission information
                  </li>
                  <li>
                    Prepare necessary documents (passport, previous education
                    certificates, etc.)
                  </li>
                  <li>
                    Submit application through the universitys online portal
                  </li>
                  <li>Pay the application processing fee</li>
                  <li>Wait for the admission decision</li>
                  <li>If accepted, apply for a student visa to Russia</li>
                </ol>
              </div>
              <div>
                <h3 className='mb-4 text-xl font-bold'>Required Documents</h3>
                <ul className='list-disc space-y-3 pl-5'>
                  <li>
                    High school diploma or bachelors degree (depending on the
                    program)
                  </li>
                  <li>Academic transcripts</li>
                  <li>Valid passport</li>
                  <li>Medical certificate</li>
                  <li>Language proficiency certificate (Russian or English)</li>
                  <li>Application form</li>
                  <li>Passport-sized photographs</li>
                </ul>
              </div>
            </div>
            <div className='mt-8 text-center'>
              <Button asChild>
                <a
                  href={university.website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Visit University Website for More Information
                </a>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className='my-12 text-center'>
            <Button variant='outline' asChild className='mr-4'>
              <Link href='/universities'>Back to Universities</Link>
            </Button>
            <Button variant='secondary' asChild>
              <Link href='/contact-us'>Contact Us for Assistance</Link>
            </Button>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default UniversityDetails;
