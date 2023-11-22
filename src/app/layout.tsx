import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Roboto_Slab } from "next/font/google";

import "@/styles/globals.css";
import ClientProviders from "./ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Optimancy",
  description: "A character builder for Optimancers",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} ${roboto_slab.variable} font-sans bg-background text-foreground`}
        >
          <ClientProviders>{children}</ClientProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
