import glopiBuy from "../assets/buy/GLOPI_buy.png";

export default function Buy() {
  return (
    <div
      id="buy"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-20 px-6"
    >
      {/* Заголовок */}
      <h2 className="text-5xl font-bold mb-6">Grab Your Meme</h2>

      {/* Новое мемное описание */}
      <p className="text-center max-w-2xl text-xl mb-12 leading-relaxed">
        These links take you straight to the freshest $GLOPI memes on the market.  
        Collect them, flex them, and join the ultimate meme carnival!
      </p>

      {/* Карточки со ссылками */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* 1 */}
        <a
          href="https://letsbonk.fun/token/DCZDxXn1PKyHZMekiPzxnQQujg6cD586giSbzVuEbonk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-purple-500 bg-opacity-20 p-6 rounded-2xl hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
        >
          <img
            src={glopiBuy}
            alt="LetsBonk"
            className="w-24 h-24 mb-4 rounded-xl object-cover border border-purple-500"
          />
          <span className="text-lg font-semibold">LetsBonk</span>
        </a>

        {/* 2 */}
        <a
          href="https://axiom.trade/meme/AE4XFWtn15yoEf6kL1NyAGwqGYnXjVK4UGLMybkmNSTM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-purple-500 bg-opacity-20 p-6 rounded-2xl hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
        >
          <img
            src={glopiBuy}
            alt="Axiom"
            className="w-24 h-24 mb-4 rounded-xl object-cover border border-purple-500"
          />
          <span className="text-lg font-semibold">Axiom Trade</span>
        </a>

        {/* 3 */}
        <a
          href="https://dexscreener.com/solana/AE4XFWtn15yoEf6kL1NyAGwqGYnXjVK4UGLMybkmNSTM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-purple-500 bg-opacity-20 p-6 rounded-2xl hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
        >
          <img
            src={glopiBuy}
            alt="DexScreener"
            className="w-24 h-24 mb-4 rounded-xl object-cover border border-purple-500"
          />
          <span className="text-lg font-semibold">DexScreener</span>
        </a>
      </div>
    </div>
  );
}
