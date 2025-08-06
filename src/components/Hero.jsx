import { useEffect, useState } from 'react';
import glopiLogo from '../assets/GLOPI.png';

export default function Hero() {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => setIsFlipping(false), 1000); // длительность анимации 1 сек
    }, 5000); // каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-start min-h-screen bg-[#2b0a3d] text-center pt-8 px-4"
    >
      {/* Логотип */}
      <div
        className={`relative w-72 h-72 rounded-full border-4 border-orange-500 shadow-2xl ${
          isFlipping ? 'animate-flip' : ''
        }`}
      >
        <img
          src={glopiLogo}
          alt="GLOPI Logo"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Навигационное меню */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-5xl">
        <a
          href="#current-meme-token"
          className="px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition whitespace-nowrap"
        >
          Current Meme Token
        </a>
        <a
          href="#meme-hero-factory"
          className="px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition whitespace-nowrap"
        >
          Meme Hero Factory
        </a>
        <a
          href="#top-meme-tokens"
          className="px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition whitespace-nowrap"
        >
          Top Meme Tokens
        </a>
        <a
          href="#socials"
          className="px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition whitespace-nowrap"
        >
          Socials
        </a>
        <a
          href="#team"
          className="px-5 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200 transition whitespace-nowrap"
        >
          Team
        </a>
      </div>

      {/* Мемный слоган */}
      <p className="mt-8 text-2xl text-white font-semibold opacity-0 animate-fadeIn">
        GLOPI — Meme Maker & Token Spawner. <br />
        Forging legendary meme heroes inspired by Dota!
      </p>
    </div>
  );
}
