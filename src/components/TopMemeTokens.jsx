import { useEffect, useState } from "react";

export default function TopMemeTokens() {
  const [glopiMC, setGlopiMC] = useState(0);

  useEffect(() => {
    const end = 22500; // Пиковая MC
    const duration = 2000; // Длительность анимации
    const stepTime = 20; // Интервал обновления (мс)
    const steps = duration / stepTime;
    const step = end / steps;

    let current = 0;
    let direction = 1; // 1 - рост, 0 - пауза
    let elapsed = 0;

    const interval = setInterval(() => {
      if (direction === 1) {
        current += step;
        if (current >= end) {
          current = end;
          direction = 0;
          elapsed = 0;
        }
      } else {
        // Пауза 2 сек
        elapsed += stepTime;
        if (elapsed >= 2000) {
          current = 0;
          direction = 1;
        }
      }
      setGlopiMC(Math.floor(current));
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="top-meme-tokens"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-12 px-6"
    >
      {/* Заголовок */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Top Meme Tokens
      </h2>

      {/* Описание */}
      <p className="text-center max-w-2xl text-lg sm:text-xl mb-12 leading-relaxed">
        Meet the meta meme heroes — top picks with the highest winrate.  
        Track their rise, check their contracts, and join the hype! ⚡
      </p>

      {/* Таблица */}
      <div className="w-full max-w-5xl overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-purple-500 bg-opacity-20 text-purple-300">
              <th className="py-3 px-4 border border-purple-500">Rank</th>
              <th className="py-3 px-4 border border-purple-500">Token</th>
              <th className="py-3 px-4 border border-purple-500">Peak MC</th>
              <th className="py-3 px-4 border border-purple-500">Contract Address</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-purple-500 hover:bg-opacity-10 transition">
              <td className="py-3 px-4 border border-purple-500 font-bold">1️⃣</td>
              <td className="py-3 px-4 border border-purple-500 font-bold">GLOPI</td>
              <td className="py-3 px-4 border border-purple-500 text-green-400 font-mono">
                ${glopiMC.toLocaleString()}
              </td>
              <td className="py-3 px-4 border border-purple-500 text-sm text-blue-400 underline cursor-pointer hover:text-blue-300">
                4sBU4DB3ET6dZy4e4GqyktR7Ym6SSJpTfbfSk2g8pump
              </td>
            </tr>
            <tr className="hover:bg-purple-500 hover:bg-opacity-10 transition">
              <td className="py-3 px-4 border border-purple-500">2️⃣</td>
              <td className="py-3 px-4 border border-purple-500 text-gray-400 italic">
                Coming Soon
              </td>
              <td className="py-3 px-4 border border-purple-500 text-gray-500">—</td>
              <td className="py-3 px-4 border border-purple-500 text-gray-500">—</td>
            </tr>
            <tr className="hover:bg-purple-500 hover:bg-opacity-10 transition">
              <td className="py-3 px-4 border border-purple-500">3️⃣</td>
              <td className="py-3 px-4 border border-purple-500 text-gray-400 italic">
                Coming Soon
              </td>
              <td className="py-3 px-4 border border-purple-500 text-gray-500">—</td>
              <td className="py-3 px-4 border border-purple-500 text-gray-500">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
