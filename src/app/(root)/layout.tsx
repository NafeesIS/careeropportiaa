import Footer from '@/components/Shared/Footer/Footer';
import Header from '@/components/Shared/Header/Header';
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
