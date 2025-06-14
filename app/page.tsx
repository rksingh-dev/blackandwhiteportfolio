'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { SocialLinks } from '@/components/social-links';
import { ProjectCard } from '@/components/project-card';
import { ExperienceCard } from '@/components/experience-card';
import { TechIcon } from '@/components/tech-icon';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

const projects = [
  {
    title: 'SARA Store',
    description: 'Developed a luxury E-commerce platform with dual payment systems (ETH/Razorpay) and MetaMask integration, achieving better user engagement.',
    technologies: ['React', 'TypeScript', 'Web3.js', 'MetaMask', 'Razorpay API', 'Magic SDK'],
    githubUrl: 'https://github.com/rksingh-dev/SARA',
    liveUrl: 'https://sara-self.vercel.app'
  },
  {
    title: 'RockSense (Built during CodeUtsava Hackathon)',
    description: 'Developed a responsive full-stack rock classification platform using FastAPI, React.js ensuring high availability and scalability with a 30% improvement in performance. Engineered an ML pipeline leveraging K-means and DBSCAN clustering algorithms, achieving 95% accuracy while reducing classification time by 60%.',
    technologies: ['HTML', 'CSS', 'JS', 'FastAPI', 'K-means Algorithm', 'DBSCAN', 'Vercel', 'Render'],
    githubUrl: 'https://github.com/rksingh-dev/RockSense',
    liveUrl: 'https://rksingh-dev.github.io/RockSense/'
  },
  {
    title: 'AI Code Analysis Tool',
    description: 'Architected a comprehensive code review ecosystem utilizing React.js and Node.js with Express microservices architecture improving code review speed by 50%. Integrated the Gemini 2.0 Flash model to analyze user-submitted code, provide detailed reviews, and correct mistakes accurately, enhancing detection accuracy by 80%.',
    technologies: ['React.js', 'Node.js', 'Express', 'Gemini 2.0 Flash'],
    githubUrl: 'https://github.com/rksingh-dev/ai-code-reviewer',
    liveUrl: 'https://rksingh-dev.github.io/code-review/'
  },
  {
    title: 'FileForge',
    description: 'Architected a client-side image compression system achieving 70% size reduction while maintaining 95% visual quality, with support for batch processing and drag-and-drop functionality. Implemented a robust image-to-PDF conversion engine featuring multi-image merging, customizable page layouts, and quality preservation with real-time preview.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'pdf-lib', 'pdf.js', 'exif-js', 'FileSaver.js', 'Vercel'],
    githubUrl: 'https://github.com/rksingh-dev/FileForge',
    liveUrl: 'https://fileforgebyrahul.vercel.app/'
  },
  {
    title: 'RahulVerse - Real-Time Chat Application',
    description: 'RahulVerse is a modern, real-time chat application built with React and Socket.IO. It allows users to join chat rooms with a username and exchange messages in real-time with other connected users. Features include: Real-time messaging, User-friendly interface, Username customization, Message styling, and Responsive design.',
    technologies: ['React 19', 'Socket.IO Client', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
    githubUrl: 'https://github.com/rksingh-dev/rahulverse', 
    liveUrl: 'https://rahulverse.vercel.app/' 
  },
  {
    title: 'SecurePrint (Built during Bihar Cyber Hackathon)',
    description: 'A secure document sharing and printing platform featuring a React frontend with Tailwind CSS. It implements AES-256 encryption, a 6-digit access code system, simulated document watermarking, and comprehensive audit logging for all operations. This platform utilizes Pinata for IPFS integration, providing decentralized and secure storage for documents.',
    technologies: ['React', 'Tailwind CSS', 'crypto-js', 'IPFS', 'Pinata', 'HTML', 'CSS', 'JavaScript', 'UX'],
    githubUrl: 'https://github.com/rksingh-dev/secureshare', // Please provide the GitHub URL for this project
    liveUrl: 'https://secureshare-seven.vercel.app/' // Please provide the Live URL for this project
  },
  {
    title: 'CVCCN - Computer Vision, Communication, Computing and Nanoelectronics (Built for the IEEE event of my college)',
    description: 'I made this for my official upcoming college event for IEEE organisation. A professional website showcasing upcoming events and developments in Computer Vision, Communication, Computing, and Nanoelectronics. Features include responsive design, modern UI with smooth animations, Bootstrap 5, Font Awesome, Google Fonts, Animate.css, and PWA support. ',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Font Awesome', 'Google Fonts', 'Animate.css', 'PWA'],
    githubUrl: 'https://github.com/rksingh-dev/IEEE', // Please provide the GitHub URL for this project
    liveUrl: 'https://cvccn.vercel.app'
  },
  {
    title: 'Modern Weather App',
    description: 'A sleek, responsive weather application providing real-time weather information with a glass-morphic design. Features include real-time weather data for any city, a responsive layout, dynamic time display, and detailed metrics like temperature, humidity, wind speed, pressure, and visibility.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Font Awesome', 'Google Fonts'],
    githubUrl: 'https://github.com/rksingh-dev/Weather-app', // Please provide the GitHub URL for this project
    liveUrl: 'https://weatherappbyrahul.vercel.app/' // Placeholder - please replace with the actual live demo URL
  }
];

const allExperience = [
  {
    title: 'Summer Internship at Asia\'s Second Largest Mines',
    company: 'South Eastern CoalField Limited (EE&T Department), Bilaspur',
    period: 'May\'25 - June\'25 Onsite',
    description: 'Gained hands-on experience in computer network architecture, server infrastructure, and SCADA systems for real-time monitoring and control of mining equipment. Applied advanced technologies including CAD, GIS, Remote Sensing, and ERP systems. Collaborated with engineering teams, troubleshot network issues, and learned cybersecurity protocols.',
    technologies: ['Computer Network Architecture', 'Server Infrastructure Management', 'SCADA Systems', 'CAD Software', 'GIS', 'Remote Sensing', 'ERP Systems', 'Data Visualization Tools', 'System Logs', 'Version Control Systems', 'API Integration', 'Web Services', 'Distributed Systems']
  },
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code',
      period: 'May\'24 - Nov\'24',
      description: 'Engineered responsive navigation components for a Movie Recommender platform, improving mobile user experience by 40% using React.js. Collaborated with 10+ developers using Git workflow, maintaining 100% code quality standards through code reviews.',
      technologies: ['React.js', 'Git', 'Python', 'Machine Learning']
    },
    {
      title: 'Mentor',
      company: 'OpenLinks Foundation (In collaboration with Collector of Raipur)',
      period: 'Sep\'24 - Present',
      description: 'Mentored 30+ students in JEE and NEET, achieving a 90% success rate in skill development. Received appreciation from the Foundation and Collector of Raipur (Dr. Gaurav Kumar Singh, IAS) for contribution and dedication.',
      technologies: [] // No specific technologies mentioned, so leaving empty for now.
  }
];

const technologies = [
  { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'SQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'React.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'WebSockets', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  { name: 'RESTful APIs', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg' },
  { name: 'OAuth', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' },
  { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Postman', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'Bash', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
];

export default function Home() {
  const visibleExperience = allExperience;

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimatedSection delay={0}>
        <section className="mb-12">
          <AnimatedSection delay={0}>
            <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between">
              <span>Hey, I'm Rahul Kumar Singh</span>
              <div className="w-8 h-8"><ThemeToggleButton /></div>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
              Bachelor of Technology in Electronics and Communication Engineering from National Institute of Technology, Raipur. CGPA: 8.85/10.0
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0}>
            <SocialLinks />
          </AnimatedSection>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <section className="mb-12">
          <AnimatedSection delay={0} animation="clip-reveal">
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Projects</h2>
          </AnimatedSection>
          
          <div className="space-y-8">
            <ul className="space-y-8">
              {projects.map((project, index) => (
                <AnimatedSection 
                  key={project.title} 
                  delay={0} 
                  animation="fade-left"
                >
                  <ProjectCard {...project} />
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <section className="mb-12">
          <AnimatedSection delay={0} animation="clip-reveal">
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Experience</h2>
          </AnimatedSection>
          
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleExperience.map((experience, index) => (
                <AnimatedSection 
                  key={experience.title + experience.period} 
                  delay={0} 
                  animation="fade-left"
                >
                  <ExperienceCard {...experience} />
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <section className="mb-12">
          <AnimatedSection delay={0} animation="clip-reveal">
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Skills & Technologies</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-y-6 gap-x-4">
            {technologies.map((tech, index) => (
              <AnimatedSection 
                key={tech.name} 
                delay={0} 
                animation="scale-in"
              >
                <TechIcon {...tech} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <section className="mb-12">
          <AnimatedSection delay={0} animation="clip-reveal">
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Achievements and Position of Responsibility</h2>
          </AnimatedSection>

          <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
            <li>Finalist of <strong>Execute 4.0 Hackathon</strong> at Delhi Technical University, Northern India's Largest hackathon with <strong>3000+</strong> teams from all over the nation.</li>
            <li>NTSE Scholar, Chhattisgarh Vigyaan Paheli (Stage 1) Qualified.</li>
            <li>Achieved <strong>3-star at CodeChef</strong> (Max Rating: 1615), LeetCode (Max Rating: 1603).</li>
            <li>Secured over <strong>70,000</strong> in sponsorships for Eclectika, the largest cultural fest in Central India.</li>
          </ul>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Portfolio 2025 ~RKS</div>
          <div>Built with Next.js</div>
        </footer>
      </AnimatedSection>
    </main>
  );
}
