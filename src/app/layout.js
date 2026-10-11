
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata = {
  title: "SMK Muhammadiyah Kajen",
  description: "Website Profil SMK Muhammadiyah Kajen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}