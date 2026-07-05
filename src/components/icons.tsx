import type { ReactNode } from 'react';
import type { IconName } from '../content/site';

const paths: Record<IconName, ReactNode> = {
  logo: (
    <>
      {/* cupped hands holding a sprout, as on the prisliste */}
      <path d="M10 34c3-6 8-7 12-4M38 34c-3-6-8-7-12-4" />
      <path d="M10 34c-2 4 1 8 6 8h16c5 0 8-4 6-8" />
      <path d="M24 30v-8" />
      <path d="M24 22c0-4 3-7 7-7 0 4-3 7-7 7zM24 22c0-4-3-7-7-7 0 4 3 7 7 7z" />
      <path d="M22 8l2-3 2 3M18 11l-1-2M30 11l1-2" strokeWidth="1.5" />
    </>
  ),
  leaf: (
    <path d="M14 34C14 20 24 12 36 12c0 14-8 22-22 22zm0 0c4-8 10-14 16-16" />
  ),
  chat: (
    <>
      <path d="M8 12h20v14H16l-8 6V12z" />
      <path d="M32 18h8v14h-4l-6 5v-5h-6" />
    </>
  ),
  heart: (
    <path d="M24 40S8 30 8 19c0-5 4-9 9-9 4 0 6 2 7 4 1-2 3-4 7-4 5 0 9 4 9 9 0 11-16 21-16 21z" />
  ),
  sprout: (
    <>
      <path d="M24 40V22" />
      <path d="M24 26c0-6 5-11 11-11 0 6-5 11-11 11zM24 22c0-5-4-9-9-9 0 5 4 9 9 9z" />
      <path d="M14 40h20" />
    </>
  ),
  parents: (
    <>
      <circle cx="17" cy="14" r="5" />
      <circle cx="32" cy="17" r="4" />
      <path d="M8 38c0-7 4-12 9-12s9 5 9 12M26 38c0-6 3-10 6-10s6 4 6 10" />
    </>
  ),
  phone: (
    <path d="M14 8c-2 0-5 3-5 6 0 12 13 25 25 25 3 0 6-3 6-5l-7-6-4 3c-4-2-8-6-10-10l3-4-8-9z" />
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
