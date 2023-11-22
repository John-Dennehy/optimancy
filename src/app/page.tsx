import Link from "next/link";

import Header from "@/components/Header";
import { OptimancyBrand } from "@/components/OptimancyBrand";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <div className="container mx-auto h-full place-items-center">
        <div className="flex flex-col h-full gap-16  place-items-center justify-between p-24">
          <div className="flex flex-col  gap-4 items-center justify-center">
            <OptimancyBrand size="9xl" />
            <h2 className="text-3xl font-slab text-center">
              A character builder for Optimancers
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button
              asChild
              className="bg-gradient-to-br  from-purple-700 to-red-700 hover:bg-purple-800 text-white "
            >
              <Link href="/DC20">Go to DC20 Tools</Link>
            </Button>
            {/* <Image src="/images/hero.png" width={500} height={500} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
