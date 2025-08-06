import glopiLogo from '../assets/GLOPI.png';
import gaxeLogo from '../assets/CurrentMeme/GAXE.png';

export default function MemeHeroFactory() {
  // 4 блока: 31+31+31+32
  const blocks = [31, 31, 31, 32];
  const blockTitles = [
    { name: 'Strength', icon: '✊', color: 'text-red-400' },
    { name: 'Agility', icon: '🏹', color: 'text-green-400' },
    { name: 'Intelligence', icon: '🧠', color: 'text-blue-400' },
    { name: 'Universal', icon: '💫', color: 'text-purple-400' },
  ];

  let total = 0;
  const heroes = blocks.map((count, blockIndex) =>
    Array.from({ length: count }, (_, i) => {
      total++;
      if (total === 2) return { name: 'GAXE', logo: gaxeLogo };
      if (blockIndex === 3 && i === count - 1)
        return { name: 'GLOPI', logo: glopiLogo };
      return { name: 'Coming Soon', logo: null };
    })
  );

  return (
    <div
      id="meme-hero-factory"
      className="min-h-screen bg-[#2b0a3d] text-white pt-10 px-6"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
        Meme Hero Factory
      </h2>

      {/* Контейнер 4 блоков */}
      <div className="flex justify-center gap-12">
        {heroes.map((block, blockIndex) => (
          <div key={blockIndex} className="flex flex-col items-start">
            
            {/* Заголовок блока с иконкой */}
            <div className="flex items-center gap-2 mb-2 ml-2">
              <span className={`text-xl ${blockTitles[blockIndex].color}`}>
                {blockTitles[blockIndex].icon}
              </span>
              <span className="text-lg font-semibold">
                {blockTitles[blockIndex].name}
              </span>
            </div>

            {/* Сетка иконок */}
            <div className="grid grid-cols-5 gap-2 justify-items-center">
              {block.map((hero, i) => (
                <div
                  key={i}
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-md border border-purple-500 
                             flex items-center justify-center transition duration-300 hover:scale-110 
                             hover:shadow-[0_0_15px_4px_rgba(168,85,247,0.7)]"
                >
                  {hero.logo ? (
                    <img
                      src={hero.logo}
                      alt={hero.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-[9px] text-gray-400 text-center px-1">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
