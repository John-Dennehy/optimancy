import { NavLink } from "@/lib/types";
import Link from "next/link";

type Props = {
  segmentRoute: string;
  navLinks: NavLink[];
};

export function NavLinks({ segmentRoute, navLinks }: Props) {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row">
        {navLinks?.map((link) => (
          <li className="text-xl font-semibold" key={link.href}>
            <Link href={`${segmentRoute}${link.href}`}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
