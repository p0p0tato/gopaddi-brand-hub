import type { ComponentType, SVGProps } from "react";
import {
  PodIcon,
  BooksIcon,
  WorkforceIcon,
  SheetsIcon,
  PagesIcon,
  SlidesIcon,
} from "@/components/icons/AppIcons";
import pagesFlat from "@/assets/pages/pages-flat.svg";
import pagesGrayscaleBlack from "@/assets/pages/pages-grayscale-black.svg";
import pagesGrayscaleWhite from "@/assets/pages/pages-grayscale-white.svg";
import pagesIsolated from "@/assets/pages/pages-isolated.svg";
import pagesGlass from "@/assets/pages/pages-glass.svg";
import pagesLight from "@/assets/pages/pages-light.svg";

export type AppKey = "pod" | "books" | "workforce" | "sheets" | "pages" | "slides";

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
  },
  {
    key: "sheets",
    name: "Sheets",
    tagline: "Spreadsheets, reimagined.",
    description:
      "Sheets is a collaborative spreadsheet built for the speed of modern data work.",
    primaryHex: "#F59E0B",
    secondaryHex: "#92400E",
    neutralHex: "#1C1410",
    token: "sheets",
    placeholderColor: true,
    Icon: SheetsIcon,
    voiceTone:
      "[PLACEHOLDER] Sharp, capable, unfussy. Sheets gets out of your way and lets the numbers talk.",
    href: "/apps/sheets",
  },
  {
    key: "pages",
    name: "Pages",
    tagline: "Docs that think with you.",
    description:
      "Pages is a flexible documents app that scales from a quick note to a full knowledge base.",
    primaryHex: "#A855F7",
    secondaryHex: "#581C87",
    neutralHex: "#1A0F2A",
    token: "pages",
    placeholderColor: true,
    Icon: PagesIcon,
    voiceTone:
      "[PLACEHOLDER] Considered, articulate, generous. Pages writes the way you wish you wrote on your best day.",
    href: "/apps/pages",
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
  },
];

export const APP_MAP = APPS.reduce<Record<AppKey, AppMeta>>((acc, a) => {
  acc[a.key] = a;
  return acc;
}, {} as Record<AppKey, AppMeta>);
