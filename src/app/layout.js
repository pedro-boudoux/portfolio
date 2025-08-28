import "./globals.css";
import SmoothScrollHandler from '@/components/SmoothScrollHandler';
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
      <body>
        {children}
        <SmoothScrollHandler />
      </body>
    </html>
  );
}
