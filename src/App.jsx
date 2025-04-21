import React, { useState, useEffect } from "react";
import potopropil from './assets/image.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const personalData = {
    name: "Irsa Nurrohim",
    description:
      "Saya seorang mahasiswa Informatika di ITENAS Bandung kini saya sedang menmpuh semester 4,saya senang sekali dengan dunia teknologi diantaranya adalah membuat website.",
    email: "irsa.nurrohim@mhs.sch.ac.id",
    phone: "0831-2217-2625",
    linkedin:
      "https://www.linkedin.com/in/irsa-nurrohim-6b1420180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    photo: "image.png",
    projects: [
      {
        name: "Project A",
        date: "January 2025",
        description: "Deskripsi singkat tentang Project A.",
        techUsed: ["React", "Tailwind CSS"],
        screenshot: "https://via.placeholder.com/300",
        githubLink: "https://github.com/irsa/project-a",
      },
      {
        name: "Project B",
        date: "March 2025",
        description: "Deskripsi singkat tentang Project B.",
        techUsed: ["JavaScript", "Node.js"],
        screenshot: "https://via.placeholder.com/300",
        githubLink: "https://github.com/irsa/project-b",
      },
    ],
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex flex-wrap md:flex-nowrap justify-between items-center px-6 py-4 fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="text-2xl font-bold text-cyan-500">Irsa.Nurrohim</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-500"
        >
          ☰
        </button>
        <nav
          className={`w-full md:w-auto mt-4 md:mt-0 ${menuOpen ? "block" : "hidden"} md:flex items-center gap-6`}
        >
          <a href="#home" className="block md:inline hover:text-cyan-500">Home</a>
          <a href="#projects" className="block md:inline hover:text-cyan-500">Projects</a>
          <a href="#contact" className="block md:inline hover:text-cyan-500">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="mt-2 md:mt-0 ml-0 md:ml-4 px-4 py-1 border border-cyan-500 rounded hover:bg-cyan-500 hover:text-black transition"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="pt-32 pb-16 px-4 text-center md:text-left max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={potopropil}
            alt="Foto Profil"
            className="w-36 h-36 rounded-full border-4 border-cyan-500"
          />
          <div>
            <h1 className="text-4xl font-bold mt-4 md:mt-0">Hi, I’m {personalData.name}. 👋</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">{personalData.description}</p>
            <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4">
              <a href="https://github.com/" className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-2 rounded">GitHub</a>
              <a href={personalData.linkedin} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Projects 🚀</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Beberapa proyek yang telah saya buat baru-baru ini.</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {personalData.projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-left relative">
              <h3 className="text-xl font-bold mb-1">{project.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{project.date}</p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
              <img
                src={project.screenshot}
                alt={project.name}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="bg-cyan-600 text-white px-2 py-1 text-xs rounded">{tech}</span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="absolute top-6 right-6 text-sm text-cyan-400 hover:underline"
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Contact 📩</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Feel free to reach out to me!</p>
        <div className="space-y-2">
          <p>Email: <a href={`mailto:${personalData.email}`} className="text-cyan-500 hover:underline">{personalData.email}</a></p>
          <p>Phone: {personalData.phone}</p>
          <p>LinkedIn: <a href={personalData.linkedin} className="text-cyan-500 hover:underline" target="_blank" rel="noopener noreferrer">Visit Profile</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-200 dark:bg-black text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; 2025 {personalData.name} - NIM: 152023205
      </footer>
    </div>
  );
}

export default App;
