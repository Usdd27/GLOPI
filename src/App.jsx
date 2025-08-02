import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import AirdropGame from './components/AirdropGame';
import Roadmap from './components/Roadmap'; // ✅ новое имя вместо Security
import Socials from './components/Socials'; 
import Buy from './components/Buy';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <Tokenomics />
      <AirdropGame />
      <Roadmap />    {/* ✅ новый компонент */}
      <Socials />
      <Buy />
      <Team />
      <Footer />
    </>
  );
}

