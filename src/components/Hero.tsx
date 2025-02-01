"use client"; // Ensure this is at the top for Client Component

import { ArrowDownIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-slide-up">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-gray-700 opacity-10 text-9xl font-mono whitespace-nowrap">
              {"{".repeat((i % 3) + 1)} const developer = "Dafina Gashi"; {"}".repeat((i % 3) + 1)}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
          Dafina Gashi
          <span className="text-blue-400 animate-pulse">_</span>
        </h1>
        <p className="text-2xl mb-8 animate-fade-in-up font-mono">
          <span className="text-blue-400">const</span> skills = [<span className="text-green-400">"Web Developer"</span>
          ,<span className="text-green-400">"UI/UX Designer"</span>,
          <span className="text-green-400">"Problem Solver"</span>];
        </p>
        <div className="flex justify-center"> {/* Add this wrapper div */}
          <button
            className="animate-bounce bg-white text-gray-900 hover:bg-blue-500 hover:text-white transition-colors duration-300 py-2 px-6 rounded-full text-lg font-semibold flex items-center"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
            <ArrowDownIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}