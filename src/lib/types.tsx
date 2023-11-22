import { type } from "os";

export type SegmentConfig = {
  segmentRoute: string;
  title?: string;
  subtitle?: string;
  description?: string;
  navLinks?: NavLink[];
};

export type NavLink = {
  name: string;
  href: string;
};

export type TShirtSizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
