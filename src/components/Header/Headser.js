import React from "react";
import navImage from "../../images/logo-story-volkswagen.jpg";
const Headser = () => {
  return (
    <div>
      <header class="flex flex-row justify-between items-center space-x-4 bg-white py-6 px-6">
        <a href="#" class="block">
          <img
            class="h-8"
            src={navImage}
            alt="Themes.dev Logo"
            title="Themes.dev Logo"
          />
          <a href="#" class="text-indigo-600 hover:underline">
            Plumbio
          </a>
        </a>
        <nav class="flex flex-row space-x-6 font-semibold">
          <a href="#" class="text-indigo-600 hover:underline">
            Home
          </a>
          <a href="#" class="text-gray-600 hover:underline">
            About us
          </a>
          <a href="#" class="text-gray-600 hover:underline">
            Services
          </a>
          <a href="#" class="text-gray-600 hover:underline">
            Blog
          </a>
          <a href="#" class="text-gray-600 hover:underline">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Headser;
