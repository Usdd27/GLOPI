export default function AirdropGame() {
  return (
    <div
      id="airdrop"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-20 px-6"
    >
      {/* Заголовок */}
      <h2 className="text-5xl font-bold mb-6">Airdrop Game</h2>

      {/* Описание про TI14 */}
      <p className="text-center max-w-2xl text-xl mb-12 leading-relaxed">
        TI14 is coming! And with it — the GLOPI meme arena in Telegram.
        Fight, win, and collect <span className="text-purple-400 font-bold">$GLOPI</span>,
        almost like at the real The International 14!
      </p>

      {/* Надпись по центру */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-3xl font-bold text-purple-400 opacity-70">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
