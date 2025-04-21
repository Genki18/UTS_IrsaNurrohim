import React, { useState } from "react";

// Data proyek
const projectsData = [
  {
    name: "imgui external overlay",
    description: "ImGui External DirectX9 Overlay",
    stars: 28,
    forks: 9,
    tech: "C++"
  },
  {
    name: "imgui blur effect",
    description: "Simple ImGui DirectX Blur Effect Example Project",
    stars: 15,
    forks: 1,
    tech: "C++"
  },
  {
    name: "DbgGPT",
    description: "DbgGPT - my first basic x64dbg/openai plugin",
    stars: 10,
    forks: 3,
    tech: "C++"
  },
  {
    name: "3r4y",
    description: "GitHub home page showcase",
    stars: 1,
    forks: 0,
    tech: ""
  }
];

const Projects = ({ projects = projectsData, onProjectClick }) => {
  const [clickedProject, setClickedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    setClickedProject(projectName); // Update state ketika proyek diklik
    onProjectClick(projectName); // Mengirimkan informasi ke komponen induk melalui props
  };

  return (
    <section className="py-10 px-4 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Featured Projects 🧠</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 text-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition"
          >
            <h4 className="text-xl font-bold mb-2">{project.name}</h4>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <div className="text-sm flex justify-between items-center mb-4">
              <span>⭐ {project.stars}</span>
              <span>🍴 {project.forks}</span>
              {project.tech && (
                <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                  {project.tech}
                </span>
              )}
            </div>
            <button
              onClick={() => handleProjectClick(project.name)} // Handle klik untuk update state
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
              Info Project
            </button>
          </div>
        ))}
      </div>
      {clickedProject && <p className="mt-4 text-center">Last clicked project: {clickedProject}</p>}
    </section>
  );
};

export default Projects;
