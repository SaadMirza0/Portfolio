import "./globals.css";
import Navbar from "../component/Navbar";

import { Montserrat, Roboto } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Use variables for easier Tailwind integration
});

export const roboto = Roboto({
  weight: ['400', '700'], // Roboto requires specific weights if not a variable font
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: "Portfolio",
  description: "Saad Mirza Portfolio",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="antialiased">
    
     
          {children}
   
</body>
    </html>
  );
}
