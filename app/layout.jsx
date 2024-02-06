/** @format */
import Footer from "../components/Footer";
import Header from "../components/Header";
import { oi } from "./font";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={oi.variable}>
      <body className='container flex flex-col py-8 px-4 bg-black text-white'>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
