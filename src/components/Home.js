import React from "react";
import imageProfil from './assets/image.png';

const Hero = () => (
  <section className="text-center py-10">
    <img
      src={imageProfil}
      alt="Profile"
      className="rounded-full w-32 h-32 mx-auto mb-4"
    />
    <h2 className="text-3xl font-semibold">Hi, I’m Erqy. 👋</h2>
    <p className="text-gray-400 mt-2 max-w-xl mx-auto">
      I’m a full-stack developer, founder of <a href="#" className="text-blue-400 underline">dxgxkr.nl</a>. I’m interested in low-level programming as a hobby. I’m a tiny hacker.
    </p>
    <div className="flex justify-center gap-4 mt-4 flex-wrap">
      <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">GitHub</a>
      <a href="#" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Twitter</a>
      <a href="#" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">LinkedIn</a>
      <a href="#" className="bg-black px-4 py-2 rounded hover:bg-gray-900">Behance</a>
      <a href="#" className="bg-pink-400 px-4 py-2 rounded hover:bg-pink-500">Dribbble</a>
    </div>
  </section>
);

export default Hero;
