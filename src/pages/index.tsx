import About from '@/components/About';
import Introduction from '@/components/Introduction';

const Home = () => {
  return (
    <main className="min-h-screen bg-page-color">
      <Introduction />
      <About />
      <section className="min-h-screen"></section>
    </main>
  );
};

export default Home;
