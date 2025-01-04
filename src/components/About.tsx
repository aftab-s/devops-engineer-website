import React from 'react';
import { Code2, GitBranch, Container } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Infrastructure as Code', desc: 'Terraform, CloudFormation, Ansible' },
    { icon: <GitBranch className="w-6 h-6" />, title: 'CI/CD', desc: 'Jenkins, GitHub Actions, GitLab CI' },
    { icon: <Container className="w-6 h-6" />, title: 'Containerization', desc: 'Docker, Kubernetes, ECS' },
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate DevOps Engineer with expertise in building and maintaining scalable cloud infrastructure. 
              My focus is on automating deployment processes and implementing robust CI/CD pipelines to streamline 
              software delivery.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              With experience across major cloud platforms and modern DevOps tools, I help teams deliver software 
              faster and more reliably.
            </p>
          </div>
          
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                <div className="text-emerald-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}