import profile from "@/assets/about-profile.jpg";
import { Links } from "@/Globals";
import { useState } from "react";

export const About = () => {
  const [isDisable] = useState(true);

  return (
    <div className="container mx-auto mt-10 px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Sobre Este Proyecto
        </h1>
        <img
          src={profile}
          alt="Rick and Morty Web Profile"
          className="mx-auto rounded-full size-32 md:size-48 object-cover mb-6 shadow-lg"
        />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explora el multiverso de Rick y Morty a través de esta aplicación interactiva
          que te permite descubrir personajes, episodios y datos fascinantes de la serie.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors">
          <div className="text-green-500 text-2xl mb-3">👥</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Exploración de Personajes</h3>
          <p className="text-gray-400">
            Navega por cientos de personajes únicos, desde Rick y Morty hasta criaturas interdimensionales.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
          <div className="text-blue-500 text-2xl mb-3">📺</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Información de Episodios</h3>
          <p className="text-gray-400">
            Descubre detalles sobre cada episodio, temporadas y las aventuras más memorables.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
          <div className="text-purple-500 text-2xl mb-3">🌍</div>
          <h3 className="text-xl font-semibold mb-3 text-white">Múltiples Dimensiones</h3>
          <p className="text-gray-400">
            Explora diferentes ubicaciones y dimensiones del universo de Rick y Morty.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 mb-12 border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Tecnologías Utilizadas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-blue-500 text-xl">⚛️</span>
              <span className="text-white font-medium">React 18</span>
              <span className="text-gray-400">- Framework principal</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-700 text-xl">📘</span>
              <span className="text-white font-medium">TypeScript</span>
              <span className="text-gray-400">- Tipado estático</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-cyan-500 text-xl">🎨</span>
              <span className="text-white font-medium">Tailwind CSS</span>
              <span className="text-gray-400">- Estilos modernos</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-orange-500 text-xl">⚡</span>
              <span className="text-white font-medium">Vite</span>
              <span className="text-gray-400">- Build tool</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500 text-xl">🌐</span>
              <span className="text-white font-medium">Rick & Morty API</span>
              <span className="text-gray-400">- Datos dinámicos</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-500 text-xl">📱</span>
              <span className="text-white font-medium">Responsive Design</span>
              <span className="text-gray-400">- Mobile-first</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          ¡Comienza tu Aventura Interdimensional!
        </h2>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Sumérgete en el caótico y fascinante mundo de Rick y Morty.
          Explora personajes únicos, descubre episodios legendarios y
          navega por el multiverso más loco de la animación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Links to="/" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            🎭 Explorar Personajes
          </Links>
          <button disabled={isDisable} className={`${isDisable ? "disabled:cursor-not-allowed" : "hover:bg-white hover:text-green-600 transition-colors hover:cursor-pointer"} border-2 border-white text-white px-6 py-3 rounded-lg font-semibold `}>
            📺 Ver Episodios
          </button>
        </div>
      </div>
    </div>
  );
};
