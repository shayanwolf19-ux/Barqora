import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Barqora — Marketing that moves the needle",
  description:
    "Barqora is a full-service digital marketing agency that turns ad spend into pipeline, followers into buyers, and brands into category leaders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
