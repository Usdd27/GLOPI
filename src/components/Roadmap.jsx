export default function Roadmap() { 
  return (
    <div
      id="roadmap"
      className="relative h-[650px] flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-12 px-6 overflow-hidden"
    >
      {/* Заголовок */}
      <h2 className="text-5xl font-bold mb-4">Roadmap</h2>

      {/* Описание */}
      <p className="text-center max-w-2xl text-lg mb-8 leading-relaxed">
        From the first meme spark to global meme domination —
        follow GLOPI’s paw prints on the path to crypto-meme glory.
      </p>

      {/* Контейнер Roadmap */}
      <div className="relative w-full max-w-6xl h-full mx-auto">
        
        {/* 1️⃣ Meme Forge */}
        <div className="absolute" style={{ top: '20%', left: '11.9%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">1️⃣ Meme Forge</h3>
            <p className="text-sm">
              We forge our first memes and release them into the wild.
              Every meme is a seed of future crypto history.
            </p>
          </div>
        </div>

        {/* 2️⃣ Token Awakening (приподнял выше) */}
        <div className="absolute" style={{ top: '48%', left: '30.7%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">2️⃣ Token Awakening</h3>
            <p className="text-sm">
              Memes awaken as $GLOPI tokens.
              Early believers start collecting and joining the family.
            </p>
          </div>
        </div>

        {/* 3️⃣ Meme Arena */}
        <div className="absolute" style={{ top: '30%', left: '49.2%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">3️⃣ Meme Arena</h3>
            <p className="text-sm">
              The Mini App & Airdrop Game open.
              Players battle for meme glory and $GLOPI rewards.
            </p>
          </div>
        </div>

        {/* 4️⃣ Global Meme Takeover */}
        <div className="absolute" style={{ top: '45%', left: '75.5%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">4️⃣ Global Meme Takeover</h3>
            <p className="text-sm">
              GLOPI memes step into the crypto world:
              listings, tournaments, and global meme dominance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
