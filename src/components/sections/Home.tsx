
import Me from "../../assets/images/me.png";
import MeFront from "../../assets/images/me-front.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SplittingText } from "../ui/shadcn-io/splitting-text";
import Download from "../partials/Download";
const circleVariants = {
    initial: { opacity: 1, scale: 0, rotate: -60 },
    animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
            delay: 0.5
        }
    }
};

const imageVariants = {
    initial: { opacity: 1, y: 250 },
    animate: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 12, duration: 1, delay: 0.6 } }
};

// Varian untuk Konten Teks/Samping
// const textContentVariants = {
//     initial: { opacity: 0, x: 50 },
//     animate: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } }
// };
const Home = () => {
    const [start, setStart] = useState<boolean>(false);

    useEffect(() => {
        setStart(true);
    }, []);

    return (
        <section className="w-full max-w-7xl min-h-screen top-0 absolute overflow-hidden" id="home-section">
            <div className="w-full h-152 absolute flex flex-col justify-center items-center md:flex-row mt-40">
                <div className="w-full h-28 absolute text-center -translate-y-70 overflow-hidden flex items-start top-48 justify-center">
                    <p className={`typograph ms-56 sm:ms-0 font-rubik text-7xl sm:text-9xl font-bold text-transparent tracking-[1.5rem] sm:tracking-[3rem] absolute top-0 transition-transform duration-1000 ${start ? "translate-y-12 sm:translate-y-0" : "translate-y-30 sm:translate-y-42"}`}>
                        FULLSTACK
                    </p>
                </div>
                <div className="w-full h-28 absolute text-center -translate-y-42 overflow-hidden flex items-start top-48 justify-center">
                    <p className={`typograph v-2 me-56 sm:me-0 font-rubik text-center text-7xl sm:text-9xl font-bold text-transparent tracking-[1.5rem] sm:tracking-[3rem] absolute top-0 transition-transform duration-1000 ${start ? "translate-y-0" : "-translate-y-30 sm:-translate-y-42"}`}>
                        DEVELOPER
                    </p>
                </div>
                <motion.div
                    className="w-full h-full overflow-hidden pb-48 md:pb-0 mt-8 md:mt-4 lg:mt-0 flex justify-center items-start"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="circle w-64 h-64 md:w-90 md:h-90 lg:w-100 lg:h-100 bg-radial-[at_50%_0%] from-transparent via-transparent via-50% to-green-accent-main absolute flex justify-center items-end rounded-full border-5 border-green-accent-main overflow-hidden"
                        variants={circleVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            className="max-w-none w-76 h-76 md:w-102 md:h-102 lg:w-112 lg:h-112 bg-cover bg-center"
                            style={{ backgroundImage: `url(${Me})` }}
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </motion.div>

                    <motion.div
                        className="circle w-64 h-64 md:w-90 md:h-90 lg:w-100 lg:h-100 bg-transparent absolute flex justify-center items-end rounded-full border-5 border-green-accent-main"
                        variants={circleVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <motion.div
                            className="max-w-none w-76 h-76 md:w-102 md:h-102 lg:w-112 lg:h-112 bg-cover bg-center"
                            style={{ backgroundImage: `url(${MeFront})` }}
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </motion.div>
                </motion.div>
                <div className="w-full h-full flex justify-center items-start mt-24 md:mt-12 z-10">
                    <div className="text-shadow-2xs flex flex-col justify-center items-center md:items-start mt-8">
                        <div className="flex justify-center md:justify-start">
                            <div className="absolute -translate-y-8 sm:-translate-y-7">
                                <SplittingText
                                    className="text-2xl text-white"
                                    type="chars"
                                    inView
                                    text="I'm"
                                    delay={500}
                                    motionVariants={{
                                        initial: { y: 20, scale: 0.5, opacity: 0, x: 20, rotate: 90 },
                                        animate: { y: 0, scale: 1, opacity: 1, x: 0, rotate: 0 },
                                        transition: { duration: 0.5, ease: 'easeOut' },
                                    }}
                                />
                            </div>
                            <SplittingText
                                className="font-black text-3xl text-center sm:text-[2.5rem] md:text-3xl lg:text-[2.5rem] text-green-accent-main"
                                type="chars"
                                inView
                                text="Ghazwan Fikri Maulana"
                                motionVariants={{
                                    initial: { y: 50, scale: 0, opacity: 0, x: 50, rotate: 90 },
                                    animate: { y: 0, scale: 1, opacity: 1, x: 0, rotate: 0 },
                                    transition: { duration: 0.5, ease: 'easeOut' },
                                }}
                            />
                        </div>
                        <div className="mt-2 overflow-hidden flex justify-center md:justify-start" >
                            <motion.div
                                className="text-white font-rubik w-8/10 text-justify leading-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 1 }}
                                variants={{
                                    hidden: { opacity: 0, y: -80 },
                                    visible: { opacity: 1, y: 0 },
                                }}>
                                I engineer innovative web applications, mastering both Laravel backend architecture and responsive React frontend design. Don't just imagine it—let's build it. Contact me below or explore my CV.
                            </motion.div>
                        </div>
                        <motion.div
                            className="w-8/10 h-full overflow-hidden py-8 flex justify-center items-center gap-4"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <button className="px-6 py-3 text-sm md:text-md lg:text-lg cursor-pointer w-full bg-green-accent-light text-green-accent-main font-semibold rounded-lg shadow-md hover:bg-green-text-medium transition duration-300 relative">
                                Let's Talk
                            </button>
                            <Download />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home