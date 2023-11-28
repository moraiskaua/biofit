import GreatButton from '@/components/GreatButton';
import Header from '@/components/Header';

const Home = () => {
  return (
    <main className="min-h-screen bg-page-color">
      <Header />
      <section className="h-screen m-auto flex justify-center items-center bg-header-cover">
        <GreatButton>Nossas turmas</GreatButton>
      </section>
    </main>
  );
};

export default Home;
