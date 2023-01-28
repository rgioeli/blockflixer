import "./globals.css";
import Header from "./Header";
import { Inter } from "@next/font/google";
import Search from "./Search";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-600 text-white overflow-x-hidden`}
      >
        <Header />
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
