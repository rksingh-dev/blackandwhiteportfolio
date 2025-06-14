import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'github',
    href: 'https://github.com/rksingh-dev/',
    icon: Github,
    ariaLabel: 'GitHub Profile'
  },
  {
    name: 'email',
    href: 'mailto:rahul2004ruby@gmail.com',
    icon: Mail,
    ariaLabel: 'Send Email'
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/rahul-kumar-singh-1a14401ba/',
    icon: Linkedin,
    ariaLabel: 'LinkedIn Profile'
  },
  {
    name: 'portfolio',
    href: 'https://rahulkumarsingh.vercel.app ',
    icon: ExternalLink,
    ariaLabel: 'Portfolio Website'
  }
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-row gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden transition-all text-zinc-900/60 dark:text-zinc-100/60 hover:text-zinc-900/100 dark:hover:text-zinc-100/100"
            href={link.href}
            aria-label={link.ariaLabel}
          >
            <p className="sr-only">{link.name}</p>
            <link.icon className="transition-all h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}