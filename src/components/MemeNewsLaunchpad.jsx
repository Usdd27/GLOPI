export default function MemeNewsLaunchpad() {
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
        <p className="text-sm sm:text-base text-gray-200 mb-4 leading-relaxed">
          On August 5, the world celebrates Traffic Light Day to honor the installation
          of the first electric traffic light in Cleveland, USA, in 1914.  
          Back then, it had only two colors — red and green — and was operated manually
          from a small booth.
          <br /><br />
          This day now symbolizes that <span className="text-red-400 font-bold">red means HODL</span>, 
          and <span className="text-green-400 font-bold">green means TO THE MOON! 🚀</span>
        </p>

        {/* Кликабельная ссылка */}
        <a
          href="https://www.history.com/this-day-in-history/august-5/first-electric-traffic-signal-installed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-purple-300 underline hover:text-purple-400 transition"
        >
          Read Full Story →
        </a>
      </div>
    </div>
  );
}

