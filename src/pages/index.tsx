import Card from '@/components/Card';
import Introduction from '@/components/Introduction';

const Home = () => {
  return (
    <main className="min-h-screen bg-page-color">
      <Introduction />
      <div className="flex justify-center gap-16 -mt-14 items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Home;
