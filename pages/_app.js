import Nav from "@/Components/Navigate/Nav";
import { NavContext } from "../Context/Store";
import "@/styles/globals.css";
import { useState } from "react";
import Footer from "@/Components/Footer/Footer";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <NavContext.Provider
        value={{ isOpen, setIsOpen, isLoggedIn, setIsLoggedIn }}
      >
        <div className="sticky">
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
