import React from 'react';
import { Building2, Calendar } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Cloud Solutions Inc",
    position: "Senior DevOps Engineer",
    period: "2021 - Present",
    description: [
      "Led implementation of GitOps practices reducing deployment time by 60%",
      "Architected and maintained multi-cloud infrastructure serving 1M+ users",
      "Automated CI/CD pipelines for 20+ microservices"
    ]
  },
  {
    company: "Tech Innovators",
    position: "DevOps Engineer",
    period: "2019 - 2021",
    description: [
      "Implemented container orchestration using Kubernetes",
      "Reduced infrastructure costs by 40% through optimization",
      "Developed automated disaster recovery procedures"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6 hover:border-emerald-400/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-emerald-400 mb-4">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}