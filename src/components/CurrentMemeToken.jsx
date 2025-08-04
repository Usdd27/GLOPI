import glightLogo from '../assets/CurrentMeme/GLIGHT.png';

export default function CurrentMemeToken() {
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
        GLIGHT turns crypto into a meme highway.  
        Green light for moonshots, red light for diamond hands.  
        Hold tight and enjoy the ride!
      </p>

      {/* Блок с токеном */}
      <div className="bg-purple-500 bg-opacity-20 p-6 sm:p-8 rounded-2xl border border-purple-500 flex flex-col items-center max-w-sm w-full text-center hover:bg-opacity-30 transition duration-300">
        
        {/* Логотип токена */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full border-2 border-purple-400 overflow-hidden flex items-center justify-center">
          <img
            src={glightLogo}
            alt="GLIGHT Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Название токена */}
        <h3 className="text-xl sm:text-2xl font-bold mb-2">GLIGHT</h3>

        {/* Описание токена */}
        <p className="text-sm sm:text-base leading-relaxed">
          GLIGHT turns crypto into a meme highway.  
          Green light for moonshots, red light for diamond hands.  
          Hold tight and enjoy the ride! 🚀💎
        </p>
      </div>
    </div>
  );
}
