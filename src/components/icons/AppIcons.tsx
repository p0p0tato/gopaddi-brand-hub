import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* All icons follow a 64x64 viewBox with a 14px rounded-square container.
   Color is driven by `color` prop (currentColor) so they re-tint per app. */

const Squircle = ({ children, color = "currentColor", ...rest }: IconProps & { color?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <rect width="64" height="64" rx="14" fill={color} />
    {children}
  </svg>
);

export const PodIcon = (props: IconProps) => (
  <Squircle color="hsl(var(--pod))" {...props}>
    <path
      d="M20 24c0-3.3 2.7-6 6-6h12c3.3 0 6 2.7 6 6v8c0 3.3-2.7 6-6 6h-6l-7 6v-6h-1c-2.2 0-4-1.8-4-4v-10z"
      fill="white"
      opacity="0.95"
    />
    <circle cx="29" cy="29" r="2" fill="hsl(var(--pod))" />
    <circle cx="35" cy="29" r="2" fill="hsl(var(--pod))" />
  </Squircle>
);

export const BooksIcon = (props: IconProps) => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 55C0 9.7075 9.7075 0 55 0C100.292 0 110 9.7075 110 55C110 100.292 100.292 110 55 110C9.7075 110 0 100.292 0 55Z"
      fill="#17A57D"
    />
    <path
      d="M44.488 34.4842C44.488 31.0726 46.917 28.1444 50.2699 27.514L79.1858 22.0774C83.5515 21.2566 87.5887 24.6054 87.5887 29.0476V81.9079C87.5887 86.3501 83.5515 89.699 79.1858 88.8781L50.2699 83.4415C46.917 82.8111 44.488 79.8829 44.488 76.4713V34.4842Z"
      fill="#A6E0D0"
    />
    <path
      d="M22.0002 32.5811C22.0002 29.1625 24.4389 26.2304 27.8002 25.6075L60.464 19.5539C64.8245 18.7458 68.8487 22.0928 68.8487 26.5275V84.43C68.8487 88.8648 64.8245 92.2118 60.464 91.4037L27.8002 85.3501C24.4389 84.7272 22.0002 81.7951 22.0002 78.3765V32.5811Z"
      fill="white"
    />
  </svg>
);

export const WorkforceIcon = (props: IconProps) => (
  <Squircle color="hsl(var(--workforce))" {...props}>
    <circle cx="25" cy="26" r="5" fill="white" />
    <circle cx="39" cy="26" r="5" fill="white" opacity="0.85" />
    <path
      d="M16 44c0-4.4 4-8 9-8s9 3.6 9 8v2H16v-2zM30 44c0-4.4 4-8 9-8s9 3.6 9 8v2H30v-2z"
      fill="white"
      opacity="0.9"
    />
  </Squircle>
);

export const SheetsIcon = (props: IconProps) => (
  <Squircle color="hsl(var(--sheets))" {...props}>
    <rect x="16" y="16" width="32" height="32" rx="3" fill="white" opacity="0.95" />
    <path
      d="M16 26h32M16 36h32M26 16v32M36 16v32"
      stroke="hsl(var(--sheets))"
      strokeWidth="2"
    />
    <rect x="16" y="16" width="10" height="10" fill="hsl(var(--sheets))" opacity="0.25" />
  </Squircle>
);

export const PagesIcon = (props: IconProps) => (
  <Squircle color="hsl(var(--pages))" {...props}>
    <path
      d="M22 16h14l8 8v22a2 2 0 0 1-2 2H22a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2z"
      fill="white"
      opacity="0.95"
    />
    <path d="M36 16v8h8" stroke="hsl(var(--pages))" strokeWidth="2" fill="none" />
    <path
      d="M26 32h12M26 37h12M26 42h8"
      stroke="hsl(var(--pages))"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </Squircle>
);

export const SlidesIcon = (props: IconProps) => (
  <Squircle color="hsl(var(--slides))" {...props}>
    <rect x="14" y="18" width="36" height="22" rx="2" fill="white" opacity="0.95" />
    <path d="M22 28l5 5 6-7 9 10H22z" fill="hsl(var(--slides))" opacity="0.6" />
    <circle cx="40" cy="25" r="2.5" fill="hsl(var(--slides))" opacity="0.7" />
    <rect x="26" y="44" width="12" height="2" rx="1" fill="white" opacity="0.6" />
  </Squircle>
);

/* Parent brand mark */
export const GoPaddiMark = (props: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="64" height="64" rx="16" fill="url(#gp-grad)" />
    <path
      d="M20 32c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12h-4v-6h4a6 6 0 1 0-6-6v18h-6V32z"
      fill="white"
    />
    <defs>
      <linearGradient id="gp-grad" x1="0" y1="0" x2="64" y2="64">
        <stop offset="0%" stopColor="hsl(var(--pod))" />
        <stop offset="100%" stopColor="hsl(var(--slides))" />
      </linearGradient>
    </defs>
  </svg>
);
