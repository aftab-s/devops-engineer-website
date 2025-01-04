import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            DevOps Engineer
          </h1>
          
          <div className="mt-12 flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6 text-gray-400 hover:text-emerald-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}