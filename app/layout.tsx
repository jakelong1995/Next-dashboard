import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Header from "@/components/ui/header";

export const meta: Metadata = {
  title: { template: "Acme - %s", default: "Acme is a sample application." },
  description: "Acme is a sample application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen w-full flex-col antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
