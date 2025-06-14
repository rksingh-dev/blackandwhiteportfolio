interface ExperienceCardProps {
  title: string;
  company?: string;
  period: string;
  description: string;
  technologies: string[];
  delay?: number;
}

export function ExperienceCard({ 
  title, 
  company, 
  period, 
  description, 
  technologies,
  delay = 0 
}: ExperienceCardProps) {
  return (
    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
        <h3 className="text-md font-medium">
          {title}{company && (
            <>
              <span className="text-zinc-500 dark:text-zinc-400"> at </span>
              {company}
            </>
          )}
        </h3>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">{period}</span>
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