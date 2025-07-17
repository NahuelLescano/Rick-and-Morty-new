import GithubIcon from "@/assets/GithubIcon.svg?react";
import XIcon from "@/assets/XIcon.svg?react";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg tracking-wide">
                        <a href="/">Rick and Morty</a>
                    </span>
                </div>
                <div className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Rick & Morty Fan Project. Ningun derecho reservado xD.
                </div>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/NahuelLescano/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                    >
                        <GithubIcon className="size-6" />
                    </a>
                    <a
                        href="https://x.com/nahuel0495"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                    >
                        <XIcon className="size-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
