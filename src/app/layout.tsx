import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/common/Navbar'
import FooterSection from '@/components/sections/FooterSection'


const poppins = Poppins({ subsets: ["latin"],  weight: ["100", "200", "300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Moveis Web",
  description: "Get any furniture items on the fly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='bg-white'>
          <Navbar />
          {children}
          <div className='mt-[56px]'>
            <FooterSection />
          </div>
        </main>
        </body>
    </html>
  );
}
