import About from '@/components/About';
import Introduction from '@/components/Introduction';
import OurHistory from '@/components/OurHistory';

const Home = () => {
  return (
    <main className="min-h-screen bg-page-color">
      <Introduction />
      <About />
      <OurHistory />
    </main>
  );
};

export default Home;
