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
import slidesFlat from "@/assets/slides/slides-flat.svg";
import slidesIsolated from "@/assets/slides/slides-isolated.svg";
import slidesLight from "@/assets/slides/slides-light.svg";
import slidesGlass from "@/assets/slides/slides-glass.svg";
import slidesGrayscaleBlack from "@/assets/slides/slides-grayscale-black.svg";
import slidesGrayscaleWhite from "@/assets/slides/slides-grayscale-white.svg";
import booksFlat from "@/assets/books/books-flat.svg";
import booksIsolated from "@/assets/books/books-isolated.svg";
import booksLight from "@/assets/books/books-light.svg";
import booksGlass from "@/assets/books/books-glass.svg";
import booksGrayscaleBlack from "@/assets/books/books-grayscale-black.svg";
import booksGrayscaleWhite from "@/assets/books/books-grayscale-white.svg";

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
    primaryHex: "#2881F4",
    secondaryHex: "#C3DCFC",
    neutralHex: "#0B2A5C",
    token: "pages",
    Icon: PagesIcon,
    voiceTone:
      "[PLACEHOLDER] Considered, articulate, generous. Pages writes the way you wish you wrote on your best day.",
    href: "/apps/pages",
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
];

export const APP_MAP = APPS.reduce<Record<AppKey, AppMeta>>((acc, a) => {
  acc[a.key] = a;
  return acc;
}, {} as Record<AppKey, AppMeta>);
