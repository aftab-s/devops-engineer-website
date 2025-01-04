import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Contact Me
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}