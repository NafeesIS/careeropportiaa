// app/universities/[slug]/page.tsx

import UniversityDetails from './_components/UniversityDetails';

const UniversitiesDetailsPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params; // Access slug from params

  return (
    <div>
      <UniversityDetails slug={slug} />
    </div>
  );
};

export default UniversitiesDetailsPage;
