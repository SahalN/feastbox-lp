/** @format */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { oi } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={oi.variable}>
      <body className='flex flex-col min-h-screen text-white '>
        <header className=' bg-gradient-to-b from-[#FF7B00] to-black px-4 py-8'>
          <Header />
        </header>
        <main className='flex-grow bg-[#FFA200]'>{children}</main>
        <footer className='px-4 py-8 bg-[#FFA200] text-black '>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
