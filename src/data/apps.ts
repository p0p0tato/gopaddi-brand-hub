import type { ComponentType, SVGProps } from "react";
import {
  PodIcon,
  BooksIcon,
  WorkforceIcon,
  SheetsIcon,
  PagesIcon,
  SlidesIcon,
  CallConnectIcon,
  WorkspaceIcon,
  TravelOsIcon,
  RestaurantOsIcon,
  NightlifeOsIcon,
  EventsOsIcon,
} from "@/components/icons/AppIcons";
import pagesFlat from "@/assets/pages/pages-flat.svg";
import pagesGrayscaleBlack from "@/assets/pages/pages-grayscale-black.svg";
import pagesGrayscaleWhite from "@/assets/pages/pages-grayscale-white.svg";
import pagesIsolated from "@/assets/pages/pages-isolated.svg";
import pagesGlass from "@/assets/pages/pages-glass.svg";
import pagesLight from "@/assets/pages/pages-light.svg";
import slidesFlat from "@/assets/slides/slides-flat.svg";
import slidesIsolated from "@/assets/slides/slides-isolated.svg";
import slidesLight from "@/assets/slides/slides-light.svg";
import slidesGlass from "@/assets/slides/slides-glass.svg";
import slidesGrayscaleBlack from "@/assets/slides/slides-grayscale-black.svg";
import slidesGrayscaleWhite from "@/assets/slides/slides-grayscale-white.svg";
import workforceFlat from "@/assets/workforce/workforce-flat.svg";
import workforceIsolated from "@/assets/workforce/workforce-isolated.svg";
import workforceLight from "@/assets/workforce/workforce-light.svg";
import workforceGlass from "@/assets/workforce/workforce-glass.svg";
import workforceGrayscaleBlack from "@/assets/workforce/workforce-grayscale-black.svg";
import workforceGrayscaleWhite from "@/assets/workforce/workforce-grayscale-white.svg";
import podFlat from "@/assets/pod/pod-flat.svg";
import podIsolated from "@/assets/pod/pod-isolated.svg";
import podLight from "@/assets/pod/pod-light.svg";
import podGlass from "@/assets/pod/pod-glass.svg";
import podGrayscaleBlack from "@/assets/pod/pod-grayscale-black.svg";
import podGrayscaleWhite from "@/assets/pod/pod-grayscale-white.svg";
import booksFlat from "@/assets/books/books-flat.svg";
import booksIsolated from "@/assets/books/books-isolated.svg";
import booksLight from "@/assets/books/books-light.svg";
import booksGlass from "@/assets/books/books-glass.svg";
import booksGrayscaleBlack from "@/assets/books/books-grayscale-black.svg";
import booksGrayscaleWhite from "@/assets/books/books-grayscale-white.svg";
import sheetsLogo from "@/assets/apps/sheets.svg";
import callConnectLogo from "@/assets/apps/callconnect.svg";
import workspaceLogo from "@/assets/apps/workspace.svg";
import travelOsLogo from "@/assets/solutions/travel-os.svg";
import restaurantOsLogo from "@/assets/solutions/restaurant-os.svg";
import nightlifeOsLogo from "@/assets/solutions/nightlife-os.svg";
import eventsOsLogo from "@/assets/solutions/events-os.svg";

export type AppKey =
  | "pod"
  | "books"
  | "workforce"
  | "sheets"
  | "pages"
  | "slides"
  | "callconnect"
  | "workspace"
  | "travel-os"
  | "restaurant-os"
  | "nightlife-os"
  | "events-os";

export type AppCategory = "app" | "solution";

export interface AppMeta {
  key: AppKey;
  name: string;
  tagline: string;
  description: string;
  /** Primary brand hex */
  primaryHex: string;
  /** Secondary supporting hex */
  secondaryHex: string;
  /** Neutral hex (text/UI surface accent) */
  neutralHex: string;
  /** CSS var token name (without --), e.g. "pod" */
  token: string;
  /** Whether the color is a placeholder pending decision */
  placeholderColor?: boolean;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  voiceTone: string;
  href: string;
  /** Whether this is a core app or a vertical solution */
  category?: AppCategory;
  /** Downloadable main logo (SVG URL) */
  logoSrc?: string;
  /** Optional alternate logo treatments shown on the app page */
  variants?: LogoVariant[];
}

export interface LogoVariant {
  name: string;
  description: string;
  src: string;
  /** Background swatch behind the logo in the preview tile */
  background: string;
  /** Whether the tile chrome should use dark text */
  textDark?: boolean;
}

export const APPS: AppMeta[] = [
  {
    key: "pod",
    name: "Pod",
    tagline: "Team messaging, threaded.",
    description:
      "Pod brings synchronous and async conversations into one focused workspace for product teams.",
    primaryHex: "#4D61FE",
    secondaryHex: "#AEB7FF",
    neutralHex: "#0F172A",
    token: "pod",
    Icon: PodIcon,
    voiceTone:
      "[PLACEHOLDER] Friendly, energetic, never noisy. Pod's voice is the helpful colleague who keeps conversations on track.",
    href: "/apps/pod",
    logoSrc: podFlat,
    variants: [
      {
        name: "Plain",
        description: "The default flat logo on its native brand surface.",
        src: podFlat,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Isolated",
        description: "Standalone speech mark without the circular container — for tight spaces.",
        src: podIsolated,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Light color",
        description: "Soft tint variant for marketing surfaces and pastel backgrounds.",
        src: podLight,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Glass",
        description: "Translucent treatment for layered hero compositions and dark imagery.",
        src: podGlass,
        background: "linear-gradient(135deg, #4D61FE 0%, #1A2580 100%)",
      },
      {
        name: "Grayscale — black",
        description: "Single-color black variant for print, embossing, or monochrome contexts.",
        src: podGrayscaleBlack,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Grayscale — white",
        description: "Reversed monochrome for use on dark photography and brand color blocks.",
        src: podGrayscaleWhite,
        background: "hsl(222 24% 7%)",
      },
    ],
  },
  {
    key: "books",
    name: "Books",
    tagline: "Finance for modern teams.",
    description:
      "Books turns bookkeeping into a calm, structured experience — built for operators, not accountants.",
    primaryHex: "#17A57D",
    secondaryHex: "#A6E0D0",
    neutralHex: "#0B1F19",
    token: "books",
    Icon: BooksIcon,
    voiceTone:
      "[PLACEHOLDER] Trustworthy, precise, reassuring. Books speaks with the quiet confidence of a great accountant.",
    href: "/apps/books",
    logoSrc: booksFlat,
    variants: [
      {
        name: "Plain",
        description: "The default flat logo on its native brand surface.",
        src: booksFlat,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Isolated",
        description: "Standalone book mark without the circular container — for tight spaces.",
        src: booksIsolated,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Light color",
        description: "Soft tint variant for marketing surfaces and pastel backgrounds.",
        src: booksLight,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Glass",
        description: "Translucent treatment for layered hero compositions and dark imagery.",
        src: booksGlass,
        background: "linear-gradient(135deg, #17A57D 0%, #08402F 100%)",
      },
      {
        name: "Grayscale — black",
        description: "Single-color black variant for print, embossing, or monochrome contexts.",
        src: booksGrayscaleBlack,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Grayscale — white",
        description: "Reversed monochrome for use on dark photography and brand color blocks.",
        src: booksGrayscaleWhite,
        background: "hsl(222 24% 7%)",
      },
    ],
  },
  {
    key: "workforce",
    name: "Workforce",
    tagline: "People operations, simplified.",
    description:
      "Workforce centralizes hiring, onboarding, and HR workflows in a single source of truth.",
    primaryHex: "#51BCF5",
    secondaryHex: "#B7E3FB",
    neutralHex: "#0F172A",
    token: "workforce",
    Icon: WorkforceIcon,
    voiceTone:
      "[PLACEHOLDER] Human, structured, empathetic. Workforce sounds like the HR partner everyone wishes they had.",
    href: "/apps/workforce",
    logoSrc: workforceFlat,
    variants: [
      {
        name: "Plain",
        description: "The default flat logo on its native brand surface.",
        src: workforceFlat,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Isolated",
        description: "Standalone people mark without the circular container — for tight spaces.",
        src: workforceIsolated,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Light color",
        description: "Soft tint variant for marketing surfaces and pastel backgrounds.",
        src: workforceLight,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Glass",
        description: "Translucent treatment for layered hero compositions and dark imagery.",
        src: workforceGlass,
        background: "linear-gradient(135deg, #51BCF5 0%, #0A6DA3 100%)",
      },
      {
        name: "Grayscale — black",
        description: "Single-color black variant for print, embossing, or monochrome contexts.",
        src: workforceGrayscaleBlack,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Grayscale — white",
        description: "Reversed monochrome for use on dark photography and brand color blocks.",
        src: workforceGrayscaleWhite,
        background: "hsl(222 24% 7%)",
      },
    ],
  },
  {
    key: "sheets",
    name: "Sheets",
    tagline: "Spreadsheets, reimagined.",
    description:
      "Sheets is a collaborative spreadsheet built for the speed of modern data work.",
    primaryHex: "#278C59",
    secondaryHex: "#D4E8DE",
    neutralHex: "#0B2018",
    token: "sheets",
    Icon: SheetsIcon,
    voiceTone:
      "[PLACEHOLDER] Sharp, capable, unfussy. Sheets gets out of your way and lets the numbers talk.",
    href: "/apps/sheets",
    logoSrc: sheetsLogo,
  },
  {
    key: "pages",
    name: "Docs",
    tagline: "Docs that think with you.",
    description:
      "Docs is a flexible documents app that scales from a quick note to a full knowledge base.",
    primaryHex: "#2881F4",
    secondaryHex: "#C3DCFC",
    neutralHex: "#0B2A5C",
    token: "pages",
    Icon: PagesIcon,
    voiceTone:
      "[PLACEHOLDER] Considered, articulate, generous. Docs writes the way you wish you wrote on your best day.",
    href: "/apps/pages",
    logoSrc: pagesFlat,
    variants: [
      {
        name: "Plain",
        description: "The default flat logo on its native brand surface.",
        src: pagesFlat,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Isolated",
        description: "Standalone document mark without the circular container — for tight spaces.",
        src: pagesIsolated,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Light color",
        description: "Soft tint variant for marketing surfaces and pastel backgrounds.",
        src: pagesLight,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Glass",
        description: "Translucent treatment for layered hero compositions and dark imagery.",
        src: pagesGlass,
        background: "linear-gradient(135deg, #2881F4 0%, #0B3F8A 100%)",
      },
      {
        name: "Grayscale — black",
        description: "Single-color black variant for print, embossing, or monochrome contexts.",
        src: pagesGrayscaleBlack,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Grayscale — white",
        description: "Reversed monochrome for use on dark photography and brand color blocks.",
        src: pagesGrayscaleWhite,
        background: "hsl(222 24% 7%)",
      },
    ],
  },
  {
    key: "slides",
    name: "Slides",
    tagline: "Presentations with taste.",
    description:
      "Slides helps teams craft beautiful, opinionated presentations without fighting the editor.",
    primaryHex: "#FF920A",
    secondaryHex: "#FFCD8F",
    neutralHex: "#1A1006",
    token: "slides",
    Icon: SlidesIcon,
    voiceTone:
      "[PLACEHOLDER] Bold, expressive, decisive. Slides is the creative director in the room.",
    href: "/apps/slides",
    logoSrc: slidesFlat,
    variants: [
      {
        name: "Plain",
        description: "The default flat logo on its native brand surface.",
        src: slidesFlat,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Isolated",
        description: "Standalone slide mark without the circular container — for tight spaces.",
        src: slidesIsolated,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Light color",
        description: "Soft tint variant for marketing surfaces and pastel backgrounds.",
        src: slidesLight,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Glass",
        description: "Translucent treatment for layered hero compositions and dark imagery.",
        src: slidesGlass,
        background: "linear-gradient(135deg, #FF920A 0%, #8A4A00 100%)",
      },
      {
        name: "Grayscale — black",
        description: "Single-color black variant for print, embossing, or monochrome contexts.",
        src: slidesGrayscaleBlack,
        background: "hsl(0 0% 100%)",
        textDark: true,
      },
      {
        name: "Grayscale — white",
        description: "Reversed monochrome for use on dark photography and brand color blocks.",
        src: slidesGrayscaleWhite,
        background: "hsl(222 24% 7%)",
      },
    ],
  },
  {
    key: "callconnect",
    name: "Call Connect",
    tagline: "Voice calls without the friction.",
    description:
      "Call Connect powers crystal-clear voice and contact sync across the Gopaddi suite.",
    primaryHex: "#7D23F2",
    secondaryHex: "#D6BFFB",
    neutralHex: "#1A0A33",
    token: "callconnect",
    Icon: CallConnectIcon,
    voiceTone:
      "[PLACEHOLDER] Direct, warm, dependable. Call Connect speaks like the person you actually want on the line.",
    href: "/apps/callconnect",
    logoSrc: callConnectLogo,
    category: "app",
  },
  {
    key: "workspace",
    name: "Workspace",
    tagline: "The home for everything Gopaddi.",
    description:
      "Workspace is the unified shell that ties every Gopaddi app, file, and person together.",
    primaryHex: "#0D6EFD",
    secondaryHex: "#85BAFF",
    neutralHex: "#0A1A33",
    token: "workspace",
    Icon: WorkspaceIcon,
    voiceTone:
      "[PLACEHOLDER] Calm, structural, foundational. Workspace is the quiet host that makes everything else feel at home.",
    href: "/apps/workspace",
    logoSrc: workspaceLogo,
    category: "app",
  },
  {
    key: "travel-os",
    name: "Travel OS",
    tagline: "Operations for travel businesses.",
    description:
      "Travel OS is Gopaddi's vertical solution for tour operators, agencies, and travel brands.",
    primaryHex: "#4186F3",
    secondaryHex: "#94BBF8",
    neutralHex: "#0A1F45",
    token: "travel-os",
    Icon: TravelOsIcon,
    voiceTone:
      "[PLACEHOLDER] Confident, journey-led, expansive. Travel OS sounds like the operator who has seen it all.",
    href: "/apps/travel-os",
    logoSrc: travelOsLogo,
    category: "solution",
  },
  {
    key: "restaurant-os",
    name: "Restaurant OS",
    tagline: "The back-of-house, reimagined.",
    description:
      "Restaurant OS unifies orders, inventory, and floor operations for modern hospitality teams.",
    primaryHex: "#E65151",
    secondaryHex: "#F6C0C0",
    neutralHex: "#3A0A0A",
    token: "restaurant-os",
    Icon: RestaurantOsIcon,
    voiceTone:
      "[PLACEHOLDER] Hospitable, decisive, service-led. Restaurant OS speaks like a great GM on a Saturday night.",
    href: "/apps/restaurant-os",
    logoSrc: restaurantOsLogo,
    category: "solution",
  },
  {
    key: "nightlife-os",
    name: "Nightlife OS",
    tagline: "Run the room, after dark.",
    description:
      "Nightlife OS handles guestlists, table service, and door flow for clubs and late-night venues.",
    primaryHex: "#7A2BC1",
    secondaryHex: "#CAAAE6",
    neutralHex: "#1A0833",
    token: "nightlife-os",
    Icon: NightlifeOsIcon,
    voiceTone:
      "[PLACEHOLDER] Bold, atmospheric, after-hours. Nightlife OS sounds like the host who owns the night.",
    href: "/apps/nightlife-os",
    logoSrc: nightlifeOsLogo,
    category: "solution",
  },
  {
    key: "events-os",
    name: "Events OS",
    tagline: "Plan, ticket, run — end to end.",
    description:
      "Events OS powers ticketing, attendee flow, and on-site operations for live experiences.",
    primaryHex: "#FA386C",
    secondaryHex: "#FED7E2",
    neutralHex: "#3A0A1F",
    token: "events-os",
    Icon: EventsOsIcon,
    voiceTone:
      "[PLACEHOLDER] Energetic, organized, showtime-ready. Events OS sounds like the producer who keeps the run-of-show humming.",
    href: "/apps/events-os",
    logoSrc: eventsOsLogo,
    category: "solution",
  },
];

export const APP_MAP = APPS.reduce<Record<AppKey, AppMeta>>((acc, a) => {
  acc[a.key] = a;
  return acc;
}, {} as Record<AppKey, AppMeta>);

export const CORE_APPS = APPS.filter((a) => a.category !== "solution");
export const SOLUTIONS = APPS.filter((a) => a.category === "solution");
