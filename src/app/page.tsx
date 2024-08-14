import dynamic from 'next/dynamic';

const MainPage = dynamic(() => import('../../components/main'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex xs:min-h-screen flex-col">
      <MainPage/>
    </main>
  );
}
