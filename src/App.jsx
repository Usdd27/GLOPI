import Hero from './components/Hero';
import CurrentMemeToken from './components/CurrentMemeToken';
import MemeHeroFactory from './components/MemeHeroFactory'; // ✅ Исправлено название импорта
import TopMemeTokens from './components/TopMemeTokens';
import Socials from './components/Socials';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <CurrentMemeToken />
      <MemeHeroFactory /> {/* ✅ Переименовано */}
      <TopMemeTokens />   {/* ✅ компонент с топ мем-токенами */}
      <Socials />
      <Team />
      <Footer />
    </>
  );
}
