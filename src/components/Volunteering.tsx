import React from 'react';
import { Heart } from 'lucide-react';

type VolunteerWork = {
  organization: string;
  role: string;
  period: string;
  description: string;
};

const volunteerWork: VolunteerWork[] = [
  {
    organization: "Tech4Good",
    role: "Technical Mentor",
    period: "2022 - Present",
    description: "Mentoring underprivileged students in cloud computing and DevOps practices"
  },
  {
    organization: "Open Source Community",
    role: "Contributor",
    period: "2021 - Present",
    description: "Contributing to various open-source infrastructure tools and documentation"
  }
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Volunteering
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {volunteerWork.map((work, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-emerald-400/50 transition-colors">
              <Heart className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{work.organization}</h3>
              <p className="text-emerald-400 mb-2">{work.role}</p>
              <p className="text-gray-400 mb-2">{work.period}</p>
              <p className="text-gray-400">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}