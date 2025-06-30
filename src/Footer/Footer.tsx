export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
        { /* <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full shadow"
          /> */ }
          <span className="font-bold text-lg tracking-wide">Rick & Morty App</span>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Rick & Morty Fan Project. Ningun derecho reservado xD.
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};
