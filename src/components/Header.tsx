import Link from "next/link";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

import type { SegmentConfig, NavLink } from "@/lib/types";
import { OptimancyBrand } from "@/components/OptimancyBrand";
import { NavLinks } from "@/components/NavLinks";
import { ModeToggle } from "@/styles/ModeToggle";
import { Button } from "@/components/ui/button";

type Props = {
  config?: SegmentConfig;
};

export function Header({ config }: Props) {
  const { title, subtitle, segmentRoute, navLinks } = config ?? {};

  return (
    <header className="py-2">
      <div className="container mx-auto flex flex-col justify-items-center w-full md:flex-row gap-2 md:place-items-center md:justify-between">
        {/* LEFT */}
        <section className="first flex flex-col basis-1/2 lg:basis-1/3 place-items-center justify-center  gap-2 md:flex-row md:justify-start">
          <Button asChild>
            <Link href="/">
              <OptimancyBrand size="3xl" />
            </Link>
          </Button>

          <div className="flex flex-row     ">
            {title && (
              <p className="text-xl whitespace-nowrap font-semibold place-items-center justify-center md:justify-start">
                for <span className="font-extrabold">{title}</span> {subtitle}
              </p>
            )}
          </div>
        </section>

        {/* CENTER */}
        <section className="center basis-auto place-content-center justify-center">
          <NavLinks
            segmentRoute={segmentRoute ?? "/"}
            navLinks={navLinks ?? []}
          />
        </section>
        {/* RIGHT */}
        <section className="right-side basis-1/2 lg:basis-1/3 flex flex-row gap-2 w-full justify-center md:justify-end">
          <ModeToggle />
          <SignedIn>
            {/* Mount the UserButton component */}
            <div className="rounded-full  border-solid border-foreground border-2 p-1 w-11 h-11 place-items-center  justify-center">
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton mode="modal" />
          </SignedOut>
        </section>
      </div>
    </header>
  );
}

export default Header;
