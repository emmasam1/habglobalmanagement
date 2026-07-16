import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ThemeRegistry from "@/components/providers/ThemeRegistry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata = {
  title: "HAB GLOBAL MANAGEMENT LTD",
  description: "Professional Management & Business Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}