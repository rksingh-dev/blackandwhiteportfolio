import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl,
  delay = 0 
}: ProjectCardProps) {
  return (
    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="text-md font-medium">{title}</h3>
        <div className="flex flex-row gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              View <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={tech} className="text-xs text-zinc-400 dark:text-zinc-500">
            {tech}{index < technologies.length - 1 ? ' /' : ''}
          </span>
        ))}
      </div>
    </li>
  );
}