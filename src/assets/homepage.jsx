import React from "react";

const Home = () => {
  return (
    <section className="bg-blue-50 text-center py-20 px-6 text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Irsa Nurrohim</h1>
        <p className="text-xl mt-4">
          Mahasiswa Informatika - ITENAS Bandung, Berfokus pada Web Development dan Frontend.
        </p>

        <div className="mt-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>

        <div className="mt-8">
          <a
            href="#about"
            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
