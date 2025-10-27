import Aurora from "./components/backgrounds/Aurora/Aurora";
import Particles from "./components/backgrounds/Particles/Particles";
import BlurText from "./components/cummons/BlurText/BlurText";
function App() {

  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-full h-full">
        <Aurora colorStops={["#059669", "#102B20", "#D1FAE5"]} blend={1000} amplitude={1.0} speed={0.5} />
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-content-center align-items-center overflow-hidden">
        <BlurText
          text="Ghazwan"
          delay={50}
          animateBy="letters"
          direction="top"
          // onAnimationComplete={handleGlow}
          className="text-9xl font-extrabold text-white m-auto"
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <Particles />
      </div>
    </div>
  )
}

export default App
