import About from '@/components/About';
import Calculator from '@/components/Calculator';
import Categories from '@/components/Categories';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Introduction from '@/components/Introduction';
import OurHistory from '@/components/OurHistory';

const Home = () => {
  return (
    <main className="min-h-screen bg-page-color">
      <Introduction />
      <About />
      <OurHistory />
      <Categories />
      <Calculator />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
