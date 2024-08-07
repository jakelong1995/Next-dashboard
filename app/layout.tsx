import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
