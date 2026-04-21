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
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0 55C0 9.7075 9.7075 0 55 0C100.292 0 110 9.7075 110 55C110 100.292 100.292 110 55 110C9.7075 110 0 100.292 0 55Z"
      fill="#4D61FE"
    />
    <path
      d="M59.0679 45.6401C43.1043 45.6402 39.6828 48.5627 39.6828 62.1982V63.1642C39.6828 76.7997 43.1043 79.7223 59.0679 79.7223H67.1387L81.2305 84.9218C82.0446 85.2221 82.9089 84.6197 82.9089 83.752V78.2428C88.1476 76.2594 89.5591 71.9215 89.5591 63.1642V62.1982C89.5591 48.5627 86.1375 45.6402 70.174 45.6401H59.0679Z"
      fill="#AEB7FF"
    />
    <path
      d="M55.0996 29.9966C74.4806 29.9966 78.6346 33.5448 78.6346 50.0993V51.2721C78.6346 67.8266 74.4806 71.3748 55.0996 71.3748H45.3011L28.1925 77.6874C27.2041 78.052 26.1549 77.3207 26.1549 76.2672V69.5786C19.7947 67.1706 18.0811 61.9041 18.0811 51.2721V50.0993C18.0811 33.5448 22.2351 29.9966 41.616 29.9966H55.0996Z"
      fill="white"
    />
    <path
      d="M86.1676 33.1241C88.9615 33.1241 91.2265 35.3832 91.2265 38.17C91.2265 40.9569 88.9615 43.216 86.1676 43.216C83.3736 43.216 81.1087 40.9569 81.1087 38.17C81.1087 35.3832 83.3736 33.1241 86.1676 33.1241Z"
      fill="#AEB7FF"
    />
    <path
      d="M78.4461 25.1567C80.2107 25.1567 81.6412 26.5836 81.6412 28.3437C81.6412 30.1038 80.2107 31.5306 78.4461 31.5306C76.6815 31.5306 75.251 30.1038 75.251 28.3437C75.251 26.5836 76.6815 25.1567 78.4461 25.1567Z"
      fill="#AEB7FF"
    />
  </svg>
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
import gopaddiLogo from "@/assets/gopaddi-logo.svg";

export const GoPaddiMark = ({ className, style, ...rest }: IconProps) => (
  <img
    src={gopaddiLogo}
    alt="Gopaddi"
    className={className}
    style={style}
    {...(rest as object)}
  />
);
