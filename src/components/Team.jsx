export default function Team() {
  // Импорт всех изображений из папки team через Vite
  const images = import.meta.glob("../assets/team/*.{png,jpg,jpeg,svg}", { eager: true });
  const teamImages = Object.values(images).map((img) => img.default);

  return (
    <div
      id="team"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-20 px-6"
    >
      {/* Основной заголовок */}
      <h2 className="text-5xl font-bold mb-6">Team</h2>

      {/* Новый текст про сообщество */}
      <p className="text-center max-w-2xl text-lg mb-12 leading-relaxed">
        There is no traditional team behind GLOPI — the community is the team.
        Every holder, every meme, every shared laugh contributes to its journey.
        Together, we are <span className="text-purple-400 font-bold">GLOPI</span>.
      </p>

      {/* Автоматическая сетка картинок */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {teamImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Community member ${index + 1}`}
            className="w-24 h-24 rounded-2xl object-cover border border-purple-500"
          />
        ))}
      </div>

      {/* Подпись в углу */}
      <div
        className="absolute bottom-[2%] right-[2%] -rotate-[25deg] text-center leading-tight"
      >
        <div
          className="text-lg font-thin"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Aleksandr & AI
        </div>
        <div
          className="text-base font-thin mt-1"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          AlekAI
        </div>
      </div>
    </div>
  );
}
