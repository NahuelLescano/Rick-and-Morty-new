import profile from "@/assets/about-profile.jpg";

export const About = () => {
    return (
        <div className="container mx-auto mt-10 px-4 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">About This Project</h1>
            <p className="text-white mb-4">
                This is a fan project dedicated to the popular animated series "Rick and Morty". 
                It showcases characters, episodes, and more from the show.
            </p>
            <p className="text-white mb-4">
                The project is built using React and TypeScript, leveraging the Rick and Morty API 
                to fetch character data dynamically.
            </p>
            <p className="text-white mb-4">
                Feel free to explore the characters and their details!
            </p>

            <img 
                src={profile}
                alt="Random profile photo for rick and morty web"
                className="mx-auto rounded-full size-48 object-cover mb-4"
            />
        </div>
    );
}
