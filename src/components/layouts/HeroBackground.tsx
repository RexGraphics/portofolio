import { useEffect, useState } from "react";
import Aurora from "../backgrounds/Aurora/Aurora"
import Particles from "../backgrounds/Particles/Particles"
import SplitText from "../commons/SplitText/SplitText"

const HeroBackground = () => {
    const [isDone, setIsDone] = useState<string>(`opacity-100`);
    const [isDone2, setIsDone2] = useState<string>(`opacity-100`);
    const [bgOpacity, setBgOpacity] = useState<string>('opacity-0');
    setTimeout(() => {
        setIsDone(`opacity-0`);
        setTimeout(() => {
            setBgOpacity(`opacity-100`);
            setIsDone2(`opacity-0`);
            document.body.style.overflow = 'auto';
        },3500);
    },2250);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className={`w-full h-3/4 transition-opacity duration-4000 pointer-events-none ${bgOpacity}`}>
                <Aurora
                    colorStops={["#059669", "#102B20", "#D1FAE5"]}
                    blend={1000}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            <div className={`w-full h-[200svh] absolute top-0 left-0 transition-opacity duration-4000 ${bgOpacity}`}>
                <Particles />
            </div>
            <div className={`w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden transition-opacity duration-500 ${isDone}`}>
                <SplitText
                    text="Hi There!"
                    className="text-4xl font-extrabold text-white m-auto sm:text-6xl md:text-7xl"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </div>
            <div className={`w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden transition-opacity duration-1000 ${isDone2}`}>
                {isDone == 'opacity-0' && (<SplitText
                    text="Let's Build a Connection."
                    className="text-4xl font-extrabold text-white m-auto sm:text-6xl md:text-7xl"
                    delay={50}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />)}
            </div>
        </>
    )
}

export default HeroBackground