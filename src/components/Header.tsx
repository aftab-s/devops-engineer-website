import React from 'react';
import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span className="text-white font-semibold">Aftab | Mehrab</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Projects</a>
            <a href="https://aftabs.hashnode.dev/" className="text-gray-300 hover:text-emerald-400 transition-colors">Blogs</a>
            <a href="#contact" 
               className="px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg border border-emerald-400/20 
                        hover:bg-emerald-400/20 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}