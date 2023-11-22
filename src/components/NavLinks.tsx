import { NavLink } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  segmentRoute: string;
  navLinks: NavLink[];
};

export function NavLinks({ segmentRoute, navLinks }: Props) {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row justify-center place-items-center gap-2">
        {navLinks?.map((link) => (
          <li key={link.href}>
            <Button variant={"link"} asChild>
              <Link href={`${segmentRoute}${link.href}`}>{link.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
