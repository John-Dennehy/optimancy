import { TShirtSizes } from "@/lib/types";
import { cn } from "@/utils/ui";

// TODO: Add prop to change the size of the logo and text

type Props = {
  size?: TShirtSizes;
};
export function OptimancyBrand({ size = "3xl" }: Props) {
  // TODO: Add a border around the logo and text to make it look better
  return (
    <div className="flex flex-row -ml-2 -my-2 py-2 place-items-center">
      <Logo size={size} />
      <h1
        className={cn(
          size === "xs" && "text-xs",
          size === "sm" && "text-sm",
          size === "md" && "text-md",
          size === "lg" && "text-lg",
          size === "xl" && "text-xl",
          size === "2xl" && "text-2xl",
          size === "3xl" && "text-3xl",
          size === "4xl" && "text-4xl",
          size === "5xl" && "text-5xl",
          size === "6xl" && "text-6xl",
          size === "7xl" && "text-7xl",
          size === "8xl" && "text-8xl",
          size === "9xl" && "text-9xl",

          "font-slab font-bold h-full pb-[3px]"
        )}
      >
        Optimancy
      </h1>
    </div>
  );
}

interface LogoProps {
  size?: TShirtSizes;
}

function Logo({ size = "5xl" }: LogoProps) {
  //  TODO: Add prop to change the size of the logo
  // TODO: Make this logo look better
  let customSize;
  if (size === "xs") customSize = "8px";
  if (size === "sm") customSize = "12px";
  if (size === "md") customSize = "18px";
  if (size === "lg") customSize = "24px";
  if (size === "xl") customSize = "36px";
  if (size === "2xl") customSize = "48px";
  if (size === "3xl") customSize = "60px";
  if (size === "4xl") customSize = "72px";
  if (size === "5xl") customSize = "84px";
  if (size === "6xl") customSize = "96px";
  if (size === "7xl") customSize = "108px";
  if (size === "8xl") customSize = "120px";
  if (size === "9xl") customSize = "132px";

  return (
    <svg
      width={customSize}
      height={customSize}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="100,30 30,100 100,170" fill="lightcyan" />
      <polygon points="100,170 170,100 100,30" fill="green" />
      <polygon points="30,100 100,170 100,100" fill="lightgreen" />
      <polygon points="100,100 100,170 170,100" fill="lime" />
      <polygon points="100,30 100,170 55,100" fill="cyan" />
      <polygon points="100,170 100,30 145,100" fill="darkturquoise" />
      <polygon points="55,100 100,170 100,100" fill="turquoise" />
      <polygon points="55,100 100,100 100,170" fill="mediumturquoise" />
    </svg>
  );
}
