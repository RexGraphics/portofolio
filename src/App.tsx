import { useState } from "react";
import HeroBackground from "./components/layouts/HeroBackground";
import Navbar from "./components/layouts/Navbar";
import ClickSpark from "./components/commons/ClickSpark/ClickSpark";
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
function App() {
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
  }, 7000);
  return (
    <div className="w-screen h-[200svh] bg-black overflow-x-hidden">
      <HeroBackground />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {startAll && (
          <div className="w-full max-w-full h-full flex justify-center items-center relative">
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
          </div>
        )}
      </ClickSpark>
    </div>
  );
}

export default App;
