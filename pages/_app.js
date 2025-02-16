import Nav from "@/Components/Navigate/Nav";
import { NavContext } from "../Context/Store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import localFont from "next/font/local";

const Koodak = localFont({ src: "../public/fonts/KoodakBold.woff" });

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className={Koodak.className}>
      <NavContext.Provider
        value={{ isOpen, setIsOpen, isLoggedIn, setIsLoggedIn }}
      >
        <div>
          <Nav />
        </div>
        <Component {...pageProps} />
      </NavContext.Provider>
      <div>
        <Footer />
      </div>
    </div>
  );
}
