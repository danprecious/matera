import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/state_manager/context";
import UploadForm from "@/components/upload/form";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "matera",
  description: "an online material collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg text-textcolor`}>
        <ContextProvider>
          
          {children}
          </ContextProvider>
      </body>
    </html>
  );
}
