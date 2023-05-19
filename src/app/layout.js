import './globals.css';
import NavBar from '@/common-components/navbar&footer/NavBar';
import { Poppins } from '@next/font/google';
import Footer from '@/common-components/navbar&footer/Footer';

export const poppins = Poppins({
  weight: '400',
  style: 'normal',
  variable: '--poppins-font',
  subsets: ['devanagari', 'latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <NavBar />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
