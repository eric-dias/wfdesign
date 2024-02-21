import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "WF Design",
  description: "WF Design website clone create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <div className="globalContainer">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
