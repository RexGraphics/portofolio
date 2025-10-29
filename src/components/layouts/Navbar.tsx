import React, { useState } from "react";
import Shuffle from "../commons/Shuffle/Shuffle";
import SplitText from "../commons/SplitText/SplitText";

const Navbar = () => {
    const [splitText, setSplitText] = useState<string>(`opacity-100`);
    const [shuffle, setShuffle] = useState<string>(`opacity-0`);
    const [navBlur, setNavBlur] = useState<boolean>(false);
    const scrollThreshold = 50;

    setTimeout(() => {
        setShuffle(`opacity-100`);
        setTimeout(() => {
            setSplitText(`opacity-0`);
        }, 500);
    }, 2000);

    const handleScroll = () => {
        if (window.scrollY >= scrollThreshold) {
            setNavBlur(true);
        } else {
            setNavBlur(false);

        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <header className={`fixed w-full mx-auto top-0 h-20 flex justify-between items-center transition-all duration-500 ${navBlur ? 'backdrop-blur-sm' : ''}`} >
            <div className="flex w-full h-full justify-start ms-8 items-center text-center mb-2">
                <SplitText
                    text="Gazy"
                    className={`text-[1.2rem] absolute text-white m-auto sm:text-2xl md:text-3xl ${splitText} transition-opacity duration-500`}
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: -20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    glowText={false}
                />
                <Shuffle
                    text="Gazy"
                    className={`text-[1.2rem] text-white absolute sm:text-2xl md:text-3xl ${shuffle} transition-opacity duration-500`}
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    fontClass="font-funnel"
                />
            </div>
            <div className="flex w-full h-full justify-end items-center">
                <div className="flex">
                    <ul>
                        <li>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start me-8">
                                <div className="flex space-x-4">
                                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">
                                        <SplitText
                                            text="Home"
                                            className={`text-[1rem] text-white m-auto sm:text-3xl md:text-3xl`}
                                            delay={100}
                                            duration={0.6}
                                            ease="power3.out"
                                            splitType="chars"
                                            from={{ opacity: 0, y: -20 }}
                                            to={{ opacity: 1, y: 0 }}
                                            threshold={0.1}
                                            rootMargin="-100px"
                                            textAlign="center"
                                            glowText={false}
                                        />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
