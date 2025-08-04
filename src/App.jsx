import Hero from './components/Hero';
import CurrentMemeToken from './components/CurrentMemeToken';
import MemeNewsLaunchpad from './components/MemeNewsLaunchpad';
import TopMemeTokens from './components/TopMemeTokens';
import Socials from './components/Socials';
import GrabYourMeme from './components/GrabYourMeme';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <CurrentMemeToken />
      <MemeNewsLaunchpad />
      <TopMemeTokens /> {/* ✅ компонент с топ мем-токенами */}
      <Socials />
      <GrabYourMeme />
      <Team />
      <Footer />
    </>
  );
}
