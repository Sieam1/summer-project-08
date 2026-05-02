import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Summer Essentials Store",
  description: "Best Summer Products Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fffaf5] text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}