'use client';

import { useEffect, useState } from "react";
// import LenisSmoothScroll from 'lenis/react'
import Lenis from 'lenis';
import HeroBackground from "./components/layouts/HeroBackground";
import Navbar from "./components/layouts/Navbar";
import ClickSpark from "./components/commons/ClickSpark/ClickSpark";
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
import Career from "./components/sections/Career";
// import ScrollOverlaySection from "./components/sections/ScrollOverlaySection";

function App() {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Project", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Instagram", link: "https://linkedin.com" },
    { label: "Youtube", link: "https://linkedin.com" },
  ];
  const [startAll, setStartAll] = useState<boolean>(false);
  setTimeout(() => {
    setStartAll(true);
  });

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time: number) {
      scroller.raf(time * .5);
      requestAnimationFrame(raf);
    }

    // eslint-disable-next-line prefer-const
    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        if(rafState != null){
          cancelAnimationFrame(rafState);
        }
        lenisRef.destroy();
      }
    }
  }, []);
  return (
    // <LenisSmoothScroll root>
    <div className="w-screen min-h-[500svh] h-full bg-black overflow-x-hidden">
      <HeroBackground />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {startAll && (
          <main className="w-full h-full flex justify-center items-center relative">
            <Navbar
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#fff"
              openMenuButtonColor="#000000"
              changeMenuColorOnOpen={true}
              colors={["#059669", "#102B20"]}
              logoUrl="/path-to-your-logo.svg"
              accentColor="#059669"
              onMenuOpen={() => console.log("Menu opened")}
              onMenuClose={() => console.log("Menu closed")} isFixed={false} />
            <Home />
            <AboutMe />
            <Career />
          </main>
        )}
      </ClickSpark>
    </div>
    // </LenisSmoothScroll>
  );
}

export default App;
