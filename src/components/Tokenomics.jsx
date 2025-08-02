export default function Tokenomics() {
  return (
    <div
      id="tokenomics"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-12 px-4 sm:px-6"
    >
      {/* Заголовок */}
      <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center">
        Tokenomics
      </h2>

      {/* Мемная токеномика */}
      <div className="max-w-3xl space-y-5 sm:space-y-6 text-sm sm:text-base leading-relaxed">
        
        {/* 1 пункт */}
        <div className="bg-purple-500 bg-opacity-20 p-4 sm:p-5 rounded-2xl border border-purple-500 hover:bg-opacity-30 transition duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            1️⃣ 96% — in the wild, 2% — in my pocket
          </h3>
          <p>
            96% of $GLOPI are already roaming free, living their own life on the market.
            I only hold <strong>2%</strong>, sitting like a poor farmer,
            sometimes farming my own memes, hoping to one day crawl up to <strong>5%</strong>.
            Not to dump, but to ride this crypto carousel with you,
            celebrating every pump and memeing every candle together 🎢🐸.
          </p>
        </div>

        {/* 2 пункт */}
        <div className="bg-purple-500 bg-opacity-20 p-4 sm:p-5 rounded-2xl border border-purple-500 hover:bg-opacity-30 transition duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            2️⃣ 01.09.2025 — Birth of the GLOPI Meme Arena
          </h3>
          <p>
            On September 1, 2025, the <strong>Airdrop Game</strong> launches on Telegram.
            Forget the boring “click → get token” mechanics.
            Here, <strong>you are the meme champion</strong>, fighting for $GLOPI,
            almost like at a real tournament,
            except instead of pro players — it’s all crypto-memers 🏆🐸.
          </p>
        </div>

        {/* 3 пункт */}
        <div className="bg-purple-500 bg-opacity-20 p-4 sm:p-5 rounded-2xl border border-purple-500 hover:bg-opacity-30 transition duration-300">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            3️⃣ 10% of winnings — fueling future meme battles
          </h3>
          <p>
            In the game mechanics, <strong>10% of your farmed rewards</strong>
            automatically fly into our <strong>meme reserve</strong>.
            This isn’t greed — it’s the fuel for future prize pools
            in upcoming meme tournaments.
            You play → you earn → and you literally charge the rewards pool
            for the next GLOPI meme battles yourself.
          </p>
        </div>
      </div>
    </div>
  );
}
