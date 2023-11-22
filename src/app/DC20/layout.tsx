import { ReactNode } from "react";
import { Header } from "@/components/Header";
import config from "./segment.config";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header config={config} />
      <main className="container mx-auto">{children}</main>
    </>
  );
}

export default Layout;
