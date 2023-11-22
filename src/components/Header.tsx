import type { SegmentConfig, NavLink } from "@/lib/types";
import { OptimancyBrand } from "@/components/OptimancyBrand";
import { NavLinks } from "@/components/NavLinks";
import Link from "next/link";
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
        <div className="flex flex-row  place-items-center gap-2">
          <Button asChild>
            <Link href="/">
              <OptimancyBrand size="3xl" />
            </Link>
          </Button>
          {title && (
            <p className="text-xl font-semibold">
              for <span className="font-extrabold">{title}</span> {subtitle}
            </p>
          )}
        </div>
        <NavLinks
          segmentRoute={segmentRoute ?? "/"}
          navLinks={navLinks ?? []}
        />
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
