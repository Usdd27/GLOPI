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
        Every great meme needs a journey — and GLOPI walks it step by step.
    
      </p>

      {/* Контейнер Roadmap */}
      <div className="relative w-full max-w-6xl h-full mx-auto">
        
        {/* 1️⃣ Community Creation */}
        <div className="absolute" style={{ top: '20%', left: '11.9%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">1️⃣ Community Creation</h3>
            <p className="text-sm">
              Gathering the strongest meme warriors and building the GLOPI family.
            </p>
          </div>
        </div>

        {/* 2️⃣ Mini App Development */}
        <div className="absolute" style={{ top: '55%', left: '30.7%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">2️⃣ Mini App Development</h3>
            <p className="text-sm">
              Our meme lab is working on the ultimate Telegram mini app.
            </p>
          </div>
        </div>

        {/* 3️⃣ Mini App Launch */}
        <div className="absolute" style={{ top: '30%', left: '49.2%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">3️⃣ Mini App Launch</h3>
            <p className="text-sm">
              The arena opens, and GLOPI enters the battle for attention.
            </p>
          </div>
        </div>

        {/* 4️⃣ Rewards after TI14 */}
        <div className="absolute" style={{ top: '45%', left: '75.5%' }}>
          <div className="bg-purple-500 bg-opacity-20 p-6 rounded-full border border-purple-500 w-48 text-center">
            <h3 className="text-lg font-bold mb-2">4️⃣ Rewards after TI14</h3>
            <p className="text-sm">
              When TI14 ends, winners take it all — memes, glory, and $GLOPI prizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
