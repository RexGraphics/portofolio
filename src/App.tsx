import { useState } from "react";
import HeroBackground from "./components/layouts/HeroBackground";
import Navbar from "./components/layouts/Navbar";
function App() {
  const [startAll, setStartAll] = useState<boolean>(false);
  setTimeout(()=>{
    setStartAll(true);
  },8000);
  return (
    <div className="w-screen h-[200svh] bg-black overflow-hidden">
      <HeroBackground />
      {startAll && (
        <Navbar/>
      )}
    </div>
  );
}

export default App;
