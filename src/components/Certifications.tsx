import React from 'react';
import { Award } from 'lucide-react';

type Certification = {
  name: string;
  issuer: string;
  date: string;
};

const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022"
  },
  {
    name: "HashiCorp Certified Terraform Associate",
    issuer: "HashiCorp",
    date: "2022"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-emerald-400/50 transition-colors">
              <Award className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-emerald-400 mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}