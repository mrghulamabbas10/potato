import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/layout/Footer";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Potato | Come. Get. Stuffed.",
  description:
    "Big, loaded potatoes piled high with flavor, made fresh all day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased bg-[#F3F0EC] pt-5 md:pt-2`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
