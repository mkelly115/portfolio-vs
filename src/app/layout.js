import Header from "../components/header/page.jsx"
// import Footer from "@/components/footer/page.jsx";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css"; 

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
        <Header /> 
        {children} 
        {/* <Footer /> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}