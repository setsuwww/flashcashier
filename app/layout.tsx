import './styles/globals.css'
import { Geist } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

// app/layout.tsx
export const metadata: Metadata = {
  title: "FlashCashier",
  icons: {
    icon: "/fc.png", // jika simpan di public/
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.className}`}>
      <body className="min-h-screen flex items-center justify-center bg-radial-[at_50%_75%] from-orange-300 via-orange-100 to-orange-50 antialiased">
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
