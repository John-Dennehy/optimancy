"use client";

import { ThemeProvider } from "@/styles/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export default function ClientProviders({ children }: Props) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
