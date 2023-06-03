import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Rage Blog",
  description: "Tech News and Tips with hardware, software, reviews and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark:bg-slate-800`}>{children}</body>
    </html>
  );
}
