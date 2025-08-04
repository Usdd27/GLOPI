export default function Tokenomics() {
  return (
    <div
      id="current-meme-token"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-12 px-4 sm:px-6"
    >
      {/* Заголовок */}
      <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center">
        Current Meme Token
      </h2>

      {/* Описание */}
      <p className="text-center max-w-2xl text-lg sm:text-xl mb-10 leading-relaxed">
        Meet the meme ruling the arena right now.  
        Collect it, trade it, and join the ultimate meme movement!
      </p>

      {/* Блок с токеном */}
      <div className="bg-purple-500 bg-opacity-20 p-6 sm:p-8 rounded-2xl border border-purple-500 flex flex-col items-center max-w-sm w-full text-center hover:bg-opacity-30 transition duration-300">
        
        {/* Заглушка для логотипа */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full bg-gray-700 border-2 border-purple-400 flex items-center justify-center text-gray-400">
          Logo
        </div>

        {/* Название токена */}
        <h3 className="text-xl sm:text-2xl font-bold mb-2">GLOPI</h3>

        {/* Описание токена */}
        <p className="text-sm sm:text-base leading-relaxed">
          GLOPI is the meme beast of the crypto jungle.  
          A token born for fun, community, and ultimate meme glory.  
          Hold it, play with it, and ride the meme wave together! 🐸🚀
        </p>
      </div>
    </div>
  );
}
