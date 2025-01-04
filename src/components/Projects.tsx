import React from 'react';
import { Github, Globe, Server } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Cloud Cost Optimizer",
    description: "Automated cloud resource management tool that reduced AWS costs by 35% through intelligent resource scheduling and right-sizing recommendations.",
    technologies: ["Python", "AWS Lambda", "DynamoDB", "Terraform"],
    githubUrl: "https://github.com"
  },
  {
    title: "Kubernetes Monitoring Stack",
    description: "Custom monitoring solution combining Prometheus, Grafana, and custom exporters for comprehensive cluster insights.",
    technologies: ["Kubernetes", "Prometheus", "Grafana", "Go"],
    liveUrl: "https://demo.example.com"
  },
  {
    title: "GitOps Pipeline Framework",
    description: "Standardized CI/CD framework using ArgoCD and GitHub Actions, reducing deployment time from hours to minutes.",
    technologies: ["ArgoCD", "GitHub Actions", "Kubernetes", "Helm"],
    githubUrl: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-emerald-400/50 transition-colors">
              <Server className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-emerald-400">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}