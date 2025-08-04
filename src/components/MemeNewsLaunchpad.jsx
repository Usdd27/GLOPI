export default function AirdropGame() {
  return (
    <div
      id="meme-news-launchpad"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-20 px-6"
    >
      {/* Заголовок */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        Meme News Launchpad
      </h2>

      {/* Описание */}
      <p className="text-center max-w-2xl text-lg sm:text-xl mb-12 leading-relaxed">
        Breaking news from the real world can spark the next meme token.  
        We catch the hype, wrap it in <span className="text-purple-400 font-bold">$GLOPI</span>,  
        and release it into the crypto wild as the ultimate meme collectible!
      </p>

      {/* Блок для новости */}
      <div className="bg-purple-500 bg-opacity-20 p-6 rounded-2xl border border-purple-500 w-full max-w-3xl text-center hover:bg-opacity-30 transition duration-300">
        <h3 className="text-xl font-bold mb-2 text-purple-300">
          Current News Highlight
        </h3>
        <p className="text-sm sm:text-base text-gray-200">
          Here will be the latest news that inspires our next meme token.  
          (This is a placeholder — soon every hot topic will become a meme!)
        </p>
      </div>
    </div>
  );
}
