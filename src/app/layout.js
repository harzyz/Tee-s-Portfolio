import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lateefah Abdulrahman | UI/UX Designer",
  description: "UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="beams">{children}</body>
    </html>
  );
}
