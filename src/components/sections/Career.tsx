import { motion } from 'framer-motion';
import bg1 from '../../assets/images/bg/bg1.png';
import bg2 from '../../assets/images/bg/bg2.png';
import bg3 from '../../assets/images/bg/bg3.png';
import bg4 from '../../assets/images/bg/bg4.png';
import bg5 from '../../assets/images/bg/bg5.png';
import { useEffect, useRef } from 'react';

const Career = () => {
    let bg1ref = useRef<HTMLImageElement>(null);
    let bg2ref = useRef<HTMLImageElement>(null);
    let bg3ref = useRef<HTMLImageElement>(null);
    let bg4ref = useRef<HTMLImageElement>(null);
    let bg5ref = useRef<HTMLImageElement>(null);

    // const skills = [
    //     { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    //     { category: 'Backend', items: ['Laravel', 'Node.js', 'PHP', 'MySQL'] },
    //     { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
    // ];

    // const stats = [
    //     { value: '3+', label: 'Years Experience' },
    //     { value: '20+', label: 'Projects Completed' },
    //     { value: '15+', label: 'Happy Clients' },
    // ];

    // const timelineEvents = [
    //     {
    //         year: '2022',
    //         title: 'Started Web Development',
    //         description: 'Began my journey in web development, learning HTML, CSS, and JavaScript.',
    //     },
    //     {
    //         year: '2023',
    //         title: 'First Fullstack Project',
    //         description: 'Built my first fullstack application using React and Laravel.',
    //     },
    //     {
    //         year: '2024',
    //         title: 'Freelancing & Open Source',
    //         description: 'Started freelancing and contributing to open-source projects.',
    //     },
    //     {
    //         year: '2025',
    //         title: 'Current Focus',
    //         description: 'Specializing in modern React applications and scalable backend solutions.',
    //     },
    // ];

    useEffect(() => {
        const handleScrollParallax = () => {
            const scrollY = window.scrollY;

            if (bg1ref.current) bg1ref.current.style.transform = `translateY(${scrollY * 0.32}px)`;
            if (bg2ref.current) bg2ref.current.style.transform = `translateY(${scrollY * 0.26}px)`;
            if (bg3ref.current) bg3ref.current.style.transform = `translateY(${scrollY * 0.18}px)`;
            if (bg4ref.current) bg4ref.current.style.transform = `translateY(${scrollY * 0.10}px)`;
            if (bg5ref.current) bg5ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        };

        handleScrollParallax();

        window.addEventListener('scroll', handleScrollParallax, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScrollParallax);
        };
    }, []);


    return (
        <section className="w-full min-h-screen h-[2000px] top-[220vh] absolute overflow-visible" id="career-section">
            <div className="background overflow-visible">
                <div className="bgSky w-full h-3/4 -z-10 -top-156 bg-linear-to-b from-5% from-transparent to-95% to-green-accent-light absolute"></div>
                <img ref={bg1ref} src={bg1} className={`absolute -top-130 w-full`} />
                <img ref={bg2ref} src={bg2} className={`absolute -top-110 w-full`} />
                <img ref={bg3ref} src={bg3} className={`absolute -top-80 w-full`} />
                <img ref={bg4ref} src={bg4} className={`absolute -top-30 w-full`} />
                <div ref={bg4ref} className={`absolute top-80 w-full h-full bg-linear-to-b from-[#003425] to-black z-10`} > </div>
                <img ref={bg5ref} src={bg5} className={`absolute -top-148 w-full brightness-200`} />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 mt-4"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        My <span className="text-green-accent-main">Career</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-accent-main mx-auto rounded-full"></div>
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="bg-green-accent-dark/20 backdrop-blur-sm rounded-xl p-6 text-center border border-green-accent-main/30"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-green-accent-main">{stat.value}</div>
                            <div className="text-green-text-medium mt-2">{stat.label}</div>
                        </div>
                    ))}
                </motion.div> */}

                <div className="relative mb-20">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-accent-main/30"></div>
                    {/* 
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                        >
                            <div className="w-1/2 flex justify-center">
                                <div className="text-center">
                                    <div className="text-green-accent-main text-2xl font-bold">{event.year}</div>
                                </div>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-accent-main border-4 border-green-bg-dark z-10"></div>

                            <div className="w-1/2 px-8">
                                <div className="bg-green-accent-dark/20 backdrop-blur-sm rounded-xl p-6 border border-green-accent-main/30 shadow-lg">
                                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className="text-green-text-medium">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))} */}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">My Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="bg-green-accent-dark/20 backdrop-blur-sm rounded-xl p-6 border border-green-accent-main/30"
                            >
                                <h4 className="text-green-accent-main font-bold text-lg mb-4">{skillGroup.category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-green-accent-main/10 text-green-accent-main rounded-full text-sm border border-green-accent-main/30"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div> */}

                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold text-white mb-4">My Journey</h3>
                    <p className="text-white leading-relaxed text-lg max-w-3xl mx-auto">
                        Hi! I'm <span className="font-semibold text-green-accent-main">Ghazwan Fikri Maulana</span>,
                        a passionate fullstack developer who loves turning ideas into reality through clean,
                        efficient code.
                    </p>
                    <p className="text-white leading-relaxed text-lg max-w-3xl mx-auto mt-4">
                        I specialize in building modern web applications using React and Laravel.
                        My journey in web development started with curiosity and has grown into a
                        dedication to creating seamless user experiences and robust backend systems.
                    </p>
                    <p className="text-white leading-relaxed text-lg max-w-3xl mx-auto mt-4">
                        When I'm not coding, you'll find me exploring new technologies, contributing
                        to open-source projects, or sharing knowledge with the developer community.
                    </p>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Career;