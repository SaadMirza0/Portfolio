import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Montserrat, Roboto } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', 
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: "Saad Mirza - Full Stack Developer | Portfolio",
  description: "SaadMirza.dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="antialiased">
    
     
          {children}
   <Analytics/>
</body>
    </html>
  );
}
