import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 7 8.2 5.6a1.4 1.4 0 0 0 1.6 0L21 7" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.8c-2.92.64-3.54-1.25-3.54-1.25-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.62 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.42-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.46.21 2.53.1 2.8.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

export function BlogIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3.5h9.5L19 8v12.5H5z" />
      <path d="M14 3.5V8h5" />
      <path d="M8.5 12.5h7M8.5 16h4.5" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.5 7.2a2.8 2.8 0 0 0-1.96-1.98C18.8 4.75 12 4.75 12 4.75s-6.8 0-8.54.47A2.8 2.8 0 0 0 1.5 7.2 29.2 29.2 0 0 0 1 12a29.2 29.2 0 0 0 .5 4.8 2.8 2.8 0 0 0 1.96 1.98c1.74.47 8.54.47 8.54.47s6.8 0 8.54-.47a2.8 2.8 0 0 0 1.96-1.98A29.2 29.2 0 0 0 23 12a29.2 29.2 0 0 0-.5-4.8ZM9.9 15.3V8.7l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

export function SpotifyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.6a10.4 10.4 0 1 0 0 20.8 10.4 10.4 0 0 0 0-20.8Zm4.77 15a.81.81 0 0 1-1.11.27c-3.06-1.87-6.9-2.29-11.43-1.26a.81.81 0 1 1-.36-1.58c4.96-1.13 9.22-.65 12.63 1.44.38.23.5.73.27 1.13Zm1.27-2.83a1.01 1.01 0 0 1-1.39.33c-3.5-2.15-8.84-2.78-12.98-1.52a1.01 1.01 0 1 1-.59-1.94c4.73-1.44 10.61-.74 14.63 1.74.47.29.62.91.33 1.39Zm.11-2.95C14 8.34 7.5 8.1 3.68 9.26a1.21 1.21 0 1 1-.7-2.32C7.36 5.6 14.54 5.88 19.2 8.64a1.21 1.21 0 1 1-1.24 2.08Z" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
    </svg>
  );
}

export const socialIcons = {
  mail: MailIcon,
  github: GithubIcon,
  blog: BlogIcon,
  youtube: YoutubeIcon,
  spotify: SpotifyIcon,
};
