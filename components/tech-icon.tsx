interface TechIconProps {
  name: string;
  iconUrl: string;
  delay?: number;
}

export function TechIcon({ name, iconUrl, delay = 0 }: TechIconProps) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative h-6 w-6 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
        <img
          alt={`${name} logo`}
          src={iconUrl}
          className="object-contain drop-shadow-md w-full h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}