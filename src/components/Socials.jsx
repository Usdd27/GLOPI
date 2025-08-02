import SocialsX from "../assets/socials/SocialsX.png"; 
import SocialsTG from "../assets/socials/SocialsTG.png";
import SocialsTikTok from "../assets/socials/SocialsTikTok.png";

export default function Socials() {
  return (
    <div
      id="socials"
      className="relative min-h-screen flex flex-col items-center justify-start text-white bg-[#2b0a3d] pt-20 px-6"
    >
      {/* Заголовок */}
      <h2 className="text-5xl font-bold mb-6">Socials</h2>

      {/* Новое прикольное описание */}
      <p className="text-center max-w-2xl text-xl mb-12">
        We chill where memes live. Come hang out with{" "}
        <span className="text-purple-400 font-bold">$GLOPI</span>!
      </p>

      {/* Карточки со ссылками */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
        
        {/* 1 — X */}
        <a
          href="https://x.com/GLOPI_mem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-purple-500 bg-opacity-20 p-6 rounded-2xl hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
        >
          <img
            src={SocialsX}
            alt="X"
            className="w-24 h-24 mb-4 rounded-xl object-cover border border-purple-500"
          />
          <span className="text-lg font-semibold">X / Twitter</span>
        </a>

        {/* 2 — Telegram */}
        <a
          href="https://t.me/GLOPI_mem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-purple-500 bg-opacity-20 p-6 rounded-2xl hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
        >
          <img
            src={SocialsTG}
            alt="Telegram"
            className="w-24 h-24 mb-4 rounded-xl object-cover border border-purple-500"
          />
          <span className="text-lg font-semibold">Telegram</span>
        </a>

        {/* 3 — TikTok активная ссылка */}
        <a
          href="https://www.tiktok.com/@glopi_mem"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-purple-500 bg-opacity-20 p-6 rounded-2xl hover:scale-105 hover:bg-opacity-30 transition-transform duration-300"
        >
          <img
            src={SocialsTikTok}
            alt="TikTok"
            className="w-24 h-24 mb-4 rounded-xl object-cover border border-purple-500"
          />
          <span className="text-lg font-semibold">TikTok</span>
        </a>
      </div>
    </div>
  );
}
