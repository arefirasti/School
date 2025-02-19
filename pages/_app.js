import Nav from "@/Components/Navigate/Nav";
import { NavContext } from "../Context/Store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Footer from "@/Components/Footer/Footer";
import localFont from "next/font/local";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Loader from "@/Components/Ficher/Loader";

const Koodak = localFont({ src: "../public/fonts/KoodakBold.woff" });

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div className={Koodak.className}>
      {loading && <Loader />}
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
