export const NavBar = () => {
    return (
        <nav className="top-0 w-full fixed p-4 flex justify-between items-center bg-transparent border-b border-white/20 backdrop-blur-md z-50">
            <ul className="flex gap-8">
                <li><a href="/">Rick and Morty</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/favorites">Favorites</a></li>
            </ul>
        </nav>
    )
}
