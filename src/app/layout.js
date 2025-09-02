import "./globals.css";
import SmoothScrollHandler from "@/components/SmoothScrollHandler";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BubbleBackground } from "@/components/animate-ui/backgrounds/gradient";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.className}`}>
      <head>
        <title>Pedro&#39;s Portfolio</title>
        <meta name="description" content="Pedro Boudoux's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        {children}
        <SmoothScrollHandler />
      </body>
    </html>
  );
}
