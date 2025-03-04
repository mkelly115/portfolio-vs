import Header from "../components/header/page.jsx"
import Footer from "@/components/footer/page.jsx";
import "./globals.css"; 

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        {children} 
        <Footer />
      </body>
    </html>
  );
}