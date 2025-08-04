import Hero from './components/Hero';
import Tokenomics from './components/CurrentMemeToken';
import AirdropGame from './components/MemeNewsLaunchpad';
import Roadmap from './components/TopMemeTokens';
import Socials from './components/Socials';
import Buy from './components/GrabYourMeme';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <Tokenomics />
      <AirdropGame />
      <Roadmap /> {/* ✅ компонент с топ мем-токенами */}
      <Socials />
      <Buy />
      <Team />
      <Footer />
    </>
  );
}
