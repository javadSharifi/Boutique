import "styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "components/Footer";
import Nav from "components/nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BottomNavigation from "@/components/bottomNavigation";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <div className="relative   ">
      <BottomNavigation />
      <Nav />
      <div className="pb-20 min-h-[60vh] sm:pb-0">  
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
